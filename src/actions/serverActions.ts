'use server';

interface RegisterUserData {
    name: string;
    password?: string;
    email: string;
}

export const registerUser = async (data: RegisterUserData) => {
    console.log(data);
    const res = await fetch(`https://my-fifth-assignment-server.vercel.app/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    const result = await res.json();
    console.log(result);
    return result
}