package com.phaseone_rest_api.phaseone_rest_api_assessment.repository;

import com.phaseone_rest_api.phaseone_rest_api_assessment.model.Api;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApiRepository extends JpaRepository<Api, Integer> {
}
