package com.ecommerceproject.eshop.repository;

import com.ecommerceproject.eshop.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepo extends JpaRepository<Order, Long>{
}
