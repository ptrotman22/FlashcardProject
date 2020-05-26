package com.example.demo.dao;

import com.example.demo.entity.Flashcard;

import java.util.List;

public interface FlashcardDAO {
    //DAO Methods
    List<Flashcard> findAll();
    Flashcard findById(int theId);
    Flashcard randomFlashcard();
    Flashcard findFlashcardByID();
    void save(Flashcard theFlashcard);
    void deleteById(int theId);
}
