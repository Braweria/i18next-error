import Layout from "../components/layouts/Layout";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";
import { appWithTranslation } from "next-i18next";

const customTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#e14d9c",
      contrastText: "#000000",
    },
    secondary: {
      main: "#4ecac2",
      contrastText: "#000000",
    },
    background: {
      default: "#262627",
      paper: "#37373A",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "2.5rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.7rem",
    },
  },
  shape: {
    borderRadius: 5,
  },
  props: {
    MuiAppBar: {
      color: "inherit",
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#111111",
        color: "white",
      },
    },
  },
});

/**
 * Custom App
 * ! DO NOT CHANGE
 * ! THIS IS CURRENTLY COMPATIBLE WITH MUI
 * ! CODESANDBOX: https://codesandbox.io/s/nextjs-rwk32q2w6q?file=/pages/_app.js
 * ! GITHUB: https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
 */
function App({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider theme={customTheme}>
        <Layout>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </Layout>
    </ThemeProvider>
  );
}

// export default App;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default appWithTranslation(App);
