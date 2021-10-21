// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>test...1</div>
//       // https://www.freecodecamp.org/news/how-to-use-axios-with-react/
//     )
//   }
// }

import axios from "axios";
import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const baseURL = "http://172.18.0.6/api/posts/1";
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