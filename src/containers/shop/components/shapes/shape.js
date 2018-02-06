import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default (props) => {
  return (
    <Paper style={style} onClick={() => props.onClick(props.shape)}>
      <p key={props.shape.id} >
        {props.shape.name}
      </p>
      <p>
        {props.shape.description}
      </p>
    </Paper>
  );
}