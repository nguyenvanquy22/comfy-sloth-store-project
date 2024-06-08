package nvquy.myproject.cs_store.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
public class Product {
    @Id
    String id;
    String name;
    int price;
    String company;
    String category;
    boolean shipping;
    @Column(columnDefinition = "TEXT")
    String description;
    int stock;
    int reviews;
    double stars;
    boolean featured;
    @ManyToMany
    List<ImageProduct> images;
    @ManyToMany
    List<ColorProduct> colors;
}
