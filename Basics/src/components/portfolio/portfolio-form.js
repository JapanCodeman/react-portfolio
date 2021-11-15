import React, { Component } from 'react';
import axios from 'axios';

export default class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      category: "Food Service",
      position: "",
      url: "",
      thumb_image: "",
      banner_image: "",
      logo: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_item[name]", this.state.name);
    formData.append("portfolio_item[description]", this.state.description);
    formData.append("portfolio_item[url]", this.state.url);
    formData.append("portfolio_item[category]", this.state.category);
    formData.append("portfolio_item[position]", this.state.position);

    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    axios
    .post(
      "https://ryansurdick.devcamp.space/portfolio/portfolio_items", 
      this.buildForm(), 
      { withCredentials: true }
    )
    .then(response => {
      this.props.handleSuccessfulFormSubmission(response.data.portfolio_item);
    })
    .catch(error => {
      console.log("portfolio form handleSubmit error", error);
    })

    event.preventDefault();
  }

  render () {
    return (
      <div>
        <h1>PortfolioForm</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
            text="text"
            name="name"
            placeholder="Portfolio Item Name"
            value={this.state.name}
            onChange={this.handleChange}
            />

            <input
              text="text"
              name="url"
              placeholder="URL"
              value={this.state.url}
              onChange={this.handleChange}
              />
          </div>

          <div>
            <input
              text="text"
              name="position"
              placeholder="Position"
              value={this.state.position}
              onChange={this.handleChange}
              />

            <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            >
              <option value="Food Service">Food Service</option>
              <option value="Supportive Care">Supportive Care</option>
              <option value="Education">Education</option>
            </select>
          </div>

          <div>
            <textarea
            text="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}
            />
          </div>

          <div>
            <button type="submit">Save</button>
          </div>

        </form>
      </div>
    );
  }
}