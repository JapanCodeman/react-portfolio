import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class PorfolioItem extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      porfolioItemClass: ""
    };
  }

  handleMouseEnter() {
    this.setState({porfolioItemClass: 'img-blur'});
  }

  handleMouseLeave() {
    this.setState({porfolioItemClass: ""});
  }

  render() {
    const { id, description, thumb_image_url, logo_url } = this.props.item;
  return (
    <div className="portfolio-item-wrapper"
    onMouseEnter = {() => this.handleMouseEnter()}
    onMouseLeave = {() => this.handleMouseLeave()}
    >
      <div 
        className={"portfolio-img-background " + this.state.porfolioItemClass}
        style={{
          backgroundImage: "url(" + thumb_image_url + ")"
        }}
      />

      <div className="img-text-wrapper">
        <div className="logo-wrapper">
          <img src={logo_url} />
        </div>

        <div className="subtitle">{description}</div>
      </div>
    </div>
  );
  }
}