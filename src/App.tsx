import React, { FormEvent, useState } from "react";
import useMultistepForm from "./useMultistepForm";
import AdderssForm from "./AdderssForm";
import AccountForm from "./AccountForm";
import UserForm from "./userForm";

type FormData = {
  firstName: string;
  lastName: string;
  street: string;
  age: string;
  state: string;
  city: string;
  gmail: string;
  password: string;
};

const INTTIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  street: "",
  age: "",
  state: "",
  city: "",
  gmail: "",
  password: "",
};

export default function App() {
  const [data, setData] = useState(INTTIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AdderssForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Ceration");
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "5rem",
        margin: "10rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {" "}
          {currentStepIndex + 1} \ {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}
