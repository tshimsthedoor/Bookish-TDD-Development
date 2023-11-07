import React from "react";
import { Typography } from "@material-ui/core";




function App() {
  return (
    <>
      <div>
        <Typography variant="h2" component="h2" data-test="heading">
          Bookish
        </Typography>
      </div>
      <div data-test="book-list">
        <div className="book-item">
          <h2 className="title">Refactoring</h2>
        </div>
        <div className="book-item">
          <h2 className="title">Domain-driven design</h2>
        </div>
      </div>
    </>
  );
}

export default App;
