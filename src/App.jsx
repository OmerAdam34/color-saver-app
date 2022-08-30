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
      color: "yellow",
      colorCode: "#808000	",
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
              colorCode: formValues.colorCode,
            },
          ]);
        }}
      >
        <input type="color" name="colorPicker"></input>
        <input type="text" name="colorCode" placeholder="Your Hexcode"></input>
        <button type="submit">Submit</button>
      </form>

      <div>
        <ul>
          {colorCards.map((colorCard) => {
            return (
              <li key={colorCard.colorCode}>
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(colorCard.colorCode);
                  }}
                  style={{
                    width: "100px",
                    height: "100px",
                    background: colorCard.colorCode,
                  }}
                >
                  Name: {colorCard.color} <br /> HexCode {colorCard.colorCode}
                  <button type="submit"> Delete</button>
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
