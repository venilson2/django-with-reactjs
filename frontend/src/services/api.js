export const createSession = async (email, password) => {
    if( email === "admin@email.com" && password === "admin"){
        return {
            data: {
                user: {
                    email: "admin@email.com",
                    first_name: "Fulano",
                    last_name: "de Tal"
                },
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImZpcnN0X25hbWUiOiJGdWxhbm8iLCJsYXN0X25hbWUiOiJkZSBUYWwifQ.osnjTSfesnV82Iset6OrEUc2Etyqq6J7dXzTgb1UiL8"
            }
        }
    } else {
        throw new Error({
            message: "User not found",
            status: 404
        });
    }
};