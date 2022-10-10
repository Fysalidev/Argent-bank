const userDatas = {
  email: "steve@rogers.com",
  password: "password456",
};

const getToken = async (login) => {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(login),
  });

  const data = await response.json();
  console.log(data.status)
  console.log(data.message)
  console.log(data)
  return data;
};

// const getToken = async () => {
//   const response = await fetch(
//     "http://localhost:3001"
//   );
//   console.log(response.body);
//   return response;
// };


getToken(userDatas);
