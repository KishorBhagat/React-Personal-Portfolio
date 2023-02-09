import Email from "./components/Email";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import SocialBox from "./components/SocialBox";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        {/* <SocialBox />
        <Email /> */}
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
