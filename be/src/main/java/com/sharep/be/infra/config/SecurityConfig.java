package com.sharep.be.infra.config;

import static org.apache.commons.lang3.math.NumberUtils.toLong;

import com.sharep.be.modules.issue.repository.IssueRepository;
import com.sharep.be.modules.project.repository.ProjectRepository;
import com.sharep.be.modules.security.IssueBasedVoter;
import com.sharep.be.modules.security.JwtAuthenticationTokenFilter;
import com.sharep.be.modules.security.ProjectBasedVoter;
import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authorization.AuthorizationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.access.intercept.RequestAuthorizationContext;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.CorsUtils;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtUtil jwtUtil;
    private final AuthenticationEntryPoint authenticationEntryPoint;
    private final AccessDeniedHandler accessDeniedHandler;
    @Value("${cors.allowedOrigins}")
    private String[] allowedOrigins;

    @Value("${cors.allowedMethods}")
    private String[] allowedMethods;

    @Value("${cors.allowedHeaders}")
    private String[] allowedHeaders;

    @Value("${cors.exposedHeaders}")
    private String[] exposedHeaders;

    @Value("${cors.allowCredentials}")
    private boolean allowCredentials;

    @Value("${cors.maxAge}")
    private long maxAge;

    private final ProjectRepository projectRepository;
    private final IssueRepository issueRepository;
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http

                .csrf(AbstractHttpConfigurer::disable)
                .httpBasic(AbstractHttpConfigurer::disable)
                .formLogin(AbstractHttpConfigurer::disable)
                .exceptionHandling(exceptionHandling ->
                        exceptionHandling
                                .authenticationEntryPoint(authenticationEntryPoint)
                                .accessDeniedHandler(accessDeniedHandler))
                .sessionManagement(
                        session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .headers(header -> header.frameOptions(
                        HeadersConfigurer.FrameOptionsConfig::sameOrigin))
                .cors((cors)-> cors.configurationSource(corsConfigurationSource()))
                .authorizeHttpRequests(
                        authorize ->
                                authorize.requestMatchers("/", "/accounts/**", "/h2-console/**",
                                                "/auth/login", "/jobs/**", "/gs-guide-websocket/**",
                                                "/index.html", "/swagger-ui/**",
                                                "/swagger-resources/**", "/v3/api-docs/**", "/projects/*/hook").permitAll()
                                        .requestMatchers("/projects/*/issues/*").access(
                                                customIssueBasedVoter())
                                        .requestMatchers("/projects/*/**").access(
                                                customProjectBasedVoter())

                                        .requestMatchers(CorsUtils::isPreFlightRequest).permitAll()
                                        .anyRequest().authenticated()

                );

        http.addFilterBefore(jwtAuthenticationTokenFilter(),
                UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    public AuthorizationManager<RequestAuthorizationContext> customProjectBasedVoter(){
        final String regex = "^/api/projects/([^/]+)(/.*)?$";
        final Pattern pattern = Pattern.compile(regex);


        return new ProjectBasedVoter(
                projectRepository, (String url) -> {
            /* url에서 targetId를 추출하기 위해 정규식 처리 */
            Matcher matcher = pattern.matcher(url);
            return matcher.matches() ? toLong(matcher.group(1), -1) : -1;
        });
    }

    public AuthorizationManager<RequestAuthorizationContext> customIssueBasedVoter(){
        final String projectRegex = "^/api/projects/([^/]+)(/.*)?$";
        final Pattern projectPattern = Pattern.compile(projectRegex);

        final String issueRegex = "^/api/projects/[^/]+/issues/([^/]+).*$";
        final Pattern issuePattern = Pattern.compile(issueRegex);

        return new IssueBasedVoter(
                issueRepository, (String url) -> {
            /* url에서 targetId를 추출하기 위해 정규식 처리 */
            Matcher matcher = projectPattern.matcher(url);
            return matcher.matches() ? toLong(matcher.group(1), -1) : -1;
        },
                (String url) -> {
                    /* url에서 targetId를 추출하기 위해 정규식 처리 */
                    Matcher matcher = issuePattern.matcher(url);
                    return matcher.matches() ? toLong(matcher.group(1), -1) : -1;
                }, customProjectBasedVoter());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    public JwtAuthenticationTokenFilter jwtAuthenticationTokenFilter() {
        return new JwtAuthenticationTokenFilter(jwtUtil);
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList(allowedOrigins));
        configuration.setAllowedMethods(Arrays.asList(allowedMethods));
        configuration.setAllowedHeaders(Arrays.asList(allowedHeaders));
        configuration.setExposedHeaders(Arrays.asList(exposedHeaders));
        configuration.setAllowCredentials(allowCredentials);
        configuration.setMaxAge(maxAge);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
