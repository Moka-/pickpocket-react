import React from 'react'

export default (props) => {
    return (
      <p key={props.shape.id} onClick={() => props.onClick(props.shape)}>
        {props.shape.name}
      </p>
    );
  }