import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
// import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Heeloo
    </ThemeProvider>
  );
}

export default App;
