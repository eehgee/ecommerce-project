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
      return data;  
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;  
    }
  }
