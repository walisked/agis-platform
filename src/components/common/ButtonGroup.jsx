import React from 'react';
import { Box } from '@mui/material';
import Button from './Button';

const ButtonGroup = ({
  buttons = [],
  direction = 'row',
  spacing = 1,
  align = 'flex-start',
  fullWidth = false,
  sx = {},
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: direction,
        gap: spacing,
        justifyContent: align,
        alignItems: align,
        width: fullWidth ? '100%' : 'auto',
        ...sx,
      }}
    >
      {buttons.map((button, index) => (
        <Button
          key={index}
          {...button}
        />
      ))}
    </Box>
  );
};

export default ButtonGroup;