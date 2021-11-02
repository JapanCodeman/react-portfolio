import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
        { title: "Maxie's Pizza and Pasta", category: "Food Service", slug: 'maxie\'s' },
        { title: "All Seasons Mental Health", category: "Supportive Care", slug: 'all-seasons' }, 
        { title: "Fuchu City Board of Education", category: "Education", slug: 'fuchu-boe' },
        { title: "Onomichi Jr/Sr High School", category: "Education", slug: 'onomichi-jshs' }
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
      return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />;
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