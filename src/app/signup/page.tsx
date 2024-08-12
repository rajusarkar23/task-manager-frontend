"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import React, { useRef, useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [otpData, setOtpData] = useState({});
  const btnRef = useRef<HTMLButtonElement>(null);
  // console.log(formData);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtpData({
      ...otpData,
      [e.target.id]: e.target.value,
    });
  };
  // console.log(otpData);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3333/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      const response = await res.json();
      console.log(response);
    } catch (error) {
      return error;
    }
  };

  const handleOtpVerification = async () => {
    try {
      const res = await fetch("http://localhost:3333/api/v1/user/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(otpData),
        credentials: "include",
      });
      const response = await res.json();
      console.log(response);
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <form className="py-2" onSubmit={handleSubmit}>
        <Input
          placeholder="First name"
          type="text"
          id="firstName"
          className="text-black"
          onChange={handleOnChange}
        ></Input>
        <Input
          placeholder="email"
          id="email"
          type="email"
          className="mt-2 text-black"
          onChange={handleOnChange}
        ></Input>
        <Input
          placeholder="password"
          id="password"
          type="password"
          className="mt-2 text-black"
          onChange={handleOnChange}
        ></Input>
        <Button ref={btnRef} className="hidden"></Button>
        <Dialog>
          <DialogTrigger
            onClick={() => btnRef.current?.click()}
            className="bg-blue-600 mt-3 px-3 py-1 rounded font-bold hover:bg-blue-700 transition"
          >
            Signup
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-black flex justify-center">
                Please verify your email by entering OTP
              </DialogTitle>
              <DialogDescription className="flex justify-center">
                <Input
                  className="text-center text-2xl font-bold"
                  
                  id="otp"
                  onChange={handleOtpChange}
                ></Input>
              </DialogDescription>
              <Button onClick={handleOtpVerification}>Verify</Button>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </form>
    </div>
  );
};

export default Signup;
