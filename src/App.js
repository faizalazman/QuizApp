import React from "react";
import Quiz from "./components/Quiz";
import Notification from "./components/Notification";
import axios from "axios";
import "./styles.css";

class App extends React.Component {
  state = {
    questions: [],
    selections: [],
    correct: [],
    mark: [],
    questionNumber: 0
  };

  // getting the question from Open Trivia db
  getQuestions = async () => {
    const res = await axios.get(
      "https://opentdb.com/api.php?amount=30&category=18&difficulty=easy"
    );

    const questionList = [];
    res.data.results.forEach((que) =>
      questionList.push(que.question.replace(/&quot;/g, '"'))
    );

    const selectionList = [];
    res.data.results.forEach((que) => {
      let cleaned = [];
      que.incorrect_answers.forEach((answer) => {
        cleaned.push(answer.replace(/&#039;/g, "'"));
      });
      selectionList.push([
        que.correct_answer.replace(/&#039;/g, "'"),
        ...cleaned
      ]);
    });

    const correctQuestion = [];
    res.data.results.forEach((que) => correctQuestion.push(que.correct_answer));
    console.log(res);

    // Changing the state
    this.setState({
      questions: questionList,
      selections: selectionList,
      correct: correctQuestion
    });
  };

  // allow question number to propagate to state
  isItCorrect = (point) => {
    this.setState({
      mark: [...this.state.mark, point],
      questionNumber: this.state.questionNumber + 1
    });
  };

  render() {
    return (
      <div className="ui container main">
        {this.state.questions.length > 0 ? (
          <Quiz
            questions={this.state.questions}
            selections={this.state.selections}
            answer={this.state.correct}
            isItCorrect={this.isItCorrect}
            num={this.state.questionNumber}
            mark={this.state.mark}
            fetchQuestion={this.getQuestions}
          />
        ) : null}
        {this.state.questions.length === 0 ? (
          <div>
            <Notification fetchQuestion={this.getQuestions} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
