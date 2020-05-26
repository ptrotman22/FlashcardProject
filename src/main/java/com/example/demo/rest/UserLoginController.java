package com.example.demo.rest;

import com.example.demo.entity.UserLogin;
import com.example.demo.dao.UserLoginDaoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//This is to allow calls from React... NOT IMPORTANT RIGHT NOW
@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class UserLoginController {


    private final UserLoginDaoImpl userLoginDaoDaoImpl;

    //Constructor Injection: this is telling the spring framework to wire up your
    //dependencies for the employee DAO.
    @Autowired
    public UserLoginController(UserLoginDaoImpl userLoginDaoDaoImpl) {
        this.userLoginDaoDaoImpl = userLoginDaoDaoImpl;
    }

    //This is a GET request that will read a list of all the User Logins.
    //http://localhost:8080/retrieveAllUserLogin
    @GetMapping("/retrieveAllUserLogin")
    public List<UserLogin> findAll() {
        return userLoginDaoDaoImpl.findAll();
    }

    //http://localhost:8080/UserLogin/1
    @GetMapping("/UserLogin/{UserLoginID}")
    public UserLogin findUserLoginByID(@PathVariable("UserLoginID") int userLoginID) {

        UserLogin userLogin = userLoginDaoDaoImpl.findById(userLoginID);

        if(userLogin == null) {
            throw new RuntimeException("FlashcardID is not found : " + userLoginID);
        }

        return userLogin;
    }

    //http://localhost:8080/password/username
    @GetMapping("/password/{username}")
    public String findPasswordByEmail(@PathVariable("username") String username) {

        UserLogin userLogin = userLoginDaoDaoImpl.findInfoByUserName(username);

        if(userLogin == null) {
            throw new RuntimeException("Email is not found : " + username);
        }

        return userLogin.getPassword();
    }

    //This is a POST request to add a new employee.
    //http://localhost:8080/addUserLogin
    @PostMapping("/addUserLogin")
    public UserLogin addUserLogin(@RequestBody UserLogin theUserLogin) {
        //also just in case they pass an id in JSON .... set id to o
        //this is to force a save of new item .... instead of update
        theUserLogin.setId(0);

        //This will call the UserLoginDaoImpl.save method to save a new UserLogin
        userLoginDaoDaoImpl.save(theUserLogin);
        return theUserLogin;
    }

    //This is a PUT request to update an existing UserLogin.
    //http://localhost:8080/updateUserLogin
    @PutMapping("/updateUserLogin")
    public UserLogin updateUserLogin(@RequestBody UserLogin updateUserLogin) {
        //No theEmployee.setId(0); this will execute an update instead of a create
        userLoginDaoDaoImpl.save(updateUserLogin);
        return updateUserLogin;
    }

    //This is a DELETE request to delete an existing UserLogin.
    //http://localhost:8080/deleteUserLogin/1
    @DeleteMapping("/deleteUserLogin/{UserLoginId}")
    public String deleteUserLogin(@PathVariable int userLoginId) {

        //Creating a tempUserLogin to check to see if an employee exists
        UserLogin tempUserLogin = userLoginDaoDaoImpl.findById(userLoginId);

        //This will throw an exception if the employee is null
        if(tempUserLogin == null) {
            throw new RuntimeException("UserLogin is not found : " + userLoginId);
        }

        //This will execute the deleteByID method in the userLoginDaoDaoImpl.
        userLoginDaoDaoImpl.deleteById(userLoginId);
        return "Deleted employee id : " + userLoginId;
    }

}
