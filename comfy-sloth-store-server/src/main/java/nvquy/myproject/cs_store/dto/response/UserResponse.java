package nvquy.myproject.cs_store.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;
import nvquy.myproject.cs_store.entity.Role;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserResponse {
    String id;
    String username;
    String firstName;
    String lastName;
    String email;
    String phone;
    String address;

    List<Role> roles;
}
