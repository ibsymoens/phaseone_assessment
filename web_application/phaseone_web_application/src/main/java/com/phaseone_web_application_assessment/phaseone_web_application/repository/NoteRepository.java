package com.phaseone_web_application_assessment.phaseone_web_application.repository;

import com.phaseone_web_application_assessment.phaseone_web_application.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends JpaRepository<Note, Integer> {
}
