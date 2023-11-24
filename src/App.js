import React from 'react';
import './style.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [users, setUsers] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .catch((err) => console.log(err));
  });

  return <></>;
}
