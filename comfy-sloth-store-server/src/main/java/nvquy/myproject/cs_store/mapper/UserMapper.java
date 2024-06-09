package nvquy.myproject.cs_store.mapper;

import nvquy.myproject.cs_store.dto.request.UserRequest;
import nvquy.myproject.cs_store.dto.response.UserResponse;
import nvquy.myproject.cs_store.entity.User;

public class UserMapper {
    public static User toUser(UserRequest userRequest) {
        User user = User.builder()
                .id(userRequest.getId())
                .username(userRequest.getUsername())
                .password(userRequest.getPassword())
                .email(userRequest.getEmail())
                .phone(userRequest.getPhone())
                .address(userRequest.getAddress())
                .build();
        return user;
    }
    public static UserResponse toUserResponse(User user) {
        UserResponse userResponse = UserResponse.builder()
                .id(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .phone(user.getPhone())
                .address(user.getAddress())
                .roles(user.getRoles())
                .build();
        return userResponse;
    }
    public static void toUpdate(User user, UserRequest userRequest) {
        user.setPassword(userRequest.getPassword());
        user.setEmail(userRequest.getEmail());
        user.setPhone(userRequest.getPhone());
        user.setAddress(userRequest.getAddress());
    }
}
