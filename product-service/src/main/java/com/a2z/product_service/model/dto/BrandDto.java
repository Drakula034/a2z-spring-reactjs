package com.a2z.product_service.model.dto;

import com.a2z.product_service.model.entity.Category;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.*;
import java.util.Set;

@Getter
@Setter
public class BrandDto {

    private String name;
    private String logo;
    private List<Category> categories;
}
