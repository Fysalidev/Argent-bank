export const getToken = async (user) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    });

    const login = await response.json();
    return login;


  } catch (err) {
    console.log(err.name)
    console.log(err.message)
  }
};