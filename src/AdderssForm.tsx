import React from "react";
import FormWrapper from "./FormWrapper";

type AdderssData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AdderssFormProps = AdderssData & {
  updateFields: (fields: Partial<AdderssData>) => void;
};

export default function AdderssForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: AdderssFormProps) {
  return (
    <FormWrapper title="Adderss">
      <label> Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label> City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label> State</label>
      <input
        required
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label> Zip</label>
      <input
        required
        type="text"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
}
