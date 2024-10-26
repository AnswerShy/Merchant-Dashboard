type ValidationResult = { message?: string };

export default async function servicesConnect(): Promise<ValidationResult> 
{
    return new Promise<ValidationResult>((resolve) => {
        setTimeout(() => {
            resolve({ message: "ok" });
        }, 1000);
    });
}