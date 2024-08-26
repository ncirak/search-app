package org.example.backend.service;

import org.example.backend.exception.InvalidSearchTermException;
import org.example.backend.model.entity.Company;
import org.example.backend.repository.CompanyRepository;
import org.example.backend.validator.CompanyValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private CompanyValidator companyValidator;

    /**
     * First checks if company is valid object model, then saves to database
     * @param company data
     * @return saved company data
     */
    public Company addCompany(Company company) {
        companyValidator.validate(company);
        return companyRepository.save(company);
    }

    /**
     *
     * @param searchTerm query parameter
     * @return A list of found companies by searchTerm ordered by relevance
     */
    public List<Company> searchCompanies(String searchTerm) {
        if (searchTerm == null || searchTerm.isEmpty()) {
            throw new InvalidSearchTermException("Search term can not be empty", new Exception());
        }
        return companyRepository.findAllBySearchTermByOrderByRelevanceDesc(searchTerm);
    }
}
