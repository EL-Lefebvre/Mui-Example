import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./ui/Header";
import theme from "./ui/Theme";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<div>Home</div>} />
          <Route exact path="/services" element={<div>Services</div>} />
          <Route
            exact
            path="/customsoftware"
            element={<div>Cutstom Software</div>}
          />
          <Route exact path="/websites" element={<div>Websites</div>} />
          <Route exact path="/revolution" element={<div>Revolution</div>} />
          <Route exact path="/about" element={<div>About</div>} />
          <Route exact path="/contact" element={<div>Contact</div>} />
          <Route exact path="/estimate" element={<div>Estimate</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
