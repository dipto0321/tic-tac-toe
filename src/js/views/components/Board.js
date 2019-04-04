import React from 'react';
import Box from './Box';

export default () => (
  <table id="mainBoard">
    <tbody>
      <tr>
        <Box id={0} />
        <Box id={1} />
        <Box id={2} />
      </tr>
      <tr>
        <Box id={3} />
        <Box id={4} />
        <Box id={5} />
      </tr>
      <tr>
        <Box id={6} />
        <Box id={7} />
        <Box id={8} />
      </tr>
    </tbody>
  </table>
);
