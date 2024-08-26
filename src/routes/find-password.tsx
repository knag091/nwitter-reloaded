import React, { useState } from "react";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
// import { FirebaseError } from "firebase/app";
import {
  sendPasswordResetEmail,
//   signInWithEmailAndPassword,
} from "firebase/auth";
import {
  Error,
  Form,
  Input,
  Switcher,
  Title,
  Wrapper,
} from "../components/auth-components";
// import GithubButton from "../components/github-btn";
// import styled from "styled-components";

// const Button = styled.span`
//   margin-top: 50px;
//   background-color: white;
//   font-weight: 600;
//   width: 100%;
//   color: black;
//   padding: 10px 20px;
//   border-radius: 50px;
//   border: 0;
//   display: flex;
//   gab: 5px;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
// `;

export default function FindPassword() {
  const navigate = useNavigate();
  const [isLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (isLoading || email === "") return;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <Title>find your password</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          required
        />
        <Input type="submit" value={isLoading ? "Loading..." : "Find"} />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        <Link to="/login">back</Link>
      </Switcher>
    </Wrapper>
  );
}
