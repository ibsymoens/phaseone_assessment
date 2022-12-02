package com.phaseone_web_application_assessment.phaseone_web_application.controller;

import com.phaseone_web_application_assessment.phaseone_web_application.model.Note;
import com.phaseone_web_application_assessment.phaseone_web_application.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/note")
@CrossOrigin
public class NoteController {
    @Autowired
    private NoteService noteService;

    @GetMapping("/getAll")
    public List<Note> getAllNotes() {
        return noteService.getAllNote();
    }

    @PostMapping("/add")
    public Note add(@RequestBody Note note) {
        Note newNote = noteService.saveNote(note);
        return newNote;
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id) {
        noteService.deleteNoteById(id);
        return "Deleted successfully.";
    }
}
