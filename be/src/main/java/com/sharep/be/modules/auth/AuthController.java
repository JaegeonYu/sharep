package com.sharep.be.modules.auth;

import com.sharep.be.modules.auth.dto.AuthDto;
import com.sharep.be.modules.security.JwtAuthentication;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import static com.sharep.be.modules.auth.dto.AuthDto.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<ApiToken> login(@Valid @RequestBody AuthRequestDto authRequestDto) {
        return ResponseEntity.ok(new ApiToken(authService.login(authRequestDto)));
    }

    /*
    Example JwtAuthentication
    */
    @GetMapping("/check")
    public ResponseEntity<String> login(@AuthenticationPrincipal JwtAuthentication authentication){
        System.out.println(authentication.id);
        System.out.println(authentication.email);
        return ResponseEntity.ok(authentication.email);
    }

}
