import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Todo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v1/todos")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);
  return (
    <div>
      {data.length > 0 && (
        <Grid container spacing={2}>
          {data.slice(0, 9).map((item, idx) => {
            return (
              <Grid key={item.id} item xs={12 / 3}>
                <div style={{ border: "1px solid black", height: 150 }}>
                  <Typography>Title:{item.title}</Typography>
                  <Typography>User Id:{item.user_id}</Typography>
                  <Typography>Due date:{item.due_on}</Typography>
                  <Typography>status:{item.status}</Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default Todo;
