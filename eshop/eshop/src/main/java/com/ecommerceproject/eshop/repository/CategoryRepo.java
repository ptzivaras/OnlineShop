package com.ecommerceproject.eshop.repository;

import com.ecommerceproject.eshop.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category, Long> {
}
