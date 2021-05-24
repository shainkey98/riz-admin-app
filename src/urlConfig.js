// const baseUrl = process.env.API || "https://flipkart-rest-ser.herokuapp.com";
//const baseUrl = "http://localhost:2000";

const baseUrl = "https://flipkart-rest-ser.herokuapp.com";

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
