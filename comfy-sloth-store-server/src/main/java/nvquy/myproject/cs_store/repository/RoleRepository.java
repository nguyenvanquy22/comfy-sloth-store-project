package nvquy.myproject.cs_store.repository;

import nvquy.myproject.cs_store.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, String> {
}
