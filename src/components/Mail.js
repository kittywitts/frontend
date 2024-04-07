import React, { useState } from "react";
import styles from "./Mail.module.css";
import mail from "./../assets/mail.png";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Mail() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const handleRequest = async () => {
    try {
      const response = await axios.post("http://localhost:5000/predict", {
        email: email,
      });
      console.log(response.data);
      if (response.data === 1) navigate("/success");
      else navigate("/error");
    } catch (error) {
      console.error("Error occurred while making the request:", error);
    }
  };

  const resetEmail = () => {
    setEmail("");
    setResult("");
  };

  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.main_container}>
          <div className={styles.header_container}>
            <div className={styles.header}>
              <img src={mail} alt="Mail Icon" width="35px" />
              <p>Message Classifier</p>
            </div>
          </div>
          <div className={styles.one}>
            <p>
              Hi 👋, you can use this platform to check whether the received
              message is spam or not.
            </p>
          </div>
          <div
            style={{ width: "80%", textAlign: "left" }}
          >
            <label htmlFor="emailInput">Please paste your message here:</label>
          </div>

          <div className={styles.textfield}>
            <TextField
              id="emailInput"
              multiline
              maxRows={10}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                "& .MuiInputBase-inputMultiline": {
                  minHeight: "300px",
                  width: "750px",
                },
                "& .MuiInputBase-input": {
                  fontSize: "16px",
                },
                "& .MuiInputBase-root": {
                  width: "100%",
                },
              }}
            />
          </div>
          <div className={styles.button_container}>
            <button className={styles.button} onClick={handleRequest}>
              CHECK
            </button>
            <button className={styles.button} onClick={resetEmail}>
              RESET
            </button>
          </div>
          {result !== "" && (
            <p className={styles.result}>{`Result: ${
              result ? "Spam" : "Not Spam"
            }`}</p>
          )}
        </div>
      </div>
    </div>
  );
}
