import React from 'react';
import './style.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [users, setUsers] = useState(false);


  const addPost = data => {

    const headers = new Headers()
    headers.append('Content-type', 'application/json')
    headers.append('Authorization', 'Bearer 234532523423')


    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then(data => setUsers(data))
      .catch((err) => console.log(err));

      addPost({
        userId: 1,
        title: 'Örnek post',
        body: 'Post içeriği'
        })
  },[]);

  return <>
    {users && users.map(item => (
      <p key={item.id}>{item.name}</p>
    ))}
  </>;
}
