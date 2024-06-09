package nvquy.myproject.cs_store.repository;

import nvquy.myproject.cs_store.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
    boolean existsByUsername(String username);
}
