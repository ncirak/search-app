package org.example.backend.validator;

import org.example.backend.exception.ValidationException;
import org.example.backend.model.entity.Company;
import org.springframework.stereotype.Component;

@Component
public class CompanyValidator {

    public void validate(Company company) {
        if (company == null) {
            throw new ValidationException("Company is null");
        }
        validateRequiredFields(company);
    }

    public void validateRequiredFields(Company company) {
        if (company.getName() == null || company.getName().isEmpty()) {
            throw new ValidationException("Name is required");
        }
        if (company.getDescription() == null || company.getDescription().isEmpty()) {
            throw new ValidationException("Description is required");
        }
    }
}
