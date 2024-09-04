import "../../assets/css/tailwind.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/loginuser";

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>; 
  setLoginMethod: React.Dispatch<React.SetStateAction<'kakao' | 'regular' | null>>; 

}

const Login = ({ setIsLoggedIn, setLoginMethod }: LoginProps):JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    const user = {
      email,
      password,
    };

    try {
      const data = await loginUser(user); 
      console.log('User logged in:', data);
      localStorage.setItem("authToken", data.token);
      setIsLoggedIn(true);
      setLoginMethod('regular');
      navigate('/'); 
    } catch (error) {
      console.error('Error logging in user:', error);
      alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
    }
  };

  const handleKakaoLogin = () => {
    if (window.Kakao) {
    window.Kakao.Auth.login({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      success: function (authObj: any) {
        console.log("카카오 로그인 성공", authObj);
        localStorage.setItem("kakaoToken", authObj.access_token);
        setIsLoggedIn(true);
        setLoginMethod('kakao');
        navigate('/'); 
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fail: function (err: any) {
        console.error("카카오 로그인 실패", err);
        alert("카카오 로그인에 실패했습니다. 다시 시도해주세요.");
      },
    });
  } else {
    console.error("Kakao SDK is not loaded.");
  }
  };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 currentColor">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
              로그인
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6">이메일</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" required autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6 pl-4"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6">비밀번호</label>
                </div>
                <div className="mt-2">
                  <input id="password" name="password" type="password" required autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6 pl-4"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-black dark:bg-gray-800 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-gray-800 mb-14"
                >
                  로그인
                </button>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleKakaoLogin}
                  className="flex w-full justify-center rounded-md bg-yellow px-3 py-3 text-sm leading-6 text-black font-bold shadow-sm hover:bg-yellow-900 mb-14"
                >
                  카카오톡 계정으로 로그인하기
                </button>
              </div>
            </form>
          </div>
        </div>
    )
  }

  export default Login;
  