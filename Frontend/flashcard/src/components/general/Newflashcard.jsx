import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import FlashcardDataService from '../../service/FlashcardDataService'

class Newflashcard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: ''
    }
    this.handleChangeQuestion = this.handleChangeQuestion.bind(this)
    this.handleChangeAnswer = this.handleChangeAnswer.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  handleChangeQuestion(event){
    this.setState({
      question: event.target.value
    })
    console.log(this.state.question)
  }

  handleChangeAnswer(event){
    this.setState({
      answer: event.target.value
      
    })
    console.log(this.state.answer)
  }

  // handleChange(event) {
  //   this.setState({[event.target.name]: event.target.value})
  //   this.validateForm()
  // }

  handleSubmit() {
    let flashcard = {
      id: -1,
      question: this.state.question,
      answer: this.state.answer,
    }
    FlashcardDataService.addFlashcard(flashcard).then(this.props.history.push(`/flashcard`))
  }

  validateForm() {
    if(this.state.question.length === 0) this.setState({isValid: true})
    else if(this.state.answer.length === 0) this.setState({isValid: true})
    else this.setState({isValid: false})
  
  }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>New Flashcard</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Question:</label>
                            <input className="form-control" type="text" placeholder="question" value={this.state.question} onChange={this.handleChangeQuestion}></input>
                        </div>
                        <div>
                            <label>Answer:</label>
                            <input className="form-control" type="text" placeholder="answer" value={this.state.answer} onChange={this.handleChangeAnswer}></input>
                        </div>
                        <br/><br/>
                      <button className="btn btn-success" type="submit" disabled={this.state.isValid}>Submit</button>&ensp;
                      <button className="btn btn-warning" name="back" onClick={() =>this.props.history.push("/flashcard/")}>Back</button><br/><br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Newflashcard)
