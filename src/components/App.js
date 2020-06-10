import React from "react";
import unsplash from "../Api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    //call an unsplash api
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    }); /* promise method to show a images in console
      .then((response) => {
        console.log(response.data.results);
      });*/
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
