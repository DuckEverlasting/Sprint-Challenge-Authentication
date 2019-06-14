import React from "react";
import axiosWithAuth from '../auth/axiosWithAuth.js';

class JokeList extends React.Component {
  state = {
    jokes: []
  }

  render() {
    return (
      <>
        <h2>All Jokes Here:</h2>
        <ul>
          {this.state.jokes.map((el, i) => (
            <li key={i}>{el.joke}</li>
          ))}
        </ul>
      </>
    );
  }

  state = {
      jokes: []
    }

    componentDidMount() {
      const address = 'http://localhost:3300/api/jokes';
  
      axiosWithAuth()
        .get(address)
        .then(res => {
          console.log(res.data)
          this.setState(({ jokes: res.data }));
        })
        .catch(({ response }) => {
          console.error('users error', response);
        });
    }
}

export default JokeList;
