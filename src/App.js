import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Form from './views/form';
export default class App extends React.Component {
  constructor(props){
      super(props);
      this.state ={
        loading: true,
        categories: [],
      }
  }

  componentDidMount(){
    axios
      .get('http://questence.tqfe.net/api/v1/categories')
      .then(response => {
        // console.log(response)
        this.setState({
          categories: response.data.data
        });
      })
      .catch(error => console.log(error.response));
  }

  render() {
    return (
      <div className="App">


        <Form  categories={this.state.categories}  />
      </div>
    );
  }



}
