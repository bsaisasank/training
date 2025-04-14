import React from 'react';
import { Typography } from './index';

export const TypographyExample = () => {
  return (
    <div>
      <Typography variant='primary' component="h1">Heading 1</Typography>
      <Typography component="h2">Heading 2</Typography>
      <Typography component="h3">Heading 3</Typography>
      <Typography component="h4">Heading 4</Typography>
      <Typography component="h5">Heading 5</Typography>
      <Typography component="h6">Heading 6</Typography>
      <Typography>Default Body Text</Typography>
      <Typography component="h1" fontFamily="'Courier New', monospace">
        Custom Font Family
      </Typography>
      <Typography component="h2" fontSize="24px">
        Custom Font Size
      </Typography>
      <Typography component="h3" fontFamily="Arial, sans-serif" fontSize="20px">
        Custom Font Family and Size
      </Typography>
      <Typography fontFamily="'Times New Roman', serif">Body with Custom Font Family</Typography>
      <Typography fontSize="18px">Body with Custom Font Size</Typography>
      <Typography fontFamily="'Verdana', sans-serif" fontSize="16px" variant="primary">
        Body with Custom Font Family and Size
      </Typography>
    </div>
  );
};
