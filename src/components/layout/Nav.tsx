import { Link } from "react-router-dom";
import shoplogoicon from "../../assets/img/shopicon.svg"


const navigation = [
  { name: '패션', to: '/fashion', current: false },
  { name: '신발', to: '/shoes', current: false },
  { name: '디지털', to: '/digital', current: false },
  { name: '가구', to: '/furniture', current: false },
  { name: '라이프', to: '/life', current: false },
];

interface NavProps {
  toggleTheme: () => void;
}


const Nav = ({ toggleTheme }:NavProps):JSX.Element =>{
    return(
      <div className="fixed z-10 w-full h-30 bg-reddish shadow text-white">
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <div className="relative flex h-16 shadow items-center justify-start">
            
            <div className="flex-none lg:hidden">
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

            <div className="flex flex-shrink-0 items-center ml-2 sm:flex-grow">
              <h1>
              <Link to="/" className="flex items-center w-auto">
                <img src={shoplogoicon} alt="shoplogoicon" className="w-14 md:block sm:hidden" />
              </Link>
              </h1>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
              
              {/* search */}
            {/* <div className="hidden sm:block">
                <Search />
            </div> */}

            <div className="block sm:hidden sm:relative">
              <button 
                // onClick={() => setSearchVisible(!searchVisible)}
                className="btn btn-ghost p-2 hover:p-2 transition-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-gray-700 dark:stroke-white"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              {/* {searchVisible && (
                <div className="fixed top-16 left-0 w-full shadow-lg z-50">
                  <Search />
                </div>
              )} */}
            </div>
              
            {/* theme toggle */}
            <label className="swap swap-rotate">
              <input type="checkbox" className="theme-controller" value="synthwave" onChange={toggleTheme}/>

              {/* sun icon */}
              <svg
                className="swap-off h-6 w-6 mr-2 ml-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-6 w-6 mr-2 ml-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

              {/* 로그인, 회원가입, 장바구니 */}
            <div className="flex justify-center items-center">
              <div className="p-2"><Link to="/"><span className="font-bold">로그인</span></Link></div>
              <div className="p-2"><Link to="/"><span className="font-bold">회원가입</span></Link></div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-gray-800">
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
                    <span className="badge badge-sm indicator-item">0</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-14 shadow flex items-center justify-center">
            <div className="flex gap-8">
            {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  aria-current={item.current ? 'page' : undefined}
                  className='currentColor hover:bg-gray-700 hover:text-white
                    rounded-md px-3 py-2 text-sm font-bold'>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Nav;