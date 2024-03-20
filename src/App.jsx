import './App.css'
import NavBar from "./components/navbar/navBar.jsx";
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";

function App() {
    const navItems = [
        {name: "Home", route: "/", id: 1},
        {name: "Pricing", route: "/pricing", id: 2},
        {name: "Resources", route: "/resources", id: 3},
        {name: "Log in", route: "/login", id: 4},
        {name: "Sign up for free", route: "/signup", id: 5},
    ];

  return (
    <>
        <header className="App-Head">
            <NavBar navItems={navItems} />
        </header>
        {/*<NavBar navItems={navItems} />*/}
      <div>
          <Routes>
              <Route path='/' element={<LandingPage />} />
          </Routes>
      </div>
    </>
  )
}

export default App
