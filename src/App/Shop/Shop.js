import React, { Component } from 'react'
import axios from 'axios'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Shape from './Shape'

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shapes: [],
      pocket: {}
    };

    this.SetPocketShape = this.SetPocketShape.bind(this);
  }

  componentDidMount() {
    this.GetShapes();
  }

  GetShapes() {
    axios.get('http://localhost:4000/shapes')
      .then((results) => this.setState({ shapes: results.data }));
  }

  SetPocketShape(shape) {
    this.setState((state, props) => { return { shapes: state.shapes, pocket: { shape: shape} }})
  }

  render() {

    return (
      <Grid container spacing={24}>
        {
          this.state.shapes.map((shape) =>
            <Grid key={shape.id} item xs={3}>
              <Paper>
                <Shape shape={shape} onClick={this.SetPocketShape} />
              </Paper>
            </Grid>
          )
        }
      </Grid>
    )
  }
}

export default Shop;