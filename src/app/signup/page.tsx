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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { log } from "console";
import Link from "next/link";
import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [otpData, setOtpData] = useState({});
  console.log(formData);

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
  console.log(otpData);
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
        <Button className="bg-blue-600 hover:bg-blue-800 mt-2 items-center">
          <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-black">
                  Are you absolutely sure?
                </DialogTitle>
                <DialogDescription>
                  <Input placeholder="enter otp" id="otp" onChange={handleOtpChange}></Input>
                </DialogDescription>
                <Button onClick={handleOtpVerification}>Ok</Button>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </Button>
      </form>
    </div>
  );
};

export default Signup;
