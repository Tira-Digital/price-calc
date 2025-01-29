import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SelectOption } from "@/app/constants";

export default function BasicSelect({
  value,
  onChange,
  items,
  label,
  required,
}: {
  value: number;
  onChange: (value: number) => void;
  items: SelectOption[];
  label: string;
  required: boolean;
}) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(parseInt(event.target.value));
  };

  return (
    items.length > 0 && (
      <Box className="w-full">
        <FormControl required={required} fullWidth>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value.toString()}
            label={label}
            onChange={handleChange}
          >
            {items.map((item, idx) => (
              <MenuItem key={idx} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    )
  );
}
