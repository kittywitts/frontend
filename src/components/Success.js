import React, { useState } from "react";
import styles from "./Mail.module.css";
import mail from "./../assets/mail.png";
import { useNavigate } from "react-router-dom";
import success from "./../assets/check.png";

export default function Success() {
  const navigate = useNavigate();
  const handleRequest = () => {
    navigate("/");
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
          <div style={{ textAlign: "center" }}>
            <p>Hurray 🎉, the message is not a spam</p>
            <img src={success} width="100px" />
          </div>

          <div
            className={styles.button_container}
            style={{ marginTop: "30px" }}
          >
            <button className={styles.button} onClick={handleRequest}>
              CHECK ANOTHER
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <p>NOTE : This may not be 100% correct.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
