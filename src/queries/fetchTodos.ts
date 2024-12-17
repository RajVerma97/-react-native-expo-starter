import axios from "axios";

export default async function fetchTodos() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return response.data;
}
