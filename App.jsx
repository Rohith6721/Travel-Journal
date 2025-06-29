import React from "react";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

const App = () => {

  const entryElements = data.map((entry)=>{
      return(
        <Entry 
      
      img = {{
        src:entry.img.src,
        alt:entry.img.alt
      }}
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}

      />
      )
  }); 

  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  );
};

export default App;
