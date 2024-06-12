package nvquy.myproject.cs_store.controller;

import com.nimbusds.jose.JOSEException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import nvquy.myproject.cs_store.dto.request.AuthenticationRequest;
import nvquy.myproject.cs_store.dto.request.IntrospectRequest;
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

    @PostMapping("/token")
    public ApiResponse<AuthenticationResponse> authenticate(@RequestBody final AuthenticationRequest authenticationRequest) {
        log.info("Authenticating request: {}", authenticationRequest);
        return ApiResponse.<AuthenticationResponse>builder()
                .data(authenticationService.authenticate(authenticationRequest))
                .build();
    }

    @PostMapping("/instrospect")
    public ApiResponse<IntrospectResponse> introspect(@RequestBody final IntrospectRequest introspectRequest)
            throws ParseException, JOSEException {
        return ApiResponse.<IntrospectResponse>builder()
                .data(authenticationService.introspect(introspectRequest))
                .build();
    }

}
