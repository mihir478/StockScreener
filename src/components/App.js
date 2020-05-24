import React from 'react'
import PrimarySearchAppBar from './PrimarySearchAppBar'
import ConditionalRenderer from '../containers/ConditionalRenderer'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: green
    },
  })
  return (
  <MuiThemeProvider theme={theme}>  
    <div className="app">
      <PrimarySearchAppBar />
      <ConditionalRenderer />
      </div>
  </MuiThemeProvider>
  )
}

export default App
