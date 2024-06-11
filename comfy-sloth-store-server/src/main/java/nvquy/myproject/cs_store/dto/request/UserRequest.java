package nvquy.myproject.cs_store.dto.request;

import jakarta.persistence.ManyToMany;
import jakarta.validation.constraints.Size;
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
    @Size(min = 3, message = "Username must be at least 3 characters")
    String username;
    @Size(min = 8, message = "Password must be at least 8 characters")
    String password;
    String firstName;
    String lastName;
    String email;
    String phone;
    String address;

    @ManyToMany
    List<String> roles;
}
