import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faOtter } from '@fortawesome/free-solid-svg-icons'
import useBreakpointValues from "./components/responsive/useBreakpointValues";

library.add(faOtter)

function App() {
  const currentSize = useBreakpointValues({
    xs: 'phone',
    sm: 'phone',
    md: 'tablet',
    lg: 'desktop'
  })

  return (
    <div className="App">
      <Header />
      <Main size={currentSize} />

      {/* <DesktopBreakpoint >
        <Header />
        <Main />
      </DesktopBreakpoint>

      <PhoneBreakpoint className="phone">
        <Header />
        <Main />
      </PhoneBreakpoint> */}
      
    </div>
  );
}

export default App;
