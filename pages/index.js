import React from 'react'
import Layout from '../components/layout'
import Joke from '../components/Joke'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      jokeSetup: "",
      jokePunchline: "",
      isLoading: false,
      isError: false
    }
  }

  //fetch a random joke from api
  fetchJoke = () => {
    this.setState({isLoading:true}, () => {
      setTimeout(() => {
        fetch("https://karljoke.herokuapp.com/jokes/random", {
          method: 'GET',
        })
        .then(res => res.json())
        .then(joke => {
          //set current joke
          this.setState({
            jokeSetup: joke["setup"],
            jokePunchline: joke["punchline"],
            isError: false
          });
        })
        .catch(err => {
          console.error("Error on index.js at fetchJokes: " + err);
          this.setState({
            isError: true
          });
        });
        this.setState({isLoading:false});
       },500); //uncomment this SetTimeout to view loading screen
    });

  }

  //on initialize, fetch a joke
  componentDidMount() {
    this.fetchJoke();
  }

  render() {
    return (
      <Layout isError={this.state.isError} isLoading={this.state.isLoading} FetchJoke={this.fetchJoke}>
        <Joke setup={this.state.jokeSetup} punchline={this.state.jokePunchline}/>
      </Layout>
    )
  }

}

export default Home;
