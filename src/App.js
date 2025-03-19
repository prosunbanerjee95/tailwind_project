import logo from './logo.svg';
// import './App.css';
import Login from './component/login/Login';
import './output.css';
import Navbar from './component/navbar/NavbarComponent';
import Routing from './component/routing/Routing';
import { ThemeProvider } from './component/ThemeProvider';
import ThemeToggle from './component/ThemeToggle';
// import { ThemeProvider } from './ThemeContext';
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Routing />
        {/* <ThemeToggle /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
