import "./styles.css";
import React, { useState } from "react";

const fontLib = [
  { family: "Newsreader", type: "Heading" },
  { family: "Reggae One", type: "Heading" },
  { family: "Ranchers", type: "Heading" },
  { family: "Georgia", type: "Body" },
  { family: "Arial", type: "Body" },
  { family: "Verdana", type: "Body" }
];

//var fontLibKeys = Object.keys(fontLib);

function SmallFigma() {
  const [fontsize, setFontsize] = useState(64);
  const [font, setFont] = useState("Ranchers");

  function copyCss() {
    //console.log(font);
    const style = `font-family: ${font}`;
    //console.log(style);
    //style.select();
    document.execCommand("copy", style);
    console.log(document.execCommand("copy", style));
  }
  return (
    <>
      <h1> Small Figma </h1>
      <div>
        <button
          onClick={() => setFontsize((size) => (size <= 8 ? 8 : size - 8))}
        >
          -
        </button>
        <span> play with text size </span>
        <button
          onClick={() => setFontsize((size) => (size >= 160 ? 160 : size + 8))}
        >
          +
        </button>

        <ul>
          {fontLib.map((font) => {
            return (
              <li
                key={font.family}
                style={{
                  display: "inline-block"
                }}
                onClick={() => setFont(() => font.family)}
              >
                <button
                  style={{
                    display: "inline-block",
                    border: "1px solid",
                    borderRadius: "5px",
                    padding: "1px 4px",
                    margin: "3px 5px"
                  }}
                >
                  {" "}
                  <p>Font : {font.family}</p>
                  <p>For : {font.type}</p>{" "}
                </button>
              </li>
            );
          })}
        </ul>
        <div>
          <button onClick={copyCss}>Copy CSS </button>
        </div>
        <p
          style={{
            fontSize: fontsize + "px",
            fontFamily: font
          }}
        >
          This is {fontsize}px of text{" "}
        </p>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <SmallFigma />
    </div>
  );
}

// Arial, Georgia - head
// Verdana
// Helvetica
