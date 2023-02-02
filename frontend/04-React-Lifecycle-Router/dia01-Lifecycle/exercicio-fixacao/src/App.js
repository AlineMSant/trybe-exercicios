import './App.css';
import React from 'react';
import Loading from './components/Loading';
import Person from './components/Person';

class App extends React.Component {
  constructor() {
    super();

    this.state ={
      person: [],
      loading: true,
    }

    this.fetchApi = this.fetchApi.bind(this)

  }

  async fetchApi() {
    const fetchApi = await fetch("https://api.randomuser.me/");
    const data = await fetchApi.json();
    const array = data.results;

    this.setState((prevState) => ({
      person: [...prevState.person, array ],
      loading: false,
    }))
  }

  componentDidMount() {
    this.fetchApi();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    console.log(nextState.person[0][0].dob.age);
    const age = 50;
    if(nextState.person[0][0].dob.age < age) return true;
  }

  render() {
    const {loading, person} = this.state;

    if(loading === true) return <Loading /> 
    return(
      <div>
        <Person person={ person[0] }/>
      </div>
    )
  }
}

export default App;
