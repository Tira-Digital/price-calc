import TextField from "@mui/material/TextField";

export default function NumberInput({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  required: boolean;
}) {
  return (
    <TextField
      id="outlined-basic"
      type="number"
      label={label}
      variant="outlined"
      value={value || ""}
      onChange={(e) => onChange(Number(e.target.value))}
      required={required}
      className="w-full"
    />
  );
}
