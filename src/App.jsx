import React, { useEffect } from 'react';
import { PostService, UserService} from './services';


export default function App() {

  useEffect(()=>{ 
    const data = {
      userId : 3,
      title: 'Test',
      body: 'Test'
    }
    PostService.getPosts().then(res => console.log(res))
    PostService.getPostDetail(2).then(res => console.log(res))
    PostService.newPost(data).then(res => console.log(res))
    UserService.getUsers()
  })

  return (
  <>
  <h1>App</h1>
  </>
  );
}