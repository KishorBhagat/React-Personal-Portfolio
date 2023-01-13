import Email from "./components/email";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import SocialBox from "./components/SocialBox";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
        <Header />
        {/* <SocialBox />
        <Email /> */}
        <Main/>
        <Footer />
    </>
  );
}

export default App;
