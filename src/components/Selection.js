import React from "react";

class Selection extends React.Component {
  // Figuring out which radio button is being selected
  valueSelected = "";
  handleChange = event => {
    this.valueSelected = event.target.value;
  };

  // check if the answer give correct, send back to main app
  checker = () => {
    const point = this.props.answer === this.valueSelected ? 1 : 0;
    return this.props.correct(point);
  };

  render(props) {
    let button;

    if (this.props.select.length > 0 && this.props.current === 9) {
      button = (
        <button onClick={this.checker} className="positive ui button">
          Show Me My Score
        </button>
      );
    } else if (this.props.select.length > 0) {
      button = (
        <button onClick={this.checker} className="positive ui button">
          Next Question
        </button>
      );
    } else {
      button = null;
    }

    return (
      <div className="ui form">
        <div className="grouped fields">
          {this.props.select.map(sel => (
            <div className="field">
              <div key={sel} className="ui radio checkbox">
                <input
                  onChange={this.handleChange}
                  type="radio"
                  name="example2"
                  value={sel}
                />
                <label>{sel}</label>
              </div>
            </div>
          ))}
        </div>
        {button}
      </div>
    );
  }
}

export default Selection;
