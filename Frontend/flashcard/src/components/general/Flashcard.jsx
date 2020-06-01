import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
//import "./Login.css";
import './Flashcard.css';
import FlashcardDataService from "../../service/FlashcardDataService";

class Flashcard extends Component{
  constructor(props) {
    super(props)
    this.state = {
      flashcard: [],
      idSend: 1,
      number: [3,2,1]
      // cardID: "1",
      // question: "",
      // answer: "",
      // display: false
    }
    this.addone = this.addone.bind(this)
    this.subone = this.subone.bind(this)
    this.refreshFlashcard = this.refreshFlashcard.bind(this)
    this.deleteflashcardClicked = this.deleteflashcardClicked.bind(this)
    this.randomflashcard = this.randomflashcard.bind(this)
    this.test = this.test.bind(this)
    // this.displayAnswer = this.displayAnswer.bind(this)
  }

  componentDidMount(){
    this.refreshFlashcard()
    
  }

  refreshFlashcard(){
    FlashcardDataService.findFlashcardByID(this.state.idSend)
    .then(
      response => {
        this.setState({
          flashcard: response.data
        })
      }
    )
  }

  addone(){
    FlashcardDataService.findFlashcardByID(++this.state.idSend)
    .then(
      response => {
        this.setState({
          flashcard: response.data
        })
      }
    )
  }
  subone(){
    FlashcardDataService.findFlashcardByID(--this.state.idSend)
    .then(
      response => {
        this.setState({
          flashcard: response.data
        })
      }
    )
  }

  deleteflashcardClicked(id) {
    FlashcardDataService.deleteFlashcard(id).then(response => {
      this.setState({message: `Deleted Flashcard: ${id}`})
      alert(this.state.message)
      this.refreshFlashcard()
    })
  }

  randomflashcard(){
    FlashcardDataService.randomFlashcard()
    .then(
      response => {
        this.setState({
          flashcard: response.data
        })
      }
    )
  }

      test(){
        console.log(this.state.flashcard)
      }
    // displayAnswer(){
    //   this.setState(display == true)
    // }


  render() {
    return (
      <div>
        <nav className="Navbar">
            <img src="public/flashcards.png" alt="Flashcard Inc"></img>
            <button block name="Manageflashcard" onClick={() =>this.props.history.push("/Manageflashcard/")} >
              Manage flashcards
            </button>
            <button className="btn btn-warning" onClick={() =>this.props.history.push("/")}>Logout</button>
        </nav>

        <div className="jumbotron" style={{backgroundColor: "gray"}}>
          <h3 style={{textAlign: "center"}}>Study Flashcard</h3>
          {/* <button onClick={this.test}>Test</button> */}
        </div>
        <div className="FlashcardDisplay">

            
            {/* <button onClick={this.displayAnswer}>Display Answer</button> */}
            {/* if(display == true) {
                {this.state.answer}
            } */}
            
            <button onClick={this.subone}>Previous Flashcard</button>
            <button onClick={this.addone}>Next Flashcard</button>
        </div>
        
        <div>
          <br></br>
          <h3>Flashcard Number: {this.state.flashcard.id}</h3>
          <h3>Question: {this.state.flashcard.question}</h3>
      
          <h4>Answer: {this.state.flashcard.answer}</h4>
        </div>

        <div>
        <br></br>
        <button className="btn btn-warning" onClick={() => this.deleteflashcardClicked(this.state.flashcard.idSend)}>Delete</button>
        <br></br>
        <button onClick={this.randomflashcard}>Random Flashcard</button>
        <br></br>
        <button block name="Newflashcard" onClick={() =>this.props.history.push("/newflashcard/")} >
              Create new flashcard
            </button>
        <br></br>
        <button block name="Manageflashcard" onClick={() =>this.props.history.push("/Manageflashcard/")} >
              Manage flashcards
            </button>

        </div>
        
        <div style={{float: "right", width:"50%"}}>
              <button className="btn btn-warning" onClick={() =>this.props.history.push("/")}>Logout</button>
            </div>
      </div>
    )
  }
}

export default withRouter(Flashcard);