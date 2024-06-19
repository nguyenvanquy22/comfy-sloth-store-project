package nvquy.myproject.cs_store.service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import nvquy.myproject.cs_store.dto.request.UserRequest;
import nvquy.myproject.cs_store.dto.response.UserResponse;
import nvquy.myproject.cs_store.entity.Role;
import nvquy.myproject.cs_store.entity.User;
import nvquy.myproject.cs_store.exception.AppException;
import nvquy.myproject.cs_store.exception.ErrorCode;
import nvquy.myproject.cs_store.mapper.UserMapper;
import nvquy.myproject.cs_store.repository.RoleRepository;
import nvquy.myproject.cs_store.repository.UserRepository;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);

    public UserResponse createUser(UserRequest userRequest) {
        if (userRepository.existsByUsername(userRequest.getUsername())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }
        User user = UserMapper.toUser(userRequest);
        user.setPassword(passwordEncoder.encode(userRequest.getPassword()));

        List<Role> roles = new ArrayList<>();
        if (userRequest.getRoles() != null) {
            roles = roleRepository.findAllById(userRequest.getRoles());
        } else {
            roles.add(roleRepository.findByName("USER"));
        }
        user.setRoles(roles);

        user = userRepository.save(user);
        return UserMapper.toUserResponse(user);
    }

    @PostAuthorize("returnObject.username == authentication.name")
    public UserResponse updateUser(String id, UserRequest userRequest) {
        User user = userRepository.findById(id).
                orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));

        UserMapper.toUpdate(user, userRequest);
        user.setPassword(passwordEncoder.encode(userRequest.getPassword()));

        var roles = user.getRoles();
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

    @PostAuthorize("returnObject.username == authentication.name")
    public UserResponse getUser(String id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));
        return UserMapper.toUserResponse(user);
    }

    @PreAuthorize("hasRole('ADMIN')")
    public List<UserResponse> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(UserMapper::toUserResponse)
                .collect(Collectors.toList());
    }

    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }

    @PostAuthorize("returnObject.username == authentication.name")
    public UserResponse getMyInfo() {
        var context = SecurityContextHolder.getContext();
        String name = context.getAuthentication().getName();

        User user = userRepository.findByUsername(name)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));

        return UserMapper.toUserResponse(user);
    }
}
