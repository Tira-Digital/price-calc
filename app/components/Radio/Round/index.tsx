import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { SelectOption } from "@/app/constants";
export default function RadioRound({
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
  return (
    items.length > 0 && (
      <FormControl required={required} className="w-full">
        <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
        <RadioGroup
          row
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {items.map((value, idx) => (
            <FormControlLabel
              key={idx}
              className="rounded-none"
              value={value.value}
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#6567E4",
                    },
                  }}
                />
              }
              label={value.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    )
  );
}
