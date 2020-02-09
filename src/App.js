import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation";
import PortfolioCarousel from "./Components/Carousel";
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core/styles";
import {teal} from "@material-ui/core/colors";
import Introduction from "./Components/Introduction";

const myTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#333',
            hover: '#fff',
        },
        secondary: {
            main: teal[300],
        },
        background: {
            // paper: "#333"
            paper: teal[300]
        }
    },
});

function App() {
  return (
    <ThemeProvider theme={myTheme}>
        <div className="App">

          <Navigation/>
          <Introduction/>
          <PortfolioCarousel/>
        </div>
    </ThemeProvider>
  );
}

export default App;
