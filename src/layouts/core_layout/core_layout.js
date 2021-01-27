import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles';
import styles from './core_layout.module.scss';

const theme = createMuiTheme({
  typography: {
    // use system fonts
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
})

// *******************************
// Define Layout of the application
// *******************************
export class CoreLayout extends React.PureComponent {
  render () {
    const { children } = this.props
    
    return (
      <CssBaseline>
        <ThemeProvider theme={theme}>
            <header>
            </header>

            <main>
              {children}
            </main>

            {/* <footer>
              <b>Version</b> 1.1.0
            </footer> */}
        </ThemeProvider>
      </CssBaseline>
    )
  }
}

CoreLayout.propTypes = {
  children : PropTypes.element.isRequired
}
