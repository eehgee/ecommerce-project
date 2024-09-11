import { Link, useNavigate } from "react-router-dom";
import Search from "../common/Search";
import { clearCart, getCartItemCount, logout } from "../../store/cart";
import { useEffect, useState } from "react";

const navigation = [
  { name: '패션', to: '/fashion', current: false },
  { name: '디지털', to: '/digital', current: false },
  { name: '액세서리', to: '/life', current: false },
];

interface NavProps {
  toggleTheme: () => void;
  isLoggedIn: boolean; 
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  loginMethod: 'kakao' | 'regular' | null; 
  setLoginMethod: React.Dispatch<React.SetStateAction<'kakao' | 'regular' | null>>;
}

const Nav = ({ toggleTheme, isLoggedIn, setIsLoggedIn, loginMethod, setLoginMethod }:NavProps):JSX.Element =>{
  const [cartItemCount, setCartItemCount] = useState<number>(0);
  const navigate = useNavigate();

  const updateCartItemCount = () => {
    const count = getCartItemCount();
    setCartItemCount(count);
  };

  useEffect(() => {
    if (isLoggedIn) {
        updateCartItemCount();
    } else {
        setCartItemCount(0);
    }

    const handleCartUpdate = () => {
        if (isLoggedIn) {
            updateCartItemCount();
        }
    };

    window.addEventListener('cartUpdate', handleCartUpdate);

    return () => {
        window.removeEventListener('cartUpdate', handleCartUpdate);
    };
}, [isLoggedIn]);

  const handleLogout = () => {
    if (loginMethod === 'kakao' && window.Kakao) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.Kakao.Auth.logout((response: any) => {
        if (response) {
          console.log("카카오 로그아웃 성공", response);
          logout();
          setIsLoggedIn(false);  
          setLoginMethod(null);
          clearCart();
          setCartItemCount(0);
          alert("로그아웃 되었습니다.");
          navigate('/'); 
        } else {
          console.error("카카오 로그아웃 실패");
          alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
        }
      });
    } else {
      logout();
      setIsLoggedIn(false); 
      setLoginMethod(null); 
      clearCart();
      setCartItemCount(0);
      navigate('/'); 
      alert("로그아웃 되었습니다.");
    }
  };

    return(
      <div className="fixed z-10 w-full bg-reddish shadow text-white">
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <div className="relative flex h-16 items-center justify-end">
            
            {/* drawer */}
            <div className="lg:hidden absolute left-0">
              <label htmlFor="sidebar" aria-label="open sidebar" className="btn btn-square btn-ghost w-auto transition-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6">
                  <path
                    stroke='currentColor'
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            {/* drawer end */}

            {/* logo */}
            <div className="flex flex-shrink-0 items-center ml-2 sm:flex-grow hidden md:block">
              <h1>
              <Link to="/" className="flex items-center w-auto text-xl ml-8">HOME</Link>
              </h1>
            </div>
            {/* logo end */}

            {/* search */}
            <div className="flex-grow flex justify-center items-center hidden md:block">
              <Search />
            </div>

            <div className="md:hidden sm:block">
              <div className="fixed top-20 left-0 w-full shadow-lg z-50">
                <div className="flex justify-center">
                  <Search />
                </div>
              </div>
            </div>
            {/* search end */}

            {/* theme toggle */}
            <label className="swap swap-rotate">
              <input type="checkbox" className="theme-controller" value="synthwave" onChange={toggleTheme}/>
              <svg
                className="swap-off h-6 w-6 mr-2 ml-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-on h-6 w-6 mr-2 ml-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            {/* theme toggle end */}

              {/* 로그인, 회원가입, 장바구니 */}
            <div className="flex justify-center items-center">
             {isLoggedIn ? (
              // 로그인 상태일 때 보이는 메뉴
              <div className="p-2 cursor-pointer" onClick={handleLogout}>
                <span className="text-sm">로그아웃</span>
              </div>
            ) : (
              // 로그인 상태가 아닐 때 보이는 메뉴
              <>
                <div className="p-2"><Link to="/login"><span className="text-sm">로그인</span></Link></div>
                <div className="p-2"><Link to="/join"><span className="text-sm">회원가입</span></Link></div>
              </>
            )}
              <Link to="/cart">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-gray-700">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="badge badge-sm indicator-item">{cartItemCount}</span>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                  </div>
                </div>
              </Link>
            </div>
            {/* 로그인, 회원가입, 장바구니 end */}
          </div>
        </div>

          {/* categry */}
          <div className="relative h-14 shadow flex items-center justify-center">
            <div className="flex gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  aria-current={item.current ? 'page' : undefined}
                  className='currentColor hover:bg-gray-700 hover:text-white
                    rounded-md px-3 py-2 text-sm font-bold hidden md:block'>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* category end */}
      </div>
  )
}

export default Nav;