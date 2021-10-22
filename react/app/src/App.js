// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>test...1</div>
//       // https://www.freecodecamp.org/news/how-to-use-axios-with-react/
//        https://www.youtube.com/watch?v=ORga8ZavCc8&list=PLwAKR305CRO9rlj-U9oOi4m2sQaWN6XA8
//     )
//   }
// }

import axios from "axios";
import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const baseURL = "http://localhost:80/api/posts/";
export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}