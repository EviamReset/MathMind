import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function App() {
  const [cards, setCards] = useState([]);
  const [total, setTotal] = useState(0);
  const [showTotal, setShowTotal] = useState(false);

  const values = [
    { name: "A", value: 11 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "10", value: 10 },
    { name: "J", value: 10 },
    { name: "Q", value: 10 },
    { name: "K", value: 10 },
  ];

  const getCard = () => {
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const newCards = [...cards, randomValue];
    setCards(newCards);
    setTotal((prevTotal) => prevTotal + randomValue.value);

    console.log("cards:", cards);
    console.log("total:", total);
  };

  const showAnswear = () => {
    setShowTotal(true);
  };

  const restart = () => {
    setCards([]);
    setTotal(0);
    setShowTotal(false);
  };

  return (
    <Grid
      container
      direction="column"
      sx={{
        height: "85vh", // ocupa toda la pantalla
        justifyContent: "space-between", // separa cartas y botones
        alignItems: "center", // centra horizontalmente todo
        padding: 9,
      }}
    >
      <Grid container direction="row" spacing={2}>
        {cards.map((card, index) => (
          <Grid key={index}>
            <Card sx={{ padding: 2 }}>{card.name}</Card>
          </Grid>
        ))}
      </Grid>

      <Grid container>
        <Stack spacing={2}>
          <Button
            variant="outlined"
            sx={{
              filter: showTotal ? "none" : "blur(4px)",
              transition: "filter 0.3s ease", // animación suave
            }}
            onClick={showAnswear}
          >
            {total}
          </Button>
          <Button variant="contained" onClick={getCard}>
            Get Card
          </Button>
          <Button variant="contained" color="secondary" onClick={restart}>
            Restart
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default App;
