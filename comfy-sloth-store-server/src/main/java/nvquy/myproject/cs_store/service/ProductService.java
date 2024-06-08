package nvquy.myproject.cs_store.service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import nvquy.myproject.cs_store.dto.request.ProductRequest;
import nvquy.myproject.cs_store.dto.response.ProductResponse;
import nvquy.myproject.cs_store.entity.Product;
import nvquy.myproject.cs_store.mapper.ProductMapper;
import nvquy.myproject.cs_store.repository.ColorProductRepository;
import nvquy.myproject.cs_store.repository.ImageProductRepository;
import nvquy.myproject.cs_store.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class ProductService {
    ProductRepository productRepository;
    ColorProductRepository colorProductRepository;
    ImageProductRepository imageProductRepository;

    public ProductResponse createProduct(ProductRequest request) {
        Product product = ProductMapper.toProduct(request);

        if (request.getColors() != null) {
            var colors = colorProductRepository.findAllById(request.getColors());
            product.setColors(colors);
        }
        if (request.getImages() != null) {
            var images = imageProductRepository.findAllById(request.getImages());
            product.setImages(images);
        }

        product = productRepository.save(product);

        return ProductMapper.toProductResponse(product);
    }

    public List<ProductResponse> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream()
                .map(ProductMapper::toProductResponse)
                .collect(Collectors.toList());
    }

    public ProductResponse getProductById(String id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        return ProductMapper.toProductResponse(product);
    }

    public ProductResponse updateProduct(String id, ProductRequest request) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        ProductMapper.updateProduct(product, request);
        if (request.getColors() != null) {
            var colors = colorProductRepository.findAllById(request.getColors());
            product.setColors(colors);
        }
        if (request.getImages() != null) {
            var images = imageProductRepository.findAllById(request.getImages());
            product.setImages(images);
        }
        product = productRepository.save(product);
        return ProductMapper.toProductResponse(product);
    }

    public void deleteProduct(String id) {
        productRepository.deleteById(id);
    }
}
