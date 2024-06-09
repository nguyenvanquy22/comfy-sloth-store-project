package nvquy.myproject.cs_store.dto.request;

import jakarta.persistence.ManyToMany;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserRequest {
    String id;
    String username;
    String password;
    String firstName;
    String lastName;
    String email;
    String phone;
    String address;

    @ManyToMany
    List<String> roles;
}
