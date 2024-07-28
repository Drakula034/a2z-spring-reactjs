package com.a2z.product_service.controller.customer;

import com.a2z.product_service.mapper.customer.ProductMapperForCustomer;
import com.a2z.product_service.model.dto.ProductResponseForCustomerHomePageDto;
import com.a2z.product_service.model.entity.Product;
import com.a2z.product_service.repository.CategoryRepository;
import com.a2z.product_service.service.ProductServiceForCustomer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.NoSuchElementException;

@Controller
@RequestMapping("/api/customer/products")
public class ProductControllerForCustomer {

    private final CategoryRepository categoryRepository;
    private final ProductMapperForCustomer productMapperForCustomer;
    private final ProductServiceForCustomer productServiceForCustomer;



    @Autowired
    public ProductControllerForCustomer(CategoryRepository categoryRepository, ProductMapperForCustomer productMapperForCustomer, ProductServiceForCustomer productServiceForCustomer) {
        this.categoryRepository = categoryRepository;
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
}
