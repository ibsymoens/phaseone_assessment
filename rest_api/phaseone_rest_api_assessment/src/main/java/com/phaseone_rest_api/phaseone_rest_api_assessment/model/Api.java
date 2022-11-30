package com.phaseone_rest_api.phaseone_rest_api_assessment.model;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
public class Api {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String text;
    @CreationTimestamp
    private Date dateAndTimeCreated;

    public Api() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) { this.text = text.replaceAll("", " ").trim(); }

    public Date getDateAndTimeCreated() {
        return dateAndTimeCreated;
    }

    public void setDateAndTimeCreated(Date dateAndTimeCreated) {
        this.dateAndTimeCreated = dateAndTimeCreated;
    }
}
