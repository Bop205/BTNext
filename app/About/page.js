"use client";

import Button from "@/components/atomics/Button";
import Link, { useLinkStatus } from "next/link";
import { useActionState } from "react";
import { resolve } from "styled-jsx/css";

async function handleSubmit(prevState, formData) {
  console.log(prevState);
  const name = formData.get("name");
  const email = formData.get("email");

  const res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        message: "Success!",
      });
    }, 5000);
  });
  console.log(res);
  return {
    name,
    email,
  };
}
export default function Page() {
  const initState = { message: "", status: true };
  const [state, action, isPending] = useActionState(handleSubmit, initState);
  return (
    <div>
      <h1>About</h1>
     <h1>{state.email}</h1>
     <h1>{state.name}</h1>
      <form action={action}>
        <input name="name" type="text" placeholder="enter your name" />
        <input name="email" type="email" placeholder="enter your email" />
        <Button label={"Lưu"}></Button>
      </form>
    </div>
  );
}