package com.sharep.be.modules.account;

import static com.sharep.be.modules.account.dto.AccountDto.toDto;

import com.sharep.be.modules.account.dto.AccountDto;
import com.sharep.be.modules.account.dto.AccountDto.AccountResponse;
import com.sharep.be.modules.account.repository.AccountRepository;
import com.sharep.be.modules.account.service.AccountService;
import com.sharep.be.modules.account.validator.AccountValidator;
import com.sharep.be.modules.security.JwtAuthentication;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/accounts")
@RequiredArgsConstructor
@Slf4j
public class AccountController {

    private final AccountService accountService;
    private final AccountRepository accountRepository;
    private final AccountValidator accountValidator;

    @InitBinder("accountRequestDto")
    public void initBinder(WebDataBinder webDataBinder) {
        webDataBinder.addValidators(accountValidator);
    }

    @PostMapping("/sign-up")
    public ResponseEntity<Void> signUp(
            @RequestBody @Valid AccountDto.AccountCreate accountCreate) {
        accountService.signUp(accountCreate);
        return ResponseEntity
                .status(HttpStatus.CREATED).build();
    }

    @GetMapping("/email-check")
    public ResponseEntity<Boolean> checkEmail(@RequestParam String email) {
        return ResponseEntity
                .ok(accountRepository.existsByEmail(email));
    }

//    @GetMapping("/nickname")
//    public ResponseEntity<Boolean> checkNickname(@RequestParam String nickname) {
//        return ResponseEntity
//                .ok(accountRepository.existsByNickname(nickname));
//    }

    @PatchMapping(value = "/image", consumes = {MediaType.APPLICATION_JSON_VALUE,  MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Void> updateImage(@AuthenticationPrincipal JwtAuthentication authentication,
            @RequestPart(value = "image", required = false) MultipartFile image ){
        accountService.updateImage(authentication.id, image);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

//    @GetMapping("/gpt")
//    public ResponseEntity<Void> checkCPT(){
//        log.info("gpt controller : {}", gptService.queryGPT("[Refactor] Route 이름 변경\n" +
//                "[Home] GanttChart 생성 전 \n" +
//                "[Refactor] 글로벌 스타일 수정 \n" +
//                "[Add] dayjs package 추가"));
////        List<Member> allWithIssueAndJob = memberRepository.findAllWithIssueAndJob();
////        log.info("member size  {}", allWithIssueAndJob.size());
//        return ResponseEntity.ok().build();
//    }

    @GetMapping
    public ResponseEntity<AccountResponse> readAccount(
            @AuthenticationPrincipal JwtAuthentication authentication){
        return ResponseEntity.ok(toDto(accountService.readAccount(authentication.id)));
    }

    @GetMapping("/email")
    public ResponseEntity<List<AccountResponse>> readAccount(@RequestParam String email){
        return ResponseEntity.ok(accountService.readAccounts(email).stream()
                .map(AccountDto::toDto).toList());
    }
}
