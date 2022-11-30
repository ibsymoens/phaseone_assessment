package com.phaseone_web_application_assessment.phaseone_web_application.service;

import com.phaseone_web_application_assessment.phaseone_web_application.model.Note;

import java.util.List;

public interface NoteService {
    public List<Note> getAllNote();
    public Note saveNote(Note note);
    public void deleteNoteById(Integer id);
}
