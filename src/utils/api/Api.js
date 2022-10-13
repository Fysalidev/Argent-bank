class Api {

    logUser = async (email, password) => {

        try {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json')
            const options = {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers
            };
            const response = await fetch("http://localhost:3001/api/v1/user/login", options);
            return await response.json()
        } catch (error) {
            return { status: 500, message: 'Error : Failled to fetch' }
        }
    }

    loadUser = async (JWT) => {
        const headers = new Headers();
        headers.append('Authorization', `Bearer ${JWT}`);
        const options = {
            method: 'POST',
            headers
        };
        const response = await fetch('http://localhost:3001/api/v1/user/profile', options);
        return await response.json();
    }
}
export default Api