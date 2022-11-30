package com.phaseone_rest_api.phaseone_rest_api_assessment.controller;

import com.phaseone_rest_api.phaseone_rest_api_assessment.model.Api;
import com.phaseone_rest_api.phaseone_rest_api_assessment.service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    private ApiService apiService;

    @RequestMapping("/getAll")
    public List<Api> getAll() {
        return apiService.getAll();
    }

    @PostMapping("/add")
    public String add(@RequestBody Api api) {
        Api result = apiService.save(api);
        return result.getText();
    }
}
