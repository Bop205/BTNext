export default async function Page() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    return(
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