import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface JokesProps {
  id: number;
  title: string;
  content: string;
}

function App() {
  const [jokes, setJokes] = useState<JokesProps[]>([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Jokes</h1>
      <p>Total Number of Jokes : {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={index}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
