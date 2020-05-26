import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
//import "./Login.css";
import FlashcardDataService from "../../service/FlashcardDataService";

class Flashcard extends Component{
  constructor(props) {
    super(props)
    this.state = {
      question: "",
      answer: ""
    }
    // const [flip, setflip] = useState(false)
  }



  render() {
    return (
      <div>
        <div className="jumbotron" style={{backgroundColor: "gray"}}>
          <h3 style={{textAlign: "center"}}>Flashcard</h3>
        </div>
        <div className="FlashcardDisplay">
            {/* onClick={() => setflip(!flip)} */}
            {FlashcardDataService.findFlashcardByID}
        </div>
      </div>
    )
  }
}

export default withRouter(Flashcard);