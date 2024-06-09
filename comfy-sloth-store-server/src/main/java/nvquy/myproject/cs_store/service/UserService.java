package nvquy.myproject.cs_store.service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import nvquy.myproject.cs_store.dto.request.UserRequest;
import nvquy.myproject.cs_store.dto.response.UserResponse;
import nvquy.myproject.cs_store.entity.Role;
import nvquy.myproject.cs_store.entity.User;
import nvquy.myproject.cs_store.mapper.UserMapper;
import nvquy.myproject.cs_store.repository.RoleRepository;
import nvquy.myproject.cs_store.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class UserService {
    UserRepository userRepository;
    RoleRepository roleRepository;

    public UserResponse createUser(UserRequest userRequest) {
        if (userRepository.existsByUsername(userRequest.getUsername())) {
            throw new RuntimeException("User already exists");
        }
        User user = UserMapper.toUser(userRequest);
        user.setPassword(userRequest.getPassword());
        List<Role> roles = new ArrayList<>();
        if (userRequest.getRoles() != null) {
            roles = roleRepository.findAllById(userRequest.getRoles());
        } else {
            roles.add(new Role("USER",""));
        }
        user.setRoles(roles);

        user = userRepository.save(user);
        return UserMapper.toUserResponse(user);
    }

    public UserResponse updateUser(String id, UserRequest userRequest) {
        User user = userRepository.findById(id).
                orElseThrow(() -> new RuntimeException("User not found"));
        var roles = user.getRoles();
        UserMapper.toUpdate(user, userRequest);
        if (userRequest.getRoles() != null) {
            var tempRoles = roleRepository.findAllById(userRequest.getRoles());
            if (!tempRoles.isEmpty()) {
                roles = tempRoles;
            }
        }
        user.setRoles(roles);
        user = userRepository.save(user);
        return UserMapper.toUserResponse(user);
    }

    public UserResponse getUser(String id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return UserMapper.toUserResponse(user);
    }

    public List<UserResponse> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(UserMapper::toUserResponse)
                .collect(Collectors.toList());
    }

    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }
}
