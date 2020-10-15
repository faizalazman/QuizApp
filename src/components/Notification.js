import React from "react";

const Notification = ({ fetchQuestion }) => {
  return (
    <div className="ui card fluid center">
      <div className="content">
        <div class="header">Information Technology Quiz</div>
        <div class="description">
          <p>
            This quiz contains 10 questions related to information technology.
            No time limit is imposed.
          </p>
          <p>
            You should answer every question and if you dont know or not sure,
            you may guess. Marking will be done when you have finished answering
            all the questions.
          </p>
          <p>Good luck and have fun.</p>
        </div>
      </div>
      <div className="extra content">
        <button
          className="button ui positive block"
          onClick={() => fetchQuestion()}
        >
          Start Quiz!
        </button>
      </div>
    </div>
  );
};

export default Notification;
