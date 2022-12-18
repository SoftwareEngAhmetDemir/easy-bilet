import React from "react";
import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";

function EeasyBiletInput({ name, control, placeholder }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      mask="999.999.999-99"
      as={InputMask}
      render={({ field }) => (
        <input
        
          {...field}
          type="text"
          className="form-control form-control-inp border-0"
          style={{ outline: "none" }}
          // id="exampleFormControlInput2"
          placeholder={placeholder}
        />
      )}
    />
  );
}

export default EeasyBiletInput;
