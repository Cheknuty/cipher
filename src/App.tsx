import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Header } from "./components/header/header"
import { ThemeProvider } from "styled-components";
import lightTheme from "./assets/style/lightTheme";
import darkTheme from "./assets/style/darkTheme";
import { useAppSelector } from "./redux/hooks";
import { GeneralStyle } from "./assets/style/general";
import { NormalizeStyle } from "./assets/style/normalize";
import { AboutUs } from "./pages/aboutUs/aboutUs";
import { Ciphers } from "./pages/ciphers/ciphers";
import { Footer } from "./components/footer/footer";
function App() {
  const theme = useAppSelector(state => state.theme)
  return (
    <>
      <ThemeProvider  theme={theme === "light" ? lightTheme : darkTheme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/ciphers" element={<Ciphers />} />
        </Routes>
        <Footer />
        <GeneralStyle />
        <NormalizeStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
