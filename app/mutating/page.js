"use client";

import "./page.css";
import { useActionState } from "react";
import createPost from "@/actions/post";

export default function Page() {
  const [state, action] = useActionState(createPost, {
    error: {},
    message: "",
  });

  return (
    <div className="container">
      <form action={action} className="form">
        <h2>Đăng nhập</h2>

        <div>
          <label>Mật khẩu</label>
          <br />
          <input type="password" name="pass" />
          <br />
          <span className="error">{state.error?.pass}</span>
        </div>

        <br />

        <div>
          <label>Số điện thoại</label>
          <br />
          <input type="text" name="sdt" />
          <br />
          <span className="error">{state.error?.sdt}</span>
        </div>

        <br />

        <button type="submit">Đăng nhập</button>

        {state.message && <p>{state.message}</p>}
      </form>
    </div>
  );
  // useEffect(() => {
  //   const getData = async() => {
  //   const data = await getPosts();
  //   console.log(data);
  //   }
  //   getData();
  // },[])
  // return (
  //   <div>
  //     <button onClick={clearCache}></button>
  //   </div>
  // );
}