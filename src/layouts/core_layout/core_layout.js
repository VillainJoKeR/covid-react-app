import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createMuiTheme, StylesProvider, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Header from '../../components/header';
import styles from './core_layout.module.scss';

// **********************************
// Define theme of the application
// **********************************
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

// **********************************
// Define stylesheet insertion order
// **********************************

// We do this so that we can override material-ui css with the css defined in out *.modules.scss files.
const jss = create({
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM (https://material-ui.com/styles/advanced/#insertionpoint).
  insertionPoint: 'jss-insertion-point',
});

// **********************************
// Define Layout of the application
// **********************************
export class CoreLayout extends React.PureComponent {
  render () {
    const { children } = this.props
    
    return (
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <StylesProvider jss={jss}>
          <Box className={styles.layoutContainer}>
            <Header />

            <main>
              {children}
            </main>

            {/* <footer>
              <b>Version</b> 1.1.0
            </footer> */}
          </Box>
          </StylesProvider>
        </ThemeProvider>
      </CssBaseline>
    )
  }
}

CoreLayout.propTypes = {
  children : PropTypes.element.isRequired
}
