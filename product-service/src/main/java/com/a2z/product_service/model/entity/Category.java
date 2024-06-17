package com.a2z.product_service.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="categories")
public class Category {
    @Id
    @Column(name = "category_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer categoryId;
    @Column(name = "category_name", nullable = false, unique = true)
    private String categoryName;

    @Size(min = 20, max = 120)
    private String description;
    private String image;
    private String enabled;


    public String isEnabled() {
        return enabled;
    }


}
