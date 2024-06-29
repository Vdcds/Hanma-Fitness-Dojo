import axios from "axios";

async function getMeal(userId) {
  let data = JSON.stringify({
    userId: userId,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "/api/meal",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export default getMeal;
// Example usage
//getMeal("cly00bkd00000xmz4fva5w5ax");