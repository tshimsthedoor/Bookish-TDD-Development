import React from "react";
import { Typography } from "@material-ui/core";
import "./App.css";



function App() {
  return (
    <><div>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
    </div><div data-test='book-list'>
        <div className="book-item">

        </div>
        <div className="book-item">

        </div>
      </div></>
      
    
    
  );
}

export default App;
