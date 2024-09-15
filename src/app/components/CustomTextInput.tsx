import { Box, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const CustomTextInput = ({ control, name, errors, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div dir="rtl">
          <TextField
            className="w-full"
            label={label}
            variant="outlined"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            error={!!errors[name]}
            helperText={errors[name]?.message}
          />
        </div>
      )}
    />
  );
};

export default CustomTextInput;
