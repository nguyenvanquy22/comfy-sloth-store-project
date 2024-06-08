package nvquy.myproject.cs_store.repository;

import nvquy.myproject.cs_store.entity.ImageProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageProductRepository extends JpaRepository<ImageProduct, String> {
}
