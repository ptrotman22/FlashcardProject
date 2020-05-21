package com.example.demo.entity;
import javax.persistence.*;

//Flashcard Entity
@Entity //This will let Java know that this is an entity that we are going to map to a database table.
@Table(name = "flashcard") //This is for the actual name of the database table we are mapping to the class.
public class Flashcard {

    //Define fields
    @Id //This will map the primary key.
    @GeneratedValue(strategy = GenerationType.IDENTITY) //This will auto increment your primary key
    @Column(name = "id") //This is mapping the primary key to the id column in the table.
    private int id;

    @Column(name = "question") //This will map the question field to the column named question in the table.
    private String question;

    @Column(name = "answer") //This will map the answer field to the column named answer in the table.
    private String answer;

    //default constructor
    public Flashcard() {
    }

    //para constructor
    public Flashcard(String question, String answer) {
        this.question = question;
        this.answer = answer;
    }

    //getter/setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }


    //ToString Method
    @Override
    public String toString() {
        return "Flashcard{" +
                "id=" + id +
                ", question='" + question + '\'' +
                ", answer='" + answer + '\'' +
                '}';
    }

}
