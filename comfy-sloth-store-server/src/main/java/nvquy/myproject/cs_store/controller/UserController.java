package nvquy.myproject.cs_store.controller;

import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import nvquy.myproject.cs_store.dto.request.UserRequest;
import nvquy.myproject.cs_store.dto.response.ApiResponse;
import nvquy.myproject.cs_store.dto.response.UserResponse;
import nvquy.myproject.cs_store.service.UserService;
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
        List<UserResponse> users = userService.getAllUsers();
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
    @PutMapping("/user/{id}")
    public ApiResponse<UserResponse> updateUser(@PathVariable String id, @RequestBody @Valid UserRequest userRequest) {
        return ApiResponse.<UserResponse>builder()
                .data(userService.updateUser(id, userRequest))
                .build();
    }
    @DeleteMapping("/user/{id}")
    public ApiResponse<String> deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
        return ApiResponse.<String>builder()
                .data("Deleted user with id " + id)
                .build();
    }
}
