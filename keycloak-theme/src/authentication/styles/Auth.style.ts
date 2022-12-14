import { Card, styled } from '@mui/material'
import { Page } from '../components/Page/Page.component'


export const RootAuthStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}))

export const ContentAuthStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}))

export const SectionAuthStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: '35%',
  display: 'flex',
  padding: theme.spacing(10, 7, 10, 7),
  flexDirection: 'column',
  justifyContent: 'center',
}))
