import React, { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export default function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: "0", marginBottom: "3rem" }}>
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "1.5rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  );
}
