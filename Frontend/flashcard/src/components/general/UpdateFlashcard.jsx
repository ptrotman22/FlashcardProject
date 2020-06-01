import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import FlashcardDataService from '../../service/FlashcardDataService'

class Updateflashcard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcard: [],
      id: this.props.match.params.id, 
      question: '',
      answer: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.refreshFlashcard = this.refreshFlashcard.bind(this)
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

  onSubmit(values) {
    let flashcard = {
      id: this.state.id,
      question: values.question,
      answer: values.answer
    }
    FlashcardDataService.updateFlashcard(flashcard).then(this.props.history.push(`/flashcard`))
  }

    render() {
      let {id, question, answer} = this.state
        return(
            <div>
                <nav className="Navbar">
                    <img src="public/flashcards.png" alt="Flashcard Inc"></img>
                    <button block name="flashcard" onClick={() =>this.props.history.push("/flashcard")} >
                    Study flashcards
                    </button>
                    <button block name="Manageflashcard" onClick={() =>this.props.history.push("/Manageflashcard/")} >
                    Manage flashcards
                    </button>
                    <button className="btn btn-warning" onClick={() =>this.props.history.push("/")}>Logout</button>
                </nav>
                <div>
                    <br></br>
                    <h3>Flashcard Number: {this.state.flashcard.id}</h3>
                    <h3>Question: {this.state.flashcard.question}</h3>
                    <h4>Answer: {this.state.flashcard.answer}</h4>
                </div>

                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Update Flashcard</h3>
                </div>
                <div className="container">
                    <Formik
                        initialValues={{id, question, answer}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-contorl" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset>
                                        <label>Question</label>
                                        <Field className="form-control" type="text" name="question" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Answer</label>
                                        <Field className="form-control" type="text" name="answer" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        } 
                      </Formik>
                    </div>
                  </div>
            </div>
        )
    }
}

export default withRouter(Updateflashcard)
