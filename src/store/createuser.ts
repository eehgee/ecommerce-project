export interface CreateUser{
    name : string;
    password : string;
    email : string;
    avatar? : string;
}


// 회원가입
export async function createUser(user: CreateUser) {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;  // 성공한 경우, 생성된 사용자 정보 반환
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;  // 에러가 발생한 경우 호출한 곳에서 처리할 수 있도록 에러를 던짐
    }
  }



