import { BrowserRouter } from "react-router-dom"
import Nav from "./components/layout/Nav"
import Router from "./router/router"
import Footer from "./components/layout/Footer"
import Drawer from "./components/common/Drawer"
import "./assets/css/tailwind.css"
import { useEffect, useState } from "react"

const App = ():JSX.Element => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // 현재 테마 상태 추가

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <input type="checkbox" id="sidebar" className="drawer-toggle" />
      <div className="drawer-content flex flex-col min-h-screen">
        <Nav toggleTheme={toggleTheme} />
          <section className="pt-32 flex-1">
            <Router />
          </section>
        <Footer />
      </div>
      <Drawer />
    </BrowserRouter>
  )
}

export default App
