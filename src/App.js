import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import DesktopBreakpoint from "./components/responsive_utilities/desktop_breakpoint";
import PhoneBreakpoint from "./components/responsive_utilities/phone_breakpoint";
// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faOtter } from '@fortawesome/free-solid-svg-icons'

library.add(faOtter)

function App() {
  return (
    <div className="App">
      <DesktopBreakpoint >
        <Header />
        <Main />
      </DesktopBreakpoint>

      <PhoneBreakpoint className="phone">
        <Header />
        <Main />
      </PhoneBreakpoint>
      
    </div>
  );
}

export default App;
