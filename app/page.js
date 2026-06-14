"use client";

import Button from "@/components/atomics/Button";
import Link, { useLinkStatus } from "next/link";
import { useActionState, useTransition } from "react";
import { resolve } from "styled-jsx/css";

// export default function ConfimLink() {
//   return (
//     <Link
//     href="/About" onNavigate={(e) => {
//       const isConfirmed = window.confirm("Bạn có chắc chắn rời giỏ hàng không?")
//       if (! isConfirmed){
//         e.preventDefault();
//       }
//     }}
//     >
//     Tiến hành thanh toán
//     </Link>
//   );
// }
// function LinkContent({label}){
//   const {pending} = useLinkStatus();
//   return(
//     <span className={pending ? 'opacity-50 animate-pulse' : ''}>
//       {pending ? "Đang chuyển trang..." : label}
//     </span>
//   );
// }
// export default function Navigation(){
//   return(
//     <Link href="/About" prefetch={false}>
//       <LinkContent label="Tới Dasboard nặng" />
//     </Link>
//   );
// }
export default function DeleteProductButton({productId}){
  const [isPending, startTransition] = useTransition();
  const handleDelete = () => {
    startTransition(async () => {
      await deleteItem
    })
  }
}