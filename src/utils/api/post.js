const getToken = async (login) => {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login),
  });
  const data = await response.json();
  console.log(data.message);
  return data;
};

// const getToken = async () => {
//   const response = await fetch(
//     "http://localhost:3001"
//   );
//   console.log(response.body);
//   return response;
// };

const userDatas = {
  email: "tony@stark.com",
  password: "password123",
};

getToken(userDatas);
