"use server";

export default async function createPost(prevState, formData) {
  const pass = formData.get("pass");
  const sdt = formData.get("sdt");

  // Kiểm tra mật khẩu
  if (pass === "" || pass.length < 8) {
    return {
      error: {
        pass: "Mật khẩu phải có ít nhất 8 ký tự",
      },
      message: "Đăng nhập thất bại",
    };
  }

  // Kiểm tra số điện thoại
  if (sdt === "" || sdt.length !== 10) {
    return {
      error: {
        sdt: "Số điện thoại phải có 10 số",
      },
      message: "Đăng nhập thất bại",
    };
  }

  // Đăng nhập thành công
  return {
    error: {},
    message: "Đăng nhập thành công",
  };
}

// import { cacheLife, cacheTag, revalidateTag } from "next/cache";

// export  async function getPosts(prev, formData) {
//     "use cache";
//     cacheTag("data");

//     cacheLife({stale: 30,expire: 35})
//     const data = Math.random()

//     console.log(data);

//     return {
//       data
//     };
// }

// export async function clearCache() {
//   revalidateTag("data");
//   return {};
// }