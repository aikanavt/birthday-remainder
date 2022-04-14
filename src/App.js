import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays on the list</h3>
        <List props={people}> </List>
        <button
          className="btn"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear list
        </button>
      </section>
    </main>
  );
}

export default App;