package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;

@Service
public class ProductService {
	
	private final ProductRepository repository;
	
	public ProductService(ProductRepository repository) {
		this.repository = repository;
	}
	
	public List<Product> getAllProducts() {
		return repository.findAll();
	}
	
	public Product addProduct(Product product) {
		return repository.save(product);
	}
	
	public Product updateProduct(Long id, Product product) {
	    Product existingProduct = repository.findById(id)
	            .orElseThrow(() -> new RuntimeException("Product not found"));

	    existingProduct.setName(product.getName());
	    existingProduct.setDescription(product.getDescription());
	    existingProduct.setImg(product.getImg());
	    existingProduct.setRating(product.getRating());
	    existingProduct.setStock(product.getStock());
	    existingProduct.setPrice(product.getPrice());

	    return repository.save(existingProduct);
	}

	public void deleteProduct(Long id) {
	    repository.deleteById(id);
	}
}
