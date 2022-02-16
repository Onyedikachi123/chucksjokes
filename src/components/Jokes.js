import React, { Component } from "react";
import classes from "./Jokes.module.scss";
import { CardContent, Card, Container } from "@mui/material";
import axios from "axios";


class Catergories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catergories: [],
      jokes: [],
      catergory: null
    };
  }

  componentDidMount() {
    axios.get(`https://api.chucknorris.io/jokes/categories`).then((res) => {
      const catergories = res.data;
      this.setState({ catergories });
    });
  }

  handleChange = (catergory) => {
    this.setState({ catergory });
    // const caty = e.target.value;
    // console.log(caty)
    axios
      .get(`https://api.chucknorris.io/jokes/search?query=` + catergory)
      // axios.get(`https://api.chucknorris.io/jokes/random` + catergory)
      .then((res) => {
        const jokes = res.data.result;
        this.setState({ jokes });
      });
  };

  render() {
    return (
      <Container>
        <div className={classes.wrapper}>
          {this.state.catergories.map((catergory) => (
            <button
              key={catergory}
              onClick={() => this.handleChange(catergory)}
            >
              {catergory} JOKES
            </button>
          ))}
        </div>
        <div className={classes.cardWrapper}>
          {this.state.jokes.map((joke) => {
            return (
              <Card key={joke.id}>
                
                <div className={classes.CardHeader}>{this.state.catergory} Joke </div>
                <CardContent >{joke.value}</CardContent>
              </Card>
            );
          })}

          {/* <button>{this.state.jokes.value}</button> */}
        </div>
      </Container>
    );
  }
}

export default Catergories;
