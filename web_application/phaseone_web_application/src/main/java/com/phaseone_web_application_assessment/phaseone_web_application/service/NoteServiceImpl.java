package com.phaseone_web_application_assessment.phaseone_web_application.service;

import com.phaseone_web_application_assessment.phaseone_web_application.model.Note;
import com.phaseone_web_application_assessment.phaseone_web_application.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteServiceImpl implements NoteService {
    @Autowired
    private NoteRepository noteRepository;

    @Override
    public List<Note> getAllNote() {
        return noteRepository.findAll();
    }

    @Override
    public Note saveNote(Note note) {
        return noteRepository.save(note);
    }

    @Override
    public void deleteNoteById(Integer id) {
        noteRepository.deleteById(id);
    }
}
