package nvquy.myproject.cs_store.dto.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductRequest {
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
    List<String> images;
    List<String> colors;
}
