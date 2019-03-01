import React, { Component } from 'react';
import './App.css';
import { ClickCard } from './components/ClickCard.js';

const Names = [{name: "Jim", visible: "hidden"},
  {name: "Jack", visible: "hidden"},
  {name: "Joe", visible: "hidden"},
  {name: "Tim", visible: "hidden"},
  {name: "Tack", visible: "hidden"},
  {name: "Toe", visible: "hidden"},
  {name: "Zim", visible: "hidden"},
  {name: "Hack", visible: "hidden"},
  {name: "Jim", visible: "hidden"},
  {name: "Jack", visible: "hidden"},
  {name: "Joe", visible: "hidden"},
  {name: "Tim", visible: "hidden"},
  {name: "Tack", visible: "hidden"},
  {name: "Toe", visible: "hidden"},
  {name: "Zim", visible: "hidden"},
  {name: "Gur", visible: "hidden"},
  {name: "Dur", visible: "hidden"},
  {name: "Gur", visible: "hidden"},
  {name: "Dur", visible: "hidden"},
  {name: "Hack", visible: "hidden"}];

  let previousInstance = null;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      shuffledArray: this.shuffleArray(Names)
    }
  }
  shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
    return array;
  }
  resetMe = () => {
    this.setState({
      count: 0,
      shuffledArray: []
    });
    setTimeout(() => {
      this.setState({
        count: 0,
        shuffledArray: this.shuffleArray(Names)
      });
    },1);

  }
  clickHandler = (obj) => {
    console.log("The parent is called from the ClickCard");
    if(!previousInstance){
      previousInstance = obj;
      obj.updateStatus({visible: "visible", styleName: "miniCard spin"});
    } else if (previousInstance) {
      let cnt = this.state.count;
      this.setState({count: ++cnt });
      if (previousInstance.name !== obj.name) {
        obj.updateStatus({visible: "visible", styleName: "miniCard spin"});
        setTimeout(() => {
          obj.updateStatus({visible: "hidden", styleName: "miniCard"});
          previousInstance.updateStatus({visible: "hidden", styleName: "miniCard"})
          previousInstance = "";
        }, 1000);
      } else if (previousInstance.name === obj.name) {
        obj.updateStatus({visible: "visible", styleName: "miniCard spin"});
        previousInstance = "";
      }
    }
  }

  render() {
    return (
      <div className="App, App-header">
        <div className="cardContainer">
        {
          this.state.shuffledArray.map((obj, index) => {
            return <ClickCard className="miniCard" key={index} name={obj.name} visible={obj.visible} parentClickHandler={this.clickHandler}></ClickCard>
          })
        }
        </div>
        <div class="left"><span>Moves</span> : <span>{ this.state.count }</span></div>
        <div><button onClick={this.resetMe}>Reset Me</button></div>
        </div>
    );
  }
}

export default App;
