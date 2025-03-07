'use server';

export const registerUser = async (data: any) => {
    console.log(data);
    const res = await fetch(`http://localhost:4000/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    const result = await res.json();
    console.log(result);
    return result
}