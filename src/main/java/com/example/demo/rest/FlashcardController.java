package com.example.demo.rest;

import com.example.demo.dao.FlashcardDaoImpl;
import com.example.demo.entity.Flashcard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//This is to allow calls from React
@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class FlashcardController {


    private final FlashcardDaoImpl flashcardDaoImpl;

    @Autowired
    public FlashcardController(FlashcardDaoImpl flashcardDaoImpl) {
        this.flashcardDaoImpl = flashcardDaoImpl;
    }

    //http://localhost:8080/retrieveAllEmployees
    @GetMapping("/retrieveAllFlashcard")
    public List<Flashcard> findAll() {
        return flashcardDaoImpl.findAll();
    }

    @GetMapping("/flashcard/{FlashcardID}")
    public Flashcard findFlashcardByID(@PathVariable("FlashcardID") int flashcardID) {

        Flashcard flashcard = flashcardID.findFlashcardByID(flashcardID);

        if(flashcard == null) {
            throw new RuntimeException("FlashcardID is not found : " + flashcardID);
        }

        return flashcard;
    }



    //http://localhost:8080/addEmployee
    @PostMapping("/addFlashcard")
    public Flashcard addFlashcard(@RequestBody Flashcard theFlashcard) {
        //also just in case they pass an id in JSON .... set id to o
        //this is to force a save of new item .... instead of update
        theFlashcard.setId(0);

        flashcardDaoImpl.save(theFlashcard);
        return theFlashcard;
    }

    //http://localhost:8080/updateFlashcard
    @PutMapping("/updateFlashcard")
    public Flashcard updateFlashcard(@RequestBody Flashcard updateFlashcard) {
        //No theFlashcard.setId(0); this will execute an update instead of a create
        flashcardDaoImpl.save(updateFlashcard);
        return updateFlashcard;
    }

    //http://localhost:8080/deleteFlashcard/1
    @DeleteMapping("/deleteFlashcard/{flashcardId}")
    public String deleteFlashcard(@PathVariable int flashcardId) {

        //Creating a tempFlashcard to check to see if an employee exists
        Flashcard tempFlashcard = flashcardDaoImpl.findById(flashcardId);

        //This will throw an exception if the Flashcard is null
        if(tempFlashcard == null) {
            throw new RuntimeException("Flashcard is not found : " + flashcardId);
        }

        //This will execute the deleteByID method in the FlashcardDaoImpl.
        flashcardDaoImpl.deleteById(flashcardId);
        return "Deleted Flashcard id : " + flashcardId;
    }
}
