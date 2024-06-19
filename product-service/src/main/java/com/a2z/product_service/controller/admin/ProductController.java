package com.a2z.product_service.controller.admin;

import com.a2z.product_service.mapper.ProductMapper;
import com.a2z.product_service.model.dto.ProductDto;
import com.a2z.product_service.model.dto.ProductDtoForOrder;
import com.a2z.product_service.model.entity.Product;
import com.a2z.product_service.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/products")
public class ProductController {

    private final ProductService productService;
    private final ProductMapper productMapper;

    @Autowired
    public ProductController(ProductService productService, ProductMapper productMapper) {
        this.productService = productService;
        this.productMapper = productMapper;
    }

    @RequestMapping("/add")
    public ResponseEntity<String> addProduct(@RequestBody ProductDto productDto){
        Product product= productMapper.productDtoMapToProduct(productDto, new Product());

        Integer savedProductId = productService.addProduct(product);

        return ResponseEntity.status(HttpStatus.CREATED ).body("Product saved with id: " +savedProductId);
    }

    @RequestMapping("/{productId}")
    public ResponseEntity<ProductDtoForOrder> getProductByIdForOrderService(@PathVariable String productId){
        Integer id = Integer.parseInt(productId);
        Product product = productService.getProductById(id);
        ProductDtoForOrder productDtoForOrder = productMapper.productMapToProductDtoForOrder(product, new ProductDtoForOrder());
        return ResponseEntity.status(HttpStatus.OK).body(productDtoForOrder);

    }
}
