import { Box, Stack } from "@mui/material";
import { useState } from "react";
import "./contact.css";
import Lottie from "lottie-react";
import contactAnimation from "../../animation/contact/contact.json.json";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <Stack
      alignItems={"center"}
      direction={"row"}
      justifyContent={"space-between"}
      // my={3}
      mx={10}
    >
      <Box>
        <h1 className="title">
          <span className="icon-envelope"> </span>
          Contact us
        </h1>
        <p className="sub-title">
          Contact us for more information and Get notified when I publish
          something new.
        </p>
        <div style={{ justifyContent: "space-between" }} className="flex">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <label className="email" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label className="message" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
            </div>

            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#363636",
                boxShadow: "1px 1px 40px rgba(35, 35, 36, 0.165)",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              id="submit"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </Box>

      <Box className=" animation">
        <Lottie
          className="contact-animation"
          style={{ height: 355 }}
          animationData={contactAnimation}
        />
      </Box>
    </Stack>
  );
};

export default Contact;
