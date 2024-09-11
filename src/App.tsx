import { BrowserRouter } from "react-router-dom"
import Nav from "./components/layout/Nav"
import Router from "./router/router"
import Footer from "./components/layout/Footer"
import Drawer from "./components/common/Drawer"
import "./assets/css/tailwind.css"
import { useEffect, useState } from "react"

const App = ():JSX.Element => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [loginMethod, setLoginMethod] = useState<'kakao' | 'regular' | null>(null); 


  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');

    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }

    // Kakao SDK 초기화
    const kakaoKey = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;
    if (window.Kakao && kakaoKey) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(kakaoKey);
        console.log("Kakao SDK initialized successfully.");
      } else {
        console.log("Kakao SDK was already initialized.");
      }
    } else {
      console.error("Kakao SDK or Kakao JavaScript Key is missing.");
    }

    // 새로고침 시 로그인 상태 복원
    const authToken = localStorage.getItem('authToken');
    const kakaoToken = localStorage.getItem('kakaoToken');
    
    if (authToken) {
      setIsLoggedIn(true);
      setLoginMethod('regular');
    } else if (kakaoToken) {
      setIsLoggedIn(true);
      setLoginMethod('kakao');
    }
  }, [theme]);


  return (
    <BrowserRouter>
      <input type="checkbox" id="sidebar" className="drawer-toggle" />
      <div className="drawer-content flex flex-col min-h-screen">
        <Nav toggleTheme={toggleTheme} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} loginMethod={loginMethod} setLoginMethod={setLoginMethod} />
          <section className="pt-32 flex-1">
            <Router setIsLoggedIn={setIsLoggedIn} setLoginMethod={setLoginMethod} />
          </section>
        <Footer />
      </div>
      <Drawer />
    </BrowserRouter>
  )
}

export default App
