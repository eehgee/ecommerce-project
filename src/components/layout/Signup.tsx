import { useState } from "react";
import { createUser } from "../../store/createuser";
import { useNavigate } from "react-router-dom";

const Membership = ():JSX.Element => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // 페이지 새로고침 방지
  
      const user = {
        name,  // 여기서는 이름과 ID가 동일하다고 가정
        email,
        password,
        avatar: 'https://picsum.photos/800',  // 임시 아바타 URL
      };
  
      try {
        const data = await createUser(user);  // createUser 함수 호출
        console.log('User created:', data);
        alert('사용자 가입이 성공적으로 완료되었습니다.');
        navigate('/login'); // 예: 홈 페이지나 대시보드 페이지로 이동

      } catch (error) {
        console.error('Error creating user:', error);
        alert('사용자 가입에 실패했습니다. 다시 시도해주세요.');
      }
    };


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 currentColor">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            회원가입
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6">이름</label>
              <div className="mt-2">
                <input id="name" name="name" type="name" required autoComplete="off" value={name} onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6 pl-4"
                />
              </div>
            </div>

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
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Membership;