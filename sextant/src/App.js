import "./App.css";
import React from "react";
import { textFields } from "./utils";

function App() {
  const REACT_APP_DOCUMENT_TITLE = "Sextant";

  React.useEffect(() => {
    document.title = REACT_APP_DOCUMENT_TITLE;
  }, []);

  return (
    <div className="App">
      <header className="App-header">{REACT_APP_DOCUMENT_TITLE}</header>
      <body>
        <div>
          <h1>Cisco Intro to Software Engineering</h1>
        </div>
        <div>
          {textFields.map((element) => {
            return (
              <div className="block">
                <h4>{element.title}</h4>
                <div>
                  <span>{element.content}</span>
                </div>
              </div>
            );
          })}
        </div>
      </body>
    </div>
  );
}

export default App;
