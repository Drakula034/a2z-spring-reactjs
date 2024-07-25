package com.a2z.product_service.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "products")
@Builder
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(unique = true, length = 256, nullable = false)
    private String name;
    @Column(unique = true, length = 256, nullable = true)
    private String alias;
    @Column(columnDefinition = "longtext", nullable = true, name = "short_description")
    private String shortDescription;
    @Column(length = 8000, nullable = true, name = "full_description")
    private String fullDescription;

    @Column(name = "created_time")
    private Date createdTime;
    @Column(name = "updated_time")
    private Date updatedTime;

    private boolean enabled;
    @Column(name = "in_stock")
    private boolean inStock;

    private float cost;

    private float price;
    @Column(name = "discount_percent")
    private float discountPercent;


    private float length;
    private float width;
    private float height;
    private float weight;

    @ManyToOne
    @JoinColumn(name="category_id")
    private Category category;
    @ManyToOne
    @JoinColumn(name="brand_id")
    private Brand brand;

    @Column(name = "main_image")
    private String mainImage;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<ProductImage> images = new ArrayList<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<ProductDetails> productDetails = new ArrayList<>();


    public boolean getInStock() {
        return inStock;
    }

    public void addExtraImage(String imageName){
        this.images.add(new ProductImage(imageName, this));
    }
    public void addProductDetails(String name, String value) {
        this.productDetails.add(new ProductDetails(name, value, this));
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", alias='" + alias + '\'' +
                ", shortDescription='" + shortDescription + '\'' +
                ", fullDescription='" + fullDescription + '\'' +
                ", createdTime=" + createdTime +
                ", updatedTime=" + updatedTime +
                ", enabled=" + enabled +
                ", inStock=" + inStock +
                ", cost=" + cost +
                ", price=" + price +
                ", discountPercent=" + discountPercent +
                ", length=" + length +
                ", width=" + width +
                ", height=" + height +
                ", weight=" + weight +
                ", category=" + (category != null ? category.getCategoryName() : "null") +
                ", brand=" + (brand != null ? brand.getName() : "null") +
                ", mainImage='" + mainImage + '\'' +
                ", images=" + images +
                ", productDetails=" + productDetails +
                '}';
    }

}
