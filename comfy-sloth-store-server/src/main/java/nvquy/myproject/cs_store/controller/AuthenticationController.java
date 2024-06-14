package nvquy.myproject.cs_store.controller;

import com.nimbusds.jose.JOSEException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import nvquy.myproject.cs_store.dto.request.AuthenticationRequest;
import nvquy.myproject.cs_store.dto.request.TokenRequest;
import nvquy.myproject.cs_store.dto.response.ApiResponse;
import nvquy.myproject.cs_store.dto.response.AuthenticationResponse;
import nvquy.myproject.cs_store.dto.response.IntrospectResponse;
import nvquy.myproject.cs_store.service.AuthenticationService;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("/auth")
@Slf4j
public class AuthenticationController {
    AuthenticationService authenticationService;

    @PostMapping("/login")
    public ApiResponse<AuthenticationResponse> authenticate(@RequestBody final AuthenticationRequest authenticationRequest) {
        return ApiResponse.<AuthenticationResponse>builder()
                .data(authenticationService.authenticate(authenticationRequest))
                .build();
    }

    @PostMapping("/introspect")
    public ApiResponse<IntrospectResponse> introspect(@RequestBody final TokenRequest tokenRequest)
            throws ParseException, JOSEException {
        return ApiResponse.<IntrospectResponse>builder()
                .data(authenticationService.introspect(tokenRequest))
                .build();
    }

    @PostMapping("/logout")
    public ApiResponse<Void> logout(@RequestBody final TokenRequest tokenRequest)
            throws ParseException, JOSEException {
        authenticationService.logout(tokenRequest);
        return ApiResponse.<Void>builder().build();
    }

    @PostMapping("/refreshToken")
    public ApiResponse<AuthenticationResponse> refreshToken(@RequestBody final TokenRequest tokenRequest)
            throws ParseException, JOSEException {
        return ApiResponse.<AuthenticationResponse>builder()
                .data(authenticationService.refreshToken(tokenRequest))
                .build();
    }

}
