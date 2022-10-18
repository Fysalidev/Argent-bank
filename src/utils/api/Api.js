class Api {

    tokenRequest = async (email, password) => {

        try {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json')
            const options = {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers
            };
            const request = await fetch("http://localhost:3001/api/v1/user/login", options);
            const response = await request.json()
            return response.body.token

        } catch (error) {
            return false
        }
    }

    userRequest = async (JWT) => {
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${JWT}`);
            const options = {
                method: 'POST',
                headers
            };
            const response = await fetch('http://localhost:3001/api/v1/user/profile', options);
            return await response.json();

        } catch (error) {
            return false
        }
    }

    updateRequest = async (firstName, lastName, JWT) => {
        const headers = new Headers();
        headers.append('Authorization', `Bearer ${JWT}`);
        const options = {
            method: 'PUT',
            body: JSON.stringify({ firstName, lastName }),
            headers
        }
        const request = await fetch('http://localhost:3001/api/v1/user/profile', options);
        console.log(request);
        return await request.json();
    }
}
export default Api