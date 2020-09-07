import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    formData: {
      query: "",
    },
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSpellSearch(this.state.formData);
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
    });
  };

  render() {
    return (
      <div>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <input
            name="query"
            type="text"
            value={this.state.formData.query}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
