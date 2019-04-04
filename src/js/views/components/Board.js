import React from 'react';
import Box from './Box';

export default props => {
  const renderBox = id => <Box id={id} handleClick={props.handleClick} />;
  return (
    <table id="mainBoard">
      <tbody>
        <tr>
          {renderBox(0)}
          {renderBox(1)}
          {renderBox(2)}
        </tr>
        <tr>
          {renderBox(3)}
          {renderBox(4)}
          {renderBox(5)}
        </tr>
        <tr>
          {renderBox(6)}
          {renderBox(7)}
          {renderBox(8)}
        </tr>
      </tbody>
    </table>
  );
};
