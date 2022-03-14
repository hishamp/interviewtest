import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";

const Form = () => {
  const emailRef = useRef();
  const messageRef = useRef();
  const nameRef = useRef();
  const [error, setError] = useState({
    email: false,
    message: false,
    name: false,
  });

  var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const submitHandler = () => {
    if (!emailPattern.test(emailRef.current.value)) {
      setError((prev) => ({ ...prev, email: true }));
    }
    if (messageRef.current.value.trim() === "") {
      setError((prev) => ({ ...prev, message: true }));
    }
    if (nameRef.current.value.trim() === "") {
      setError((prev) => ({ ...prev, name: true }));
    }
    if (
      !emailPattern.test(emailRef.current.value) ||
      messageRef.current.value.trim() === "" ||
      nameRef.current.value.trim() === ""
    ) {
      return;
    } else {
      axios
        .post(" https://admin.srkprojects.com/web/api/client/v1/contact-us/", {
          email: emailRef.current.value,
          message: messageRef.current.value,
          name: nameRef.current.value,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((er) => {
          console.log(er.response);
        });
    }
  };

  return (
    <Grid
      container
      sx={{
        margin: 10,
        width: "50%",
        background: "lightgrey",
        padding: 10,
      }}
      rowSpacing={2}
    >
      <Grid item xs={12}>
        <Typography>Send Message</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          inputRef={emailRef}
          onChange={() => {
            setError((prev) => ({ ...prev, email: false }));
          }}
          helperText={error.email ? "Invalid Email" : " "}
          label="Email"
          size="small"
          type={"email"}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          helperText={error.message ? "Enter some value" : " "}
          onChange={() => {
            setError((prev) => ({ ...prev, message: false }));
          }}
          inputRef={messageRef}
          label="Message"
          size="small"
          type={"text"}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          helperText={error.name ? "Enter some value" : " "}
          onChange={() => {
            setError((prev) => ({ ...prev, name: false }));
          }}
          inputRef={nameRef}
          label="Name"
          size="small"
          type={"text"}
        />
      </Grid>
      <Grid item sx={12}>
        <Button onClick={submitHandler} variant="outlined">
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
