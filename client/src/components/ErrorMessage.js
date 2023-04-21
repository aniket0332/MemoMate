import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const ErrorMessage = ({ children }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert severity="warning">{ children }</Alert>
  </Stack>
  )
}

export default ErrorMessage
