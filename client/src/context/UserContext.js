import React, { createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import { print } from "graphql";
import gql from "graphql-tag";
import Cookies from "universal-cookie";
import axios from "axios";
const Context = createContext();

export const UserContext = ({ children }) => {
  const postUser = async (form) => {
    let userConfirmation = false;
    const POST_USER = gql`
      mutation PostUser($input: userInput) {
        postUser(input: $input)
      }
    `;
    await axios
      .post(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
        query: print(POST_USER),
        variables: {
          input: {
            country: form.country,
            password: form.password,
            username: form.username,
          },
        },
      })
      .then(async (res) => {
        if (!res.data.errors) {
          toast.success("User successfully registered", {
            style: {
              background: "#333",
              color: "#5cc1ef",
              fontWeight: "bold",
              textAlign: "center",
            },
          });
          const cookies = new Cookies();
          cookies.set("token", res.data.data.postUser, {
            path: "/",
            maxAge: process.env.NEXT_PUBLIC_COOKIE_EXP_SEC,
          });
          userConfirmation = true;
        } else {
          toast.error(res.data.errors[0].message, {
            style: {
              background: "#333",
              color: "#5cc1ef",
              fontWeight: "bold",
              textAlign: "center",
            },
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return userConfirmation;
  };

  const userAuthentication = async (form) => {
    let userConfirmation = false;
    const AUTHENTICATE_USER = gql`
      query Query($input: userInput) {
        userAuthentication(input: $input)
      }
    `;
    await axios
      .post(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
        query: print(AUTHENTICATE_USER),
        variables: {
          input: {
            password: form.password,
            username: form.username,
          },
        },
      })
      .then(async (res) => {
        if (!res.data.errors) {
          toast.success("Login successful", {
            style: {
              background: "#333",
              color: "#5cc1ef",
              fontWeight: "bold",
              textAlign: "center",
            },
          });
          const cookies = new Cookies();
          cookies.set("token", res.data.data.userAuthentication, {
            path: "/",
            maxAge: process.env.NEXT_PUBLIC_COOKIE_EXP_SEC,
          });
          userConfirmation = true;
        } else {
          toast.error(res.data.errors[0].message, {
            style: {
              background: "#333",
              color: "#5cc1ef",
              fontWeight: "bold",
              textAlign: "center",
            },
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return userConfirmation;
  };

  const logout = () => {
    const cookies = new Cookies();
    cookies.remove("token", { path: "/" });
    window.location.reload();
  };

  return (
    <Context.Provider value={{ postUser, userAuthentication, logout }}>
      {children}
    </Context.Provider>
  );
};

export const useUserContext = () => {
  return useContext(Context);
};
