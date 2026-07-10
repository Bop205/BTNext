"use client";

import { useActionState } from "react";
import createPost from "@/actions/post";

export default function Page() {
  const [state, action] = useActionState(createPost, {
    error: {},
    message: "",
  });

  return (
    <form action={action}>
      <div>
        <label>Mật khẩu</label>
        <br />
        <input type="password" name="title" />
        <br />
        {state.error?.title && state.error.title}
      </div>

      <br />

      <div>
        <label>Số điện thoại</label>
        <br />
        <input type="text" name="content" />
        <br />
        {state.error?.content && state.error.content}
      </div>

      <br />

      <button>Đăng nhập</button>

      <p>{state.message}</p>
    </form>
  );
}