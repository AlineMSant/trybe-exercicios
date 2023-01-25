import React from "react";

class App extends React.Component {
  constructor() {
    super()
    
    this.firstBtn = this.firstBtn.bind(this);
    this.secondBtn = this.secondBtn.bind(this);
    this.thirdBtn = this.thirdBtn.bind(this);

    this.state = {
      numeroCliquesFirst: 0,
      numeroCliquesSecond: 0,
      numeroCliquesThird: 0,
    }
  }

  changeColor (number) {
    return number % 2 === 0? "green" : "white";
  }
  
firstBtn() {
  this.setState((estadoAnterior, _props) => ({
    numeroCliquesFirst: estadoAnterior.numeroCliquesFirst + 1
  }))
  console.log(`1 ${this.changeColor(this.state.numeroCliquesFirst)}`)
}

secondBtn() {
  this.setState((estadoAnterior, _props) => ({
    numeroCliquesSecond: estadoAnterior.numeroCliquesSecond + 1
  }))
  console.log(`2 ${this.changeColor(this.state.numeroCliquesSecond)}`)
} 

thirdBtn() {
  this.setState((estadoAnterior, _props) => ({
    numeroCliquesThird: estadoAnterior.numeroCliquesThird + 1
  }))
  console.log(`3 ${this.changeColor(this.state.numeroCliquesThird)}`)
} 

  render() {
    const { numeroCliquesFirst, numeroCliquesSecond, numeroCliquesThird } = this.state
    return (
      <div>
        <button onClick={this.firstBtn} style={ {backgroundColor: this.changeColor(numeroCliquesFirst)}}>{numeroCliquesFirst}</button>
        <button onClick={this.secondBtn} style={ {backgroundColor: this.changeColor(numeroCliquesSecond)}}>{numeroCliquesSecond}</button>
        <button onClick={this.thirdBtn} style={ {backgroundColor: this.changeColor(numeroCliquesThird)}}>{numeroCliquesThird}</button>
      </div>
    )
  }
}


export default App;
