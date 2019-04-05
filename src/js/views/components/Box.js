import React from 'react';

export default props => <td className="cell" id={props.id} onClick={props.handleClick} >{props.value}</td>;
