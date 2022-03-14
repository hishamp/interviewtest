import { Card, CardContent } from "@mui/material";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Card variant="outlined" sx={{ width: 120 }}>
      <div style={{ textAlign: "center" }}> Counter </div>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => {
              setCounter((prev) => prev - 1);
            }}
          >
            -
          </button>
          <p style={{ margin: 5, marginLeft: 10, marginRight: 10 }}>
            {counter}
          </p>
          <button
            onClick={() => {
              setCounter((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Counter;
