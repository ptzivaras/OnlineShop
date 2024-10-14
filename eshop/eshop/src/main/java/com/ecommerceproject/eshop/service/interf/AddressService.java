package com.ecommerceproject.eshop.service.interf;

import com.ecommerceproject.eshop.dto.AddressDto;
import com.ecommerceproject.eshop.dto.Response;

public interface AddressService {
    Response saveAndUpdateAddress(AddressDto addressDto);

}
