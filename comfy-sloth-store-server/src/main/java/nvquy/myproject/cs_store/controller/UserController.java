package nvquy.myproject.cs_store.controller;

import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import nvquy.myproject.cs_store.dto.request.ChangePasswordRequest;
import nvquy.myproject.cs_store.dto.request.UserRequest;
import nvquy.myproject.cs_store.dto.response.ApiResponse;
import nvquy.myproject.cs_store.dto.response.UserResponse;
import nvquy.myproject.cs_store.service.UserService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("/users")
@Slf4j
public class UserController {
    UserService userService;

    @PostMapping
    public ApiResponse<UserResponse> createUser(@RequestBody @Valid UserRequest userRequest) {
        return ApiResponse.<UserResponse>builder()
                .data(userService.createUser(userRequest))
                .build();
    }
    @GetMapping
    public ApiResponse<List<UserResponse>> getUsers() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        log.info("Username: {}", authentication.getName());
        return ApiResponse.<List<UserResponse>>builder()
                .data(userService.getAllUsers())
                .build();
    }
    @GetMapping("/user/{id}")
    public ApiResponse<UserResponse> getUser(@PathVariable String id) {
        return ApiResponse.<UserResponse>builder()
                .data(userService.getUser(id))
                .build();
    }
    @PutMapping("/user")
    public ApiResponse<UserResponse> updateUser(@RequestBody @Valid UserRequest userRequest) {
        return ApiResponse.<UserResponse>builder()
                .data(userService.updateUser(userRequest))
                .build();
    }
    @PutMapping("/user/changePassword")
    public ApiResponse<String> changePassword(@RequestBody @Valid ChangePasswordRequest changePasswordRequest) {
        userService.changePassword(changePasswordRequest);
        return ApiResponse.<String>builder()
                .data("Password changed!")
                .build();
    }
    @DeleteMapping("/user/{id}")
    public ApiResponse<String> deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
        return ApiResponse.<String>builder()
                .data("Deleted user with id " + id)
                .build();
    }
    @GetMapping("/user/myInfo")
    public ApiResponse<UserResponse> getMyInfo() {
        return ApiResponse.<UserResponse>builder()
                .data(userService.getMyInfo())
                .build();
    }
}
