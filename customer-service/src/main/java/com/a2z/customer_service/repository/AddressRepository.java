package com.a2z.customer_service.repository;

import com.a2z.customer_service.modal.entity.Address;
import com.a2z.customer_service.modal.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<Address,Integer> {

    @Query("SELECT a from Address a where a.id =?1 and a.customer.id =?2")
    Address findByAddressIdAndCustomerId(Integer addressId, Integer customerId);

    public List<Address> findByCustomer(Customer customer);

    @Query("select a from Address a where a.customer.id =?1 and a.defaultAddress=true")
    Address findDefaultByCustomer(Integer customerId);
}
