package com.example.demo.dao;

import com.example.demo.entity.Flashcard;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import java.util.List;
import java.util.Random;

@Repository
public class FlashcardDaoImpl implements FlashcardDAO {

    private EntityManager entityManager;

    @Autowired
    public FlashcardDaoImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public List<Flashcard> findAll() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Flashcard> myQuery = currentSession.createQuery("from Flashcard");
        List<Flashcard> flashcards = myQuery.getResultList();
        return flashcards;
    }

    @Override
    @Transactional
    public Flashcard findById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        Flashcard theFlashcard = currentSession.get(Flashcard.class, theId);
        return theFlashcard;
    }

    @Override
    @Transactional
    public Flashcard randomFlashcard() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Flashcard> myQuery = currentSession.createQuery("from Flashcard");
        List<Flashcard> flashcards = myQuery.getResultList();
        Random random = new Random(flashcards.size()+1);
        Flashcard theFlashcard = currentSession.get(Flashcard.class, random);
        return theFlashcard;
    }

    @Override
    @Transactional
    public Flashcard findFlashcardByID(int theId){
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Flashcard> theQuery = currentSession.createQuery("FROM Flashcard WHERE id=:flashcardID");
        theQuery.setParameter("flashcardID", theId);
        List<Flashcard> temp = theQuery.getResultList();
        return temp.get(0);
    }

    @Override
    @Transactional
    public void save(Flashcard theFlashcard) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theFlashcard);
    }

    @Override
    @Transactional
    public void deleteById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Flashcard> theQuery = currentSession.createQuery("delete from Flashcard where id=:ID");
        theQuery.setParameter("ID", theId);
        theQuery.executeUpdate();
    }
}
