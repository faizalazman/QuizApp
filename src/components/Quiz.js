import React from "react";
import Selection from "./Selection";

const Quiz = props => {
  // Render questions and selections of answers
  const quizTemplate = (
    <div className="ui card fluid center">
      <div className="content">
        <div className="header">{props.questions[props.num]}</div>
        {props.questions.length > 0 ? (
          <Selection
            select={props.selections[props.num]}
            answer={props.answer[props.num]}
            correct={props.isItCorrect}
            current={props.num}
          />
        ) : null}
      </div>
    </div>
  );

  // Shows how many question you've able to answer correctly.
  const markingTemplate = (
    <div>
      <h1>
        You managed to answer {props.mark.reduce((a, b) => a + b, 0)} questions
        correctly. Therefore you got {props.mark.reduce((a, b) => a + b, 0)}{" "}
        point
      </h1>
      <button
        className="ui positive button"
        onClick={() => props.fetchQuestion()}
      >
        Retake Test
      </button>
    </div>
  );

  // choose between these two templates TODO remove number hardcoding
  return <div>{props.num > 9 ? markingTemplate : quizTemplate}</div>;
};

export default Quiz;
