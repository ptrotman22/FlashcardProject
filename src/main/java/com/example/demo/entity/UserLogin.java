package com.example.demo.entity;

import javax.persistence.*;

//Flashcard Entity
@Entity //This will let Java know that this is an entity that we are going to map to a database table.
@Table(name = "userlogin") //This is for the actual name of the database table we are mapping to the class.
public class UserLogin {

    //Define fields
    @Id //This will map the primary key.
    @GeneratedValue(strategy = GenerationType.IDENTITY) //This will auto increment your primary key
    @Column(name = "id") //This is mapping the primary key to the id column in the table.
    private int id;

    @Column(name = "username") //This will map the username field to the column named question in the table.
    private String username;

    @Column(name = "password") //This will map the password field to the column named answer in the table.
    private String password;

    //default constructor
    public UserLogin() {
        }

    //para constructor
    public UserLogin(String username, String password) {
        this.username = username;
        this.password = password;
        }

    //getter/setters
    public int getId() {
        return id;
        }

    public void setId(int id) {
        this.id = id;
        }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    //ToString Method
    @Override
    public String toString() {
        return "UserLogin{" +
        "id=" + id +
        ", username='" + username + '\'' +
        ", password='" + password + '\'' +
        '}';
        }

}
