package nvquy.myproject.cs_store.controller;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import nvquy.myproject.cs_store.dto.request.ProductRequest;
import nvquy.myproject.cs_store.dto.response.ProductResponse;
import nvquy.myproject.cs_store.entity.Product;
import nvquy.myproject.cs_store.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class ProductController {
        ProductService productService;

        @PostMapping
        public ResponseEntity<ProductResponse> createProduct(@RequestBody ProductRequest productRequest) {
            ProductResponse savedProduct = productService.createProduct(productRequest);
            return ResponseEntity.ok(savedProduct);
        }

        @GetMapping
        public ResponseEntity<List<ProductResponse>> getAllProducts() {
            List<ProductResponse> products = productService.getAllProducts();
            return ResponseEntity.ok(products);
        }

        @GetMapping("/product/{id}")
        public ResponseEntity<ProductResponse> getProduct(@PathVariable String id) {
            ProductResponse productResponse = productService.getProductById(id);
            return ResponseEntity.ok(productResponse);
        }

        @PutMapping("/product/{id}")
        public ResponseEntity<ProductResponse> updateProduct(@PathVariable String id, @RequestBody ProductRequest productRequest) {
            ProductResponse updatedProduct = productService.updateProduct(id, productRequest);
            return ResponseEntity.ok(updatedProduct);
        }

        @DeleteMapping("/product/{id}")
        public ResponseEntity<String> deleteProduct(@PathVariable String id) {
            productService.deleteProduct(id);
            return ResponseEntity.ok("Deleted product with id " + id);
        }

}
