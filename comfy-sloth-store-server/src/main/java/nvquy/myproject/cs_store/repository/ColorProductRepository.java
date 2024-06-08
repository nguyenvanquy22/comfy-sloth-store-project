package nvquy.myproject.cs_store.repository;

import nvquy.myproject.cs_store.entity.ColorProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ColorProductRepository extends JpaRepository<ColorProduct, String> {
}
