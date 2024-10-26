type ValidationResult = {error?: string[]; data?: unknown };

export default async function valideController(email?: string, name?: string, password?: string): Promise<ValidationResult> 
{
    const errors: string[] = [];

    if (!email || email.length < 6) {
        errors.push("email")
    }

    if (!name || name.length < 6) {
        errors.push("name")
    }

    if(errors.length > 0) {
        return { error: errors };
    }
    else {
        const userName: string | null = name ?? null
        if(userName) {
            localStorage.setItem("username", userName)
        }
   
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                name: name,
                password: password
            })
        });

        const data = await response.json();
        return { data };
    }
}