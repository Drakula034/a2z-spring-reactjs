package com.a2z.product_service.controller.customer;

import com.a2z.product_service.mapper.customer.ProductMapperForCustomer;
import com.a2z.product_service.model.dto.ProductResponseDtoForCustomer;
import com.a2z.product_service.model.dto.ProductResponseForCustomerHomePageDto;
import com.a2z.product_service.model.entity.Product;
import com.a2z.product_service.repository.CategoryRepository;
import com.a2z.product_service.repository.ProductRepository;
import com.a2z.product_service.service.ProductServiceForCustomer;
import jakarta.ws.rs.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@Controller
@RequestMapping("/api/customer/products")
public class ProductControllerForCustomer {

    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;
    private final ProductMapperForCustomer productMapperForCustomer;
    private final ProductServiceForCustomer productServiceForCustomer;



    @Autowired
    public ProductControllerForCustomer(CategoryRepository categoryRepository, ProductRepository productRepository, ProductMapperForCustomer productMapperForCustomer, ProductServiceForCustomer productServiceForCustomer) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
        this.productMapperForCustomer = productMapperForCustomer;
        this.productServiceForCustomer = productServiceForCustomer;
    }

    @GetMapping("/list/{categoryName}")
    public ResponseEntity<List<ProductResponseForCustomerHomePageDto>> getProductForCustomerHomePage(@PathVariable String categoryName,
                                                                                                     @RequestParam int limit) {
        System.out.println(categoryName);
        if (categoryRepository.findByCategoryName(categoryName) == null) {
            throw new NoSuchElementException("No such category found");
        }

        List<Product> products = productServiceForCustomer.getProductForCustomerHomePage(categoryName, limit);
        List<ProductResponseForCustomerHomePageDto> productList = productMapperForCustomer.productListMapToProductResponseListForCustomerHomePageDto(products);

        return ResponseEntity.status(HttpStatus.OK).body(productList);
    }

    @GetMapping("/category/{categoryName}")
    public ResponseEntity<List<ProductResponseForCustomerHomePageDto>> getProductForCategoryPage(@PathVariable String categoryName,
                                                                                                 @RequestParam int limit){
        if(categoryRepository.findByCategoryName(categoryName) == null){
            throw new NoSuchElementException("No such category found");
        }

        List<Product> products = productServiceForCustomer.getProductForCategoryPage(categoryName, limit);
        List<ProductResponseForCustomerHomePageDto> productList = productMapperForCustomer.productListMapToProductResponseListForCustomerHomePageDto(products);

        return ResponseEntity.status(HttpStatus.OK).body(productList);

    }

    @GetMapping("")
    public ResponseEntity<ProductResponseDtoForCustomer> getProductInfo(@RequestParam Integer productId){
        if(productRepository.findById(productId).isEmpty()) {
            throw new NotFoundException("Product Id is not found");
        }
        Product product = productRepository.findById(productId).get();

        ProductResponseDtoForCustomer productResponseDtoForCustomer = productMapperForCustomer
                .productMapTpProductResponseDtoForCustomer(product, new ProductResponseDtoForCustomer());
//        System.out.println("overview details"+productResponseDtoForCustomer.getProductOverViewDto().toString());
//        System.out.println("image details" + productResponseDtoForCustomer.getProductListImageDto().toString());
//        System.out.println("product description" + productResponseDtoForCustomer.getProductDescriptionDto().toString());
//        System.out.println("product details" + productResponseDtoForCustomer.getProductListDetailsDto().toString());
//        System.out.println("product shipping details" + productResponseDtoForCustomer.getProductShippingDto().toString());


        return ResponseEntity.status(HttpStatus.OK).body(productResponseDtoForCustomer);

    }
}
