package nvquy.myproject.cs_store.mapper;

import nvquy.myproject.cs_store.dto.request.ProductRequest;
import nvquy.myproject.cs_store.dto.response.ProductResponse;
import nvquy.myproject.cs_store.entity.Product;

public class ProductMapper {
    public static Product toProduct(ProductRequest productRequest) {
        Product product = Product.builder()
                .id(productRequest.getId())
                .name(productRequest.getName())
                .description(productRequest.getDescription())
                .price(productRequest.getPrice())
                .category(productRequest.getCategory())
                .company(productRequest.getCompany())
                .stars(productRequest.getStars())
                .stock(productRequest.getStock())
                .reviews(productRequest.getReviews())
                .shipping(productRequest.isShipping())
                .featured(productRequest.isFeatured())
                .build();
        return product;
    }
    public static ProductResponse toProductResponse(Product product) {
        ProductResponse productResponse = ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .category(product.getCategory())
                .company(product.getCompany())
                .stars(product.getStars())
                .stock(product.getStock())
                .reviews(product.getReviews())
                .shipping(product.isShipping())
                .featured(product.isFeatured())
                .colors(product.getColors())
                .images(product.getImages())
                .build();
        return productResponse;
    }

    public static void updateProduct(Product product, ProductRequest productRequest) {
        product.setName(productRequest.getName());
        product.setDescription(productRequest.getDescription());
        product.setPrice(productRequest.getPrice());
        product.setCategory(productRequest.getCategory());
        product.setCompany(productRequest.getCompany());
        product.setStars(productRequest.getStars());
        product.setStock(productRequest.getStock());
        product.setReviews(productRequest.getReviews());
        product.setShipping(productRequest.isShipping());
        product.setFeatured(productRequest.isFeatured());
    }
}
