package nvquy.myproject.cs_store.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;
import nvquy.myproject.cs_store.entity.ColorProduct;
import nvquy.myproject.cs_store.entity.ImageProduct;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductResponse {
    String id;
    String name;
    int price;
    String company;
    String category;
    boolean shipping;
    String description;
    int stock;
    int reviews;
    double stars;
    boolean featured;
    List<ImageProduct> images;
    List<ColorProduct> colors;
}
