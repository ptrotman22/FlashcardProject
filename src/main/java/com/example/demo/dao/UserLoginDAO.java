package com.example.demo.dao;

import com.example.demo.entity.Flashcard;
import com.example.demo.entity.UserLogin;
import java.util.List;

public interface UserLoginDAO {
    //DAO Methods
    List<UserLogin> findAll();
    UserLogin findById(int theId);
    UserLogin findUserLoginByID(int theId);
    UserLogin findInfoByUserName(String username);
    void save(UserLogin theUserLogin);
    void deleteById(int theId);
}
