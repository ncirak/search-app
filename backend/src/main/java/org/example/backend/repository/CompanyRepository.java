package org.example.backend.repository;

import org.example.backend.model.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    @Query(value = "SELECT * FROM company WHERE to_tsvector('english', name || ' ' || description || ' ' || address) @@ to_tsquery('english', :searchTerm || ':*') " +
            "ORDER BY ts_rank(to_tsvector('english', name || ' ' || description || ' ' || address), to_tsquery('english', :searchTerm || ':*')) DESC",
            nativeQuery = true)

    List<Company> findAllBySearchTermByOrderByRelevanceDesc(String searchTerm);

}
