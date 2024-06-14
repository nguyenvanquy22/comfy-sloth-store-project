package nvquy.myproject.cs_store.repository;

import nvquy.myproject.cs_store.entity.InvalidatedToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvalidatedTokenRepository extends JpaRepository<InvalidatedToken, String> {
}
