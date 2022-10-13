class ApiServices {

    logUser = async (email, password) => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password }),
            });

            return await response.json();

        } catch (error) {
            return { status: 500, message: 'Error : Failled to fetch' }
        }
    };
}

export default ApiServices