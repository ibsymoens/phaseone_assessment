package com.phaseone_rest_api.phaseone_rest_api_assessment.service;

import com.phaseone_rest_api.phaseone_rest_api_assessment.model.Api;
import com.phaseone_rest_api.phaseone_rest_api_assessment.repository.ApiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApiServiceImpl implements ApiService {

    @Autowired
    private ApiRepository apiRepository;

    @Override
    public List<Api> getAll() {
        return apiRepository.findAll();
    }

    @Override
    public Api save(Api api) {
        return apiRepository.save(api);
    }
}
