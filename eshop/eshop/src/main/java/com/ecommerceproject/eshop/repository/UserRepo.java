package com.ecommerceproject.eshop.repository;

import com.ecommerceproject.eshop.entity.User;//TODO: antegrapse auto to path ligo giati kanw patates xd
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long>{
    Optional<User> findByEmail(String email);
}
