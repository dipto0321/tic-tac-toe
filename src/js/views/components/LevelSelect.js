import React from 'react';

export default (props) => (
  <select name="level" id='level' onChange={props.handleLevelChange}>
    <option value="easy">Easy</option>
    <option value="hard">Hard</option>
  </select>
);
