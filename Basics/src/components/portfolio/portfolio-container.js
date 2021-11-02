import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
        { title: "Maxie's Pizza and Pasta", category: "Food Service"},
        { title: "All Seasons Mental Health", category: "Supportive Care" }, 
        { title: "Fuchu City Board of Education", category: "Education" },
        { title: "Onomichi Jr/Sr High School", category: "Education" }
      ]
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    })
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} />;
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

          <button onClick={() => this.handleFilter('Food Service')}>Food Service</button>
          <button onClick={() => this.handleFilter('Supportive Care')}>Supportive Care</button>
          <button onClick={() => this.handleFilter('Education')}>Education</button>

        {this.portfolioItems()}
      </div>
    )
  }
}