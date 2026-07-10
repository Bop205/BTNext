"use server";

export default async function createPost(prevState, formData) {
  const title = formData.get("title");
  const content = formData.get("content");

  console.log({ title, content });

  // Validate mật khẩu
  if (title === "" || title.length < 8) {
    return {
      ...prevState,
      error: {
        title: "Mật khẩu phải có ít nhất 8 ký tự",
      },
      message: "Đăng nhập thất bại",
    };
  }

  // Validate số điện thoại
  if (content === "" || content.length != 10) {
    return {
      ...prevState,
      error: {
        content: "Số điện thoại phải có 10 số",
      },
      message: "Đăng nhập thất bại",
    };
  }

  // Thành công
  return {
    error: {},
    message: "Đăng nhập thành công",
    title,
    content,
  };
}