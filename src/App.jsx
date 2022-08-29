import { useState } from "react";

function App() {
  const [colorCards, setColorCards] = useState([
    {
      id: 6,
      color: "maroon",
      colorCode: "#800000",
    },
    {
      id: 7,
      color: "yellow",
      colorCode: "#FFFF00",
    },
    {
      id: 8,
      color: "olove",
      colorCode: "#808000	",
    },
    {
      id: 10,
      color: "green",
      colorCode: "#008000",
    },
    {
      id: 12,
      color: "teal",
      colorCode: "#008080",
    },
    {
      id: 13,
      color: "navy",
      colorCode: "#000080	",
    },
    {
      id: 14,
      color: "fuchsia",
      colorCode: "#FF00FF",
    },
    {
      id: 15,
      color: "purple",
      colorCode: "#800080",
    },
  ]);

  return (
    <>
      <h1>Color Cards</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const formValues = Object.fromEntries(formData);
          setColorCards([
            ...colorCards,
            {
              id: formValues.colorCode,
              color: "black",
              hexCode: formValues.colorCode,
            },
          ]);
        }}
      >
        <input type="color" name="colorPicker"></input>
        <input type="text" name="colorCode" placeholder="Your Hexcode"></input>
        <button type="submit">Submit</button>
      </form>

      {/* <button
        onClick={() => {
          setColorCards([...colorCards, { id: 16, colorCode: "#123123" }]);
        }}
      >
        color
      </button> */}

      <div>
        <ul>
          {colorCards.map((colorCard) => {
            return (
              <li key={colorCard.hexCode}>
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(colorCard.colorCode);
                  }}
                  style={{
                    width: "80px",
                    height: "80px",
                    background: colorCard.colorCode,
                  }}
                >
                  Name: {colorCard.color} <br /> HexCode {colorCard.colorCode}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
