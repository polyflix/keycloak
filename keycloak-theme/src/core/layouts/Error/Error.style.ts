import { Box, styled } from '@mui/material'

export const ErrorRootStyle = styled(Box)<any>(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  height: '100vh',
  padding: theme.spacing(1),
}))
