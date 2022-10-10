import { Header } from "./components/header/header"
import styled, { ThemeProvider } from "styled-components";
import lightTheme from "./assets/style/lightTheme";
import darkTheme from "./assets/style/darkTheme";
import { useAppSelector } from "./redux/hooks";
import { GeneralStyle } from "./assets/style/general";
import { NormalizeStyle } from "./assets/style/normalize";
import { Footer } from "./components/footer/footer";
import { Drawer } from "./components/drawer/drawer";
import { Default } from "./routes/default/default";
function App() {
  const theme = useAppSelector(state => state.theme)
  const drawer = useAppSelector(state => state.drawer)
  return (
    <ThemeProvider  theme={theme === "light" ? lightTheme : darkTheme}>
      <AppWrapper data-active={drawer}>
        <Header />
        <Default />
        <Footer />
      </AppWrapper>
      <Drawer active={drawer} />
      <GeneralStyle />
      <NormalizeStyle />
    </ThemeProvider>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  &[data-active="true"] {
    overflow: hidden;
  }
`

export default App;
