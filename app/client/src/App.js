import { useEffect } from "react";
import "./App.css";

function App() {
  const getHelloWorld = async () => {
    const response = await fetch("http://localhost:5757");
    const result = await response.json();

    console.log(result);
  };

  useEffect(() => {
    getHelloWorld();
  }, []);

  return (
    <div className="App">
      <main className="main">
        <h2>Hello World</h2>
      </main>
    </div>
  );
}

export default App;
