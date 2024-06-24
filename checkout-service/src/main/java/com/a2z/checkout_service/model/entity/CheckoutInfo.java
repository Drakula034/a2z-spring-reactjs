package com.a2z.checkout_service.model.entity;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Calendar;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class CheckoutInfo {
    private float productCost;
    private float productTotal;
    private float shippingCost;
    private float paymentTotal;
    private int delivaryDays;
    private Date delivaryDate;
    private boolean cashEnabled;

    public Date getDelivaryDate() {
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DATE, delivaryDays);

        return cal.getTime();
    }
}
