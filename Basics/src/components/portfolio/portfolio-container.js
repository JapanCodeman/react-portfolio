import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: []
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

  getPortfolioItems() {
    axios.get('https://ryansurdick.devcamp.space/portfolio/portfolio_items')
    .then(response => {
    // handle success
    this.setState({
      data: response.data.portfolio_items
      });
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem 
      key={item.id} 
      item={item}
            />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
        <div className="portfolio-items-wrapper">
          <div className="filter-buttons">
            <button className="btn" onClick={() => this.handleFilter('Web Design')}>Web Design</button>
            <button className="btn" onClick={() => this.handleFilter('Data Management')}>Data Management</button>
            <button className="btn" onClick={() => this.handleFilter('Program Design')}>Program Design</button>
            <button className="btn" onClick={() => this.handleFilter('Future Goals')}>Future Goals</button>
            <button className="btn" onClick={() => this.handleFilter('Education')}>Education</button>
          </div>
      
          <div className="portfolio-items">
            {this.portfolioItems()}
          </div>
        </div>
  
    )
  }
}