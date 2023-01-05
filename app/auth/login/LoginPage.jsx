"use client";
import { useRef } from "react";
import Textbox from "../../../components/Textbox";
import GreenButton from "../../../components/buttons/GreenButton";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";

const LoginPage = () => {
  const userName = useRef("");
  const passwd = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: passwd.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
    <form onSubmit={formik.handleSubmit}>
    <Textbox
    lableText={"Benutzer"}
    onChange={(e) => {
      userName.current = e.target.value;
    }}
  />

  <Textbox
    lableText={"Passwort"}
    type={"password"}
    onChange={(e) => {
      passwd.current = e.target.value;
    }}
  />

      <GreenButton label={"Anmelden"} type="submit" onClick={onSubmit} />
    </form>
    </div>
  </div>
  );
};

export default LoginPage;
