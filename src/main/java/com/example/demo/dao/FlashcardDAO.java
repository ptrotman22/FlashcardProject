package com.example.demo.dao;

import com.example.demo.entity.Flashcard;

import java.util.List;

public interface FlashcardDAO {
    //DAO Methods
    List<Flashcard> findAll();
    Flashcard findById(int theId);
    Flashcard findInfoByEmail(String email);
    void save(Flashcard theFlashcard);
    void deleteById(int theId);
}
