import React, { Component } from 'react';

class ClickCard extends Component {
  constructor(props) {
    super(props);
     this.state = {
       visible: props.visible,
       styleName: props.className || "app"
    }
    this.name = props.name;
    this.parentClickHandler = props.parentClickHandler;
  }
  handleMouseClick = () => {
    this.parentClickHandler(this);
  }
  updateStatus (obj) {
    this.setState(obj);
  }
  render() {
    console.log('clickcard render');
    return (
      <div class={ this.state.styleName } onClick= {this.handleMouseClick} name= { this.name }>
        <h1 style={{"visibility": this.state.visible}}> { this.name } </h1>
      </div>
    );
  }
}

export { ClickCard };
