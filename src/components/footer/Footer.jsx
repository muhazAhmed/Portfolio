import React, { useState } from "react";
import "./footer.css";
import { Button, Card } from "react-bootstrap";
import Loading from "../../layout/Loading";
import axios from "axios";

const Contact = () => {
  const email = "muhazvla313@gmail.com";
  const URL = import.meta.env.VITE_URL;
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const closeModal = () => {
    setLoading(false);
    setModal(false);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(URL, inputs);
      if (res.status === 201) {
        setLoading(false);
        return setModal(true);
      }
      return setLoading(false);
    } catch (err) {
      if (err?.response?.status === 400 || err?.response?.status === 500) {
        console.log(err?.response?.data);
        setTimeout(() => {
          setToast(false);
          setError(null);
        }, 3000);
        setError(err?.response?.data);
        setToast(true);
      }
      return setLoading(false);
    }
  };

  return (
    <div className="contact d-flex align-items-center" id="contact">
      {loading && <Loading />}
      <div
        className="d-flex flex-column align-items-sm-start"
        style={{ gap: "1rem" }}
        data-aos="flip-right"
      >
        <h1>Let's Work Together</h1>
        <p>
          Have a project in mind, or do you want to work with me?
          <br />
          Feel free to reach out by writing an email.
        </p>
        <h6
          className="text-info"
          style={{ cursor: "pointer" }}
          onClick={handleEmailClick}
        >
          {email} <i className="fa-solid fa-arrow-right"></i>
        </h6>
        <div className="links">
          <a
            href="https://github.com/muhazAhmed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/muhazahmed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.youtube.com/@gitunemployed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>

      <Card data-aos="zoom-in">
        <Card.Body>
          <Card.Title>Send me a message</Card.Title>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            autoComplete="off"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
          />
        </Card.Body>
        <Button onClick={handleSubmit}>Submit</Button>
      </Card>

      {modal && (
        <div className="blur">
          <div className="modal">
            <i className="fa-solid fa-circle-check fa-beat-fade"></i>
            <h4>
              You'r request
              <br />
              has been submitted.
            </h4>
            <Button variant="info" onClick={closeModal}>
              Back
            </Button>
          </div>
        </div>
      )}

      {toast && (
        <div className="toast" data-aos="slide-left">
          <i className="fa-solid fa-circle-xmark"></i>
          <h4>{error ? error : "Something Went Wrong"}</h4>
        </div>
      )}
    </div>
  );
};

export default Contact;
