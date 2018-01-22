import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Preview extends Component {
    static propTypes = {
        pocket: PropTypes.object.isRequired
    }
    
  render() {
    return (
      <div>
        prev
      </div>
    )
  }
}
