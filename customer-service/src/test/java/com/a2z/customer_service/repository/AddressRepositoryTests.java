package com.a2z.customer_service.repository;

import com.a2z.customer_service.modal.entity.Address;
import com.a2z.customer_service.modal.entity.Customer;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
public class AddressRepositoryTests {

    @Autowired
    private AddressRepository addressRepository;

    @Test
    public void addAddressTest() {

        String countryId = "11";
        Integer customerId = 1;

        Address address = new Address();
        address.setCustomer(new Customer(customerId));
        address.setCountryId(countryId);
        address.setFirstName("John");
        address.setLastName("Cena");
        address.setPhoneNumber("1234567890");
        address.setAddressLine1("123 NeyYork City");
        address.setCity("LA");
        address.setState("Los Angles");
        address.setPostalCode("94043");

        Address savedAddress = addressRepository.save(address);

        assertThat(savedAddress.getId()).isGreaterThan(0);

    }

    @Test
    public void findAddressByAddressIdAndCustomerId() {
        Integer customerId = 1;
        Integer addressId = 2;
        Address address = addressRepository.findByAddressIdAndCustomerId(addressId, customerId);
        System.out.println("Address: " + address);
        assertThat(address).isNotNull();
    }

    @Test
    public void updateAddressTest() {
        Integer addressId = 2;

        String firstName = "Abhishek";
        String lastName = "Kumar";

        Address address = addressRepository.findById(addressId).get();

        address.setFirstName(firstName);
        address.setLastName(lastName);

        Address updatedAddress = addressRepository.save(address);

        assertThat(updatedAddress.getFirstName()).isEqualTo(firstName);


    }

    @Test
    public void findCustomerByCustomerId() {
        Integer customerId = 1;
        List<Address> addresses = addressRepository.findByCustomer(new Customer(customerId));
        addresses.forEach(address -> {
            System.out.println(address);
        });

        assertThat(addresses.size()).isNotNull();
    }

    @Test
    public void deleteAddressTest() {
        Integer addressId = 2;
        Address address = addressRepository.findById(addressId).get();
        addressRepository.delete(address);
        Optional<Address> deletedAddress = addressRepository.findById(addressId);
        assertThat(deletedAddress).isEmpty();
    }

    @Test
    public void setDefaultAddressTest() {
        Integer addressId = 3;
        Address address = addressRepository.findById(addressId).get();
        address.setDefaultAddress(true);
        Address updatedAddress = addressRepository.save(address);

        assertThat(updatedAddress.isDefaultAddress()).isEqualTo(true);

    }

    @Test
    public void setNonDefaultAddressTest() {
        Integer addressId = 4;
        List<Address> addresses = addressRepository.findByCustomer(new Customer((1)));
        addresses.forEach(address -> {
            if (address.getId().equals(addressId)) {
                address.setDefaultAddress(true);


            } else {
                address.setDefaultAddress(false);
            }
            addressRepository.save(address);
        });


        assertThat(addressRepository.findById(addressId).get().isDefaultAddress()).isEqualTo(true);

    }

    @Test
    public void getDefaultAddressTest(){
        Integer customerId = 1;
        Address address = addressRepository.findDefaultByCustomer(customerId);
        assertThat(address.isDefaultAddress()).isEqualTo(true);
        System.out.println(address);


    }
}
