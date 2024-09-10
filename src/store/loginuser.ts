export interface LoginUser {
    email: string;
    password: string;
  }

export async function loginUser(user: LoginUser){
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
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
      console.error('Error logging in user:', error);
      throw error; 
    }
  }
