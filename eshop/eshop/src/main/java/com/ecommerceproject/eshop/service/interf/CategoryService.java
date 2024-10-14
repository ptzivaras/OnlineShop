package com.ecommerceproject.eshop.service.interf;

import com.ecommerceproject.eshop.dto.CategoryDto;
import com.ecommerceproject.eshop.dto.Response;

public interface CategoryService {
    Response createCategory(CategoryDto categoryRequest);
    Response updateCategory(Long categoryId, CategoryDto categoryRequest);
    Response getAllCategories();
    Response getCategoryById(Long categoryId);
    Response deleteCategory(Long categoryId);
}
