export async function POST(req: Request) {
    const { email, password } = await req.json();
  
    if (email === 'user1@cedar.com' && password === 'password123') {
      return Response.json({ message: 'Login successful' });
    } else {
      return Response.json({ error: 'Invalid email or password' }, {
        status: 401
      });
    }
  }