package com.phaseone_rest_api.phaseone_rest_api_assessment.service;

import com.phaseone_rest_api.phaseone_rest_api_assessment.model.Api;

import java.util.List;

public interface ApiService {

    public List<Api> getAll();
    public Api save(Api api);
}
