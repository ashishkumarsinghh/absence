import React, { useEffect } from "react";
import config from "./config";
function App() {
  useEffect(() => {
    fetch(`${config.apiServerBaseUrl}absences`).then((res) =>
      res.json().then((data) => console.log(data))
    );
  });
  return <div className="App"></div>;
}

export default App;
