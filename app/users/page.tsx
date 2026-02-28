"use client"
import { useEffect, useState } from "react"

const Todo = () => {
  return <div>Todo Component</div>
}

const User = () => {
    const [users, setUsers] = useState([])
    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(()=>{
        const fetchUser = async() =>{
            const res = await fetch (url);
            const data = await res.json()
            console.log(data) // debug ว่าข้อมูลส่งมาได้จริง
            setUsers(data);
        };
        fetchUser();
    },[]);
    

    return (
        <ul>
          <ul>
  {users.map((user) =>
    <li key={user.id}>{user.name}</li>
  )}
</ul>
        </ul>
    )

}

const UserPage = () => {
  return (
    <>
        <User></User>
        <Todo></Todo>
    </>
  )
}
export default UserPage
