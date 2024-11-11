import React from "react";
import FormWrapper from "./FormWrapper";

type AccouctData = {
  eamil: string;
  password: string;
};

type AccountFormProps = AccouctData & {
  updateFields: (fields: Partial<AccouctData>) => void;
};

export default function AccountForm({
  eamil,
  password,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="Accouct Ceration">
      <label> Email</label>
      <input
        autoFocus
        required
        type="email"
        value={eamil}
        onChange={(e) => updateFields({ eamil: e.target.value })}
      />
      <label> Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
