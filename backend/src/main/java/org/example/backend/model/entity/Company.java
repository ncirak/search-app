package org.example.backend.model.entity;


import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "company")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "name", unique = true, nullable = false)
    private String name;

    @Column(name = "description", length = 1024)
    private String description;

    @Column(name = "address", length = 256)
    private String address;

//    @Column(name = "search_vector", columnDefinition = "tsvector")
//    private String searchVector;
}

