import axios from 'axios'

class FlashcardDataService {

  retrieveAllFlashcard() {
    return axios.get(`http://localhost:8080/retrieveAllFlashcard`)
  }

  retrieveAllUserLogin() {
    return axios.get(`http://localhost:8080/retrieveAllUserLogin`)
  }

  randomFlashcard() {
    return axios.get(`http://localhost:8080/flashcardRandom`)
  }

  retrievePasswordByEmail(username) {
    return axios.get(`http://localhost:8080/password/${username}`)
  }

  findFlashcardByID(flashcardID) {
    return axios.get(`http://localhost:8080/flashcard/${flashcardID}`)
  }

  addFlashcard(flashcard) {
    return axios.post(`http://localhost:8080/addFlashcard`, flashcard)
  }

  addUserLogin(user) {
    return axios.post(`http://localhost:8080/addUserLogin`, user)
  }

  updateFlashcard(flashcard) {
    return axios.put(`http://localhost:8080/updateFlashcard`, flashcard)
  }

  updateUserLogin(user) {
    return axios.put(`http://localhost:8080/updateUserLogin`, user)
  }

  deleteFlashcard(flashcardID) {
    return axios.delete(`http://localhost:8080/deleteFlashcard/${flashcardID}`)
  }

  deleteUserLogin(Userid) {
    return axios.delete(`http://localhost:8080/deleteUserLogin/${Userid}`)
  }

}

export default new FlashcardDataService()
