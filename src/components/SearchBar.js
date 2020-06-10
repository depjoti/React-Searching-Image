import React from "react";

class SearchBar extends React.Component {
  /*onInputChange(event) {
    console.log(event.target.value);
  }
  onInputClick() {
    console.log("Input was clicked");
  }*/

  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault(); //to prevent the aumatically refresh the page when type the enter the text and type enter button
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div>
            <label>Image Search</label>
            <input
              type="text"
              //onClick={this.onInputClick}
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
