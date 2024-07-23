package com.a2z.product_service.controller.admin;

import com.a2z.product_service.mapper.ProductMapper;
import com.a2z.product_service.model.dto.*;
import com.a2z.product_service.model.entity.Product;
import com.a2z.product_service.model.entity.ProductImage;
import com.a2z.product_service.repository.ProductRepository;
import com.a2z.product_service.service.ProductService;
import jakarta.ws.rs.NotFoundException;
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
    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductService productService, ProductMapper productMapper, ProductRepository productRepository) {
        this.productService = productService;
        this.productMapper = productMapper;
        this.productRepository = productRepository;
    }

//    @RequestMapping("/add")
//    public ResponseEntity<String> addProduct(@RequestBody ProductDto productDto){
//        Product product= productMapper.productDtoMapToProduct(productDto, new Product());
//
//        Integer savedProductId = productService.addProduct(product);
//
//        return ResponseEntity.status(HttpStatus.CREATED ).body("Product saved with id: " +savedProductId);
//    }

    @PostMapping("/addOverview")
    public ResponseEntity<Boolean> addProductOverView(@RequestBody ProductOverViewDto productOverViewDto) {
        if (productOverViewDto.getName() == null || productOverViewDto.getName().isEmpty()) {
            throw new Error("Please add product name");
        }

        Product product = productMapper.productOverViewDtoMapToProduct(productOverViewDto, new Product());

        Integer savedProductId = productService.addProductOverView(product);
        if (savedProductId > 0) {
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }

    @GetMapping("/{productId}/editOverView")
    public ResponseEntity<ProductOverViewDto> getProductOverViewDataForEdit(@PathVariable Integer productId) {
        if (productRepository.findById(productId).isEmpty()) {
            throw new NotFoundException("Product id is invalid");
        }
        Product product = productService.getProductOverView(productId);
        ProductOverViewDto productOverViewDto = productMapper.productMapToProductOverViewDto(product, new ProductOverViewDto());
        return ResponseEntity.status(HttpStatus.OK).body(productOverViewDto);
    }

    @PutMapping("/{productId}/editOverView")
    public ResponseEntity<Boolean> updateProductOverView(@PathVariable Integer productId, @RequestBody ProductOverViewDto productOverViewDto) {
        if (productRepository.findById(productId).isEmpty()) {
            throw new NotFoundException("Product id is invalid");
        }

        Product product = productMapper.productOverViewDtoMapToProduct(productOverViewDto, new Product());
        System.out.println(product.toString());
        product.setId(productId);

        boolean isProductUpdated = productService.updateProductOverView(product);

        if (isProductUpdated) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @PutMapping("/{productId}/updateDescription")
    public ResponseEntity<Boolean> updateProductDescription(@PathVariable Integer productId, @RequestBody ProductDescriptionDto productDescriptionDto) {
        if (productRepository.findById(productId).isEmpty()) {
            throw new NotFoundException("Product id is invalid");
        }
        Product product = productMapper.productDescriptionDtoMapToProduct(productDescriptionDto, new Product());
        product.setId(productId);

        boolean isProductUpdated = productService.updateProductDescription(product);

        if (isProductUpdated) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();


    }
    @GetMapping("/{productId}/getDescription")
    public ResponseEntity<ProductDescriptionDto> getProductDescription(@PathVariable Integer productId){
        if (productRepository.findById(productId).isEmpty()) {
            throw new NotFoundException("Product id is invalid");
        }
        Product product = productService.getProductDescription(productId);
        ProductDescriptionDto productDescriptionDto = productMapper.productMapToProductDescriptionDto(product, new ProductDescriptionDto());
        return ResponseEntity.status(HttpStatus.OK).body(productDescriptionDto);
    }

    @GetMapping("/{productId}/getImages")
    public ResponseEntity<ProductListImageDto> getProductListImages(@PathVariable Integer productId){
        if (productRepository.findById(productId).isEmpty()) {
            throw new NotFoundException("Product id is invalid");
        }

        Product product = productService.getProductImages(productId);
//        List<ProductImage> productImages = product.getImages();
        ProductListImageDto productListImageDto = productMapper.productMapToProductListImageDto(product, new ProductListImageDto());
        return ResponseEntity.status(HttpStatus.OK).body(productListImageDto);

    }
    @PutMapping("/{productId}/updateImages")
    public ResponseEntity<Boolean> addProductImages(@PathVariable Integer productId, @RequestBody ProductListImageDto productListImageDto){
        if (productRepository.findById(productId).isEmpty()) {
            throw new NotFoundException("Product id is invalid");
        }
        Product product = productMapper.productListImageDtoMapToProduct(productListImageDto, new Product());
        product.setId(productId);
        boolean isProductUpdated = productService.updateProductImages(product);
        if (isProductUpdated) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }
    @GetMapping("/{productId}/getShippingDetails")
    public ResponseEntity<ProductShippingDto> getProductShippingDetails(@PathVariable Integer productId){
        if (productRepository.findById(productId).isEmpty()) {
            throw new NotFoundException("Product id is invalid");
        }
       Product product = productService.getProductShippingDetails(productId);
        ProductShippingDto productShippingDto = productMapper.productMapToProductShippingDto(product, new ProductShippingDto());
        return ResponseEntity.status(HttpStatus.OK).body(productShippingDto);
    }

    @PutMapping("/{productId}/updateShippingDetails")
    public ResponseEntity<Boolean> updateProductShippingDetails(@PathVariable Integer productId,
                                                                @RequestBody ProductShippingDto productShippingDto){
        if (productRepository.findById(productId).isEmpty()) {
            throw new NotFoundException("Product id is invalid");
        }
        Product product = productMapper.productShippingDtoMapToProduct(productShippingDto, new Product());
        product.setId(productId);
        System.out.println(product.getHeight());
        boolean isUpdated = productService.updateProductShippingDetails(product);
        if(isUpdated){
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @GetMapping("/{productId}/productDetails")
    public ResponseEntity<ProductListDetailsDto> getAllProductDetails(@PathVariable Integer productId){
        if(productRepository.findById(productId).isEmpty()){
            throw new NotFoundException("Invalid product id has been passed");
        }

        Product product = productService.getProductProductDetails(productId);
        ProductListDetailsDto productListDetailsDto= productMapper.productMapToProductListDetailsDto(product, new ProductListDetailsDto());
        return ResponseEntity.status(HttpStatus.OK).body(productListDetailsDto);
    }

    @PutMapping("/{productId}/updateProductDetails")
    public ResponseEntity<Boolean> updateProductProductDetails(@PathVariable Integer productId,@RequestBody ProductListDetailsDto productListDetailsDto){
        if(productRepository.findById(productId).isEmpty()){
            throw new NotFoundException("Invalid product id has been passed");
        }
        System.out.println(productListDetailsDto.getProductDetails().size());
        Product product = productMapper.productListDetailsDtoMapToProduct(productListDetailsDto, new Product());
        product.setId(productId);
//        System.out.println(product.getProductDetails().toString());
        boolean isUpdated = productService.updateProductProductDetails(product);
        if(isUpdated){
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }

    @RequestMapping("/{productId}")
    public ResponseEntity<ProductDtoForOrder> getProductByIdForOrderService(@PathVariable String productId) {
        Integer id = Integer.parseInt(productId);
        Product product = productService.getProductById(id);
        ProductDtoForOrder productDtoForOrder = ProductMapper.productMapToProductDtoForOrder(product, new ProductDtoForOrder());
        return ResponseEntity.status(HttpStatus.OK).body(productDtoForOrder);

    }

    @RequestMapping("control-panel")
    public ResponseEntity<ProductResponseForControl> getEnabledAndDisabledProductCount() {
        ProductResponseForControl productResponseForControl = productService.getProductEnabledDisabledCount();

        return ResponseEntity.status(HttpStatus.OK).body(productResponseForControl);
    }

    @RequestMapping("")
    public ResponseEntity<List<ProductResponseForProductAdminPage>> getProductsByPage(@RequestParam(defaultValue = "1") Integer page) {
        List<ProductResponseForProductAdminPage> products = productService.getProductByPage(page);
        return ResponseEntity.status(HttpStatus.OK).body(products);
    }

    @PutMapping("/{productId}/toggle-status")
    public ResponseEntity<?> toggleProductEnabledStatus(@PathVariable Integer productId) {
        boolean isProductEnabled = productService.toggleProductEnabledStatus(productId);

        if (isProductEnabled) return ResponseEntity.status(HttpStatus.OK).build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
