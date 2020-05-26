package com.example.demo.dao;

//IMPORTANT If your code is not working your imports might be incorrect
import com.example.demo.entity.UserLogin;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class UserLoginDaoImpl implements UserLoginDAO {

    //Define field for entity manager
    private EntityManager entityManager;

    //Set up constructor injection
    @Autowired
    public UserLoginDaoImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public List<UserLogin> findAll() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<UserLogin> myQuery = currentSession.createQuery("from UserLogin");
        List<UserLogin> userLogins = myQuery.getResultList();
        return userLogins;
    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public UserLogin findById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        UserLogin theUserLogin = currentSession.get(UserLogin.class, theId);
        return theUserLogin;
    }

    @Override
    @Transactional
    public UserLogin findUserLoginByID(int theId){
        Session currentSession = entityManager.unwrap(Session.class);
        Query<UserLogin> theQuery = currentSession.createQuery("FROM UserLogin WHERE id=:userLoginID");
        theQuery.setParameter("userLoginID", theId);
        List<UserLogin> temp = theQuery.getResultList();
        return temp.get(0);
    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public void save(UserLogin theUserLogin) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theUserLogin);

    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public void deleteById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<UserLogin> theQuery = currentSession.createQuery("delete from UserLogin where id=:userLoginId");
        theQuery.setParameter("userLoginId", theId);
        theQuery.executeUpdate();
    }
}
