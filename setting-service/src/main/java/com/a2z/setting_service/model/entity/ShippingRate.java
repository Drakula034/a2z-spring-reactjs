package com.a2z.setting_service.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "shipping_rates")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ShippingRate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private float rate;
    private int days;

    @Column(name = "cash_enabled")
    private boolean cashEnabled;
    @ManyToOne
    @JoinColumn(name = "country_id")
    @JsonIgnoreProperties("shippingRates")
    private Country country;

    private String state;

    public String toString() {
        return "ShippingRate{" +
                "id=" + id +
                ", rate=" + rate +
                ", days=" + days +
                ", cashEnabled=" + cashEnabled +
                ", country=" + country +
                ", state='" + state + '\'' +
                '}';
    };


}
