import React, { Component } from 'react'
import axios from 'axios'
import Grid from 'material-ui/Grid'
import Shape from './components/shapes/shape'
import Preview from './components/preview/preview'
import Selector from  './components/selector/selector'

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
    this.setState({ pocket: { shape } });
  }

  render() {

    return (
      <Grid container spacing={24}>
        {
          this.state.shapes.map((shape) =>
            <Grid key={shape.id} item xs={3}>
              <Shape shape={shape} onClick={this.SetPocketShape} />
            </Grid>
          )
        }

        <Grid item xs={6}>
        preview
          {this.state.pocket ? <Preview pocket={this.state.pocket} /> : null}
        </Grid>

        <Grid item xs={6}>
        select
          <Selector pocketType ={this.state.pocket}/>
        </Grid>


      </Grid>
    )
  }
}

export default Shop;