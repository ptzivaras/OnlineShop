package com.ecommerceproject.eshop.service.interf;

import com.ecommerceproject.eshop.dto.LoginRequest;
import com.ecommerceproject.eshop.dto.Response;
import com.ecommerceproject.eshop.dto.UserDto;
import com.ecommerceproject.eshop.entity.User;

public interface UserService {
    Response registerUser(UserDto registrationRequest);
    Response loginUser(LoginRequest loginRequest);
    Response getAllUsers();
    User getLoginUser();
    Response getUserInfoAndOrderHistory();
}
