import Client from "./client";

export default async function Page() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  const item = await response.json();

  return (
    <div>
      <h1>Server Component</h1>

      <p>{item.id}</p>
      <p>{item.title}</p>
      <p>{item.userId}</p>
      <p>{item.completed ? "Done" : "Not Done"}</p>

      <hr />

      <h1>Client Component</h1>

      <Client />
    </div>
  );
}