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
            return response.json()
        } catch (error){
            return { status: 500, message: 'Error : Failled to fetch' }
        }
    }
}
export default Api