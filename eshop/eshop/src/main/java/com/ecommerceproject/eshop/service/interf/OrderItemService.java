package com.ecommerceproject.eshop.service.interf;

import com.ecommerceproject.eshop.dto.OrderRequest;
import com.ecommerceproject.eshop.dto.Response;
import com.ecommerceproject.eshop.enums.OrderStatus;
import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;

public interface OrderItemService {
    Response placeOrder(OrderRequest orderRequest);
    Response updateOrderItemStatus(Long orderItemId, String status);
    Response filterOrderItems(OrderStatus status, LocalDateTime startDate, LocalDateTime endDate, Long itemId, Pageable pageable);
}
