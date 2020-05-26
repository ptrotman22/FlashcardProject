import axios from 'axios'

class FlashcardDataService {

  retrieveAllFlashcard() {
    return axios.get(`http://localhost:8080/retrieveAllFlashcard`)
  }

  retrievePasswordByEmail(email) {
    return axios.get(`http://localhost:8080/password/${email}`)
  }

  retrieveAdminByEmail(email) {
    return axios.get(`http://localhost:8080/admin/${email}`)
  }

  retrieveEmployeeByEmail(email) {
    return axios.get(`http://localhost:8080/employee/${email}`)
  }

  addFlashcard(employee) {
    return axios.post(`http://localhost:8080/addEmployee`, employee)
  }

  updateFlashcard(employee) {
    return axios.put(`http://localhost:8080/updateEmployee`, employee)
  }

  deleteFlashcard(id) {
    return axios.delete(`http://localhost:8080/deleteEmployee/${id}`)
  }
}

export default new EmployeeDataService()
