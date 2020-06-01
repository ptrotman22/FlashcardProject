import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import FlashcardDataService from '../../service/FlashcardDataService'

class Manageflashcard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcard: [],
      message: null,
      isUser: false
    }
    this.refreshFlashcardRegistry = this.refreshFlashcardRegistry.bind(this)
    this.deleteFlashcardClicked = this.deleteFlashcardClicked.bind(this)
    this.addFlashcardClicked = this.addFlashcardClicked.bind(this)
    this.upDateflashcardClicked = this.upDateflashcardClicked.bind(this)
    this.checkUser= this.checkUser.bind(this)
  }

  componentDidMount() {
    this.refreshFlashcardRegistry();
  }

  refreshFlashcardRegistry() {
    FlashcardDataService.retrieveAllFlashcard().then(response => {this.setState({flashcard: response.data})})
  }

  deleteFlashcardClicked(id) {
    FlashcardDataService.deleteFlashcard(id).then(response => {
      this.setState({message: `Deleted Flashcard: ${id}`})
      alert(this.state.message)
      this.refreshFlashcardRegistry()
    })
  }

  upDateflashcardClicked(id, question, answer) {
    console.log('Update Flashcard Clicked')
    this.props.history.push(`/flashcard/${id}/${question}/${answer}`)
}

  addFlashcardClicked() {
    this.props.history.push("/newflashcard/",{user: this.state.user})
  }

  checkUser(email) {
    return this.state.user === email
  }

  render() {
    return(
      <div className="container">
        <nav className="Navbar">
            <img src="public/flashcards.png" alt="Flashcard Inc"></img>
            <button block name="flashcard" onClick={() =>this.props.history.push("/flashcard")} >
              Study flashcards
            </button>
            <button className="btn btn-warning" onClick={() =>this.props.history.push("/")}>Logout</button>
        </nav>

        <h1 style={{textAlign:"center"}}>Manage Flashcard</h1><br></br>
        <div className="jumbotron" style={{backgroundColor: "gray", color: "white"}}>
          <table className="table">
            <thead>
              <tr style={{textAlign: "center", color: "black"}}>
                <th>Id</th>
                <th>question</th>
                <th>answer</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.flashcard.map(flashcard =>
                <tr style={{textAlign: "center"}} key={flashcard.id}>
                  <td>{flashcard.id}</td>
                  <td>{flashcard.question}</td>
                  <td>{flashcard.answer}</td>
                  <td><button className="btn btn-warning" onClick={() => this.deleteFlashcardClicked(flashcard.id)}>Delete</button></td>
                  <td><button className="btn btn-success" onClick={() => this.upDateEmployeeClicked(flashcard.id, flashcard.question, flashcard.answer)}>Update</button></td>
                </tr>
              )
            }
            </tbody>
          </table>
          <div className="row"style={{width: "100%"}}>
            <br/>
            <div style={{width:"50%"}}>
              <button className="btn btn-success" onClick={this.addFlashcardClicked}>Add Flashcard</button>
            </div>
            <div style={{float: "right", width:"50%"}}>
              <button className="btn btn-warning" onClick={() =>this.props.history.push("/")}>Logout</button>
              <button className="btn btn-warning" name="back" onClick={() =>this.props.history.push("/flashcard/")}>Back</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Manageflashcard)
