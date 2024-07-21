package com.a2z.product_service.controller.admin;

import com.a2z.product_service.mapper.ProductMapper;
import com.a2z.product_service.model.dto.ProductDtoForOrder;
import com.a2z.product_service.model.dto.ProductResponseForControl;
import com.a2z.product_service.model.dto.ProductResponseForProductAdminPage;
import com.a2z.product_service.model.entity.Product;
import com.a2z.product_service.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/admin/products")
//@CrossOrigin("*")
public class ProductController {

    private final ProductService productService;
    private final ProductMapper productMapper;

    @Autowired
    public ProductController(ProductService productService, ProductMapper productMapper) {
        this.productService = productService;
        this.productMapper = productMapper;
    }

//    @RequestMapping("/add")
//    public ResponseEntity<String> addProduct(@RequestBody ProductDto productDto){
//        Product product= productMapper.productDtoMapToProduct(productDto, new Product());
//
//        Integer savedProductId = productService.addProduct(product);
//
//        return ResponseEntity.status(HttpStatus.CREATED ).body("Product saved with id: " +savedProductId);
//    }

    @RequestMapping("/{productId}")
    public ResponseEntity<ProductDtoForOrder> getProductByIdForOrderService(@PathVariable String productId){
        Integer id = Integer.parseInt(productId);
        Product product = productService.getProductById(id);
        ProductDtoForOrder productDtoForOrder = ProductMapper.productMapToProductDtoForOrder(product, new ProductDtoForOrder());
        return ResponseEntity.status(HttpStatus.OK).body(productDtoForOrder);

    }

    @RequestMapping("control-panel")
    public ResponseEntity<ProductResponseForControl> getEnabledAndDisabledProductCount(){
        ProductResponseForControl productResponseForControl = productService.getProductEnabledDisabledCount();

        return ResponseEntity.status(HttpStatus.OK).body(productResponseForControl);
    }

    @RequestMapping("")
    public ResponseEntity<List<ProductResponseForProductAdminPage>> getProductsByPage(@RequestParam(defaultValue = "1")Integer page){
        List<ProductResponseForProductAdminPage> products = productService.getProductByPage(page);
        return ResponseEntity.status(HttpStatus.OK).body(products);
    }

    @PutMapping("/{productId}/toggle-status")
    public ResponseEntity<?> toggleProductEnabledStatus(@PathVariable Integer productId){
        boolean isProductEnabled = productService.toggleProductEnabledStatus(productId);

        if(isProductEnabled)return ResponseEntity.status(HttpStatus.OK).build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
