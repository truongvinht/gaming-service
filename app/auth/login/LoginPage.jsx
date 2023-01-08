"use client";
import { useRef } from "react";
import Textbox from "../../../components/Textbox";
import GreenButton from "../../../components/buttons/GreenButton";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const userName = useRef("");
  const passwd = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: passwd.current,
      redirect: true,
      callbackUrl: "/users",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
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
    </div>
  </div>
  );
};

export default LoginPage;
