import React from "react";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

const App = () => {
  const entryElements = data.map((entry) => {
    return (
      <Entry
        key={entry.id}

        //To map over the data for some data 
        // img={{
        //   src: entry.img.src,
        //   alt: entry.img.alt,
        // }}
        // title={entry.title}
        // country={entry.country}
        // googleMapsLink={entry.googleMapsLink}
        // dates={entry.dates}
        // text={entry.text}

        //To map over the data for entire data set
        // entry={entry}

        // Other way to do is using spread operator
        {...entry}


      />
    );
  });

  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
};

export default App;
