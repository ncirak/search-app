package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.backend.model.entity.Company;
import org.example.backend.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/company")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    //todo exception handling
    // Todo company dto
    @GetMapping("/search")
    public ResponseEntity<List<Company>> findCompaniesBySearchTerm(@RequestParam("searchTerm") String searchTerm) {
        log.info("searchTerm: {}" , searchTerm);
        List<Company> companies = companyService.searchCompanies(searchTerm);
        return new ResponseEntity<>(companies, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Company> addNewCompanyData(@RequestBody Company companyData){
        log.info("New company data: {}", companyData);
        Company newCompanyData = companyService.addCompany(companyData);
        return new ResponseEntity<>(newCompanyData, HttpStatus.CREATED);
    }
}
