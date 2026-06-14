"use client";

import { useEffect, useState } from "react";

export default function Page() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts",);
            const _data = await response.json();

            setData(_data);
        };
        getData();
    }, []);

    return (
        <div>
            {data.map((item) => {
                return (
                    <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                    </div>
                );
            })}
        </div>
    );
}