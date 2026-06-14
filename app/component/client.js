"use client";

import { useEffect, useState } from "react";

export default function Client() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      const data = await response.json();

      setItem(data);
    }

    getData();
  }, []);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{item.id}</p>
      <p>{item.title}</p>
      <p>{item.userId}</p>
      <p>{item.completed ? "Done" : "Not Done"}</p>
    </div>
  );
}