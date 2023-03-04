import React, { Component } from "react";

class Vehicles extends Component {
    
	constructor(props) {
    super(props)
    this.list_element = React.createRef()
    this.state = {
      items: [
        { text: 'MG Hector'},
        { text: 'Hyundai Venue'},
        { text: 'Toyota Fortuner'},
        { text: 'Hyundai Creta'}
      ]
    }
  }
 
  doSomething(text, index) {
    alert(text);
    <h1>My Favorite Vehicles</h1>
  }
 
  render() {
    return (
        <><div><h1>My Favorite Cars</h1></div>
        
       <ol>
        {this.state.items.map((item, index) => (
          <li key={item.text} onClick={() => this.doSomething(item.text, index)}>
            <span>{item.text}</span>
          </li>
        ))}
      </ol>
      </>
    );
  }
}

export default Vehicles;
