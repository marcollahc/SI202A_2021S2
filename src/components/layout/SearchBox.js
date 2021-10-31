import React, { Component } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordEntered: ""
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleFind = this.handleFind.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleFilter(event) {
    this.setState({ wordEntered: event.target.value });
  }

  handleFind() {
    this.props.action(this.state.wordEntered);
  }

  clearInput() {
    this.setState({ wordEntered: "" });
  }

  render() {
    return (
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder={this.props.placeholder}
            value={this.props.wordEntered}
            onChange={this.handleFilter}
          />
          <div className="searchIcon">
            <SearchIcon onClick={() => this.handleFind()} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;