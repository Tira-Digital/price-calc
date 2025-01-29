import * as React from "react";
import { styled } from "@mui/material/styles";
import { Radio as MuiRadio, FormControlLabel } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { SelectOption } from "@/app/constants";
// Custom styled Radio component
const SquareRadio = styled(MuiRadio)(() => ({
  "& .MuiSvgIcon-root": {
    display: "none", // Hide the default radio circle
  },
  padding: 0,
  width: 24,
  height: 24,
  marginRight: 8,
  "&:before": {
    content: '""',
    width: 24,
    height: 24,
    display: "block",
    border: "2px solid #e0e0e0",
    borderRadius: "4px",
    transition: "all 0.2s",
  },
  "&.Mui-checked:before": {
    backgroundColor: "#6567E4", // Changed from theme.palette.primary.main
    borderColor: "#6567E4",
  },
}));

// Custom styled FormControlLabel component
const BoxRadioLabel = styled(FormControlLabel)(() => ({
  margin: 0,
  "& .MuiFormControlLabel-label": {
    padding: "8px 20px",
  },
  "& .MuiRadio-root": {
    display: "none", // Hide the actual radio input
  },
  ".MuiTypography-root": {
    fontSize: "14px",
  },
  border: "2px solid #e0e0e0",
  borderRadius: "8px",
  transition: "all 0.2s",
  cursor: "pointer",
  "&:hover": {
    borderColor: "#6567E4", // Changed from theme.palette.primary.main
  },
  "&.Mui-checked": {
    backgroundColor: "#6567E4", // Changed from theme.palette.primary.main
    borderColor: "#6567E4",
    color: "white",
  },
}));

export default function RadioSquare({
  items,
  label,
  value,
  onChange,
  required,
}: {
  items: SelectOption[];
  label: string;
  value: number;
  onChange: (value: number) => void;
  required: boolean;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    items.length > 0 && (
      <FormControl
        required={required}
        className="w-full flex flex-col gap-[8px]"
      >
        <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
        <RadioGroup
          row
          value={value}
          onChange={handleChange}
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          className="w-full flex gap-[8px]"
        >
          {items.map((itemValue, key) => (
            <BoxRadioLabel
              key={key}
              value={itemValue.value}
              control={<SquareRadio />}
              label={itemValue.label}
              className={`${value === itemValue.value ? "Mui-checked" : ""}`}
            />
          ))}
        </RadioGroup>
      </FormControl>
    )
  );
}
