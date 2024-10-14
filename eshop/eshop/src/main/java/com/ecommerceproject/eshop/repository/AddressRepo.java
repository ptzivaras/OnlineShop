package com.ecommerceproject.eshop.repository;

import com.ecommerceproject.eshop.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepo extends JpaRepository<Address, Long> {
}
