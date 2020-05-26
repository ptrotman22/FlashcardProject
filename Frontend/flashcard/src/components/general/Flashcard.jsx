import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
//import "./Login.css";
import FlashcardDataService from "../../service/FlashcardDataService";

class Flashcard extends Component{
  constructor(props) {
    super(props)
    this.state = {
      flashcard: [],
      // cardID: "1",
      // question: "",
      // answer: "",
      // display: false
    }
    this.handleClick = this.handleClick.bind(this)
    // this.displayAnswer = this.displayAnswer.bind(this)
  }

  handleClick(){
      this.setState(prevState => {
          return {
              cardID: prevState.cardID + 1
          }
      }
    )}
    handleClick2(){
        this.setState(prevState => {
            return {
                cardID: prevState.cardID - 1
            }
        }
      )}
    // displayAnswer(){
    //   this.setState(display == true)
    // }


  render() {
    return (
      <div>
        <div className="jumbotron" style={{backgroundColor: "gray"}}>
          <h3 style={{textAlign: "center"}}>Flashcard</h3>
        </div>
        <div className="FlashcardDisplay">
        <ol>
          <li>question</li>
          <li>answer</li>
        </ol>{
          this.state.flashcard.map(flashcard =>
            <ol>
              <li>{flashcard.question}</li>
              <li>{flashcard.answer}</li>
            </ol>
        )}
            
            <button onClick={this.displayAnswer}>Display Answer</button>
            {/* if(display == true) {
                {this.state.answer}
            } */}
            <button onClick={this.handleClick}>Next Flashcard</button>
            <button onClick={this.handleClick2}>Previous Flashcard</button>
            {/* {FlashcardDataService.findFlashcardByID(this.state.cardID)} */}
        </div>
        <div style={{float: "right", width:"50%"}}>
              <button className="btn btn-warning" onClick={() =>this.props.history.push("/")}>Logout</button>
            </div>
      </div>
    )
  }
}

export default withRouter(Flashcard);