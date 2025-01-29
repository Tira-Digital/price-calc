export type SelectOption = {
  label: string;
  value: number;
};

export const YesOrNo: SelectOption[] = [
  { label: "Ja", value: 1 },
  { label: "Nej", value: 0 },
];

export const NumberOfOwners: SelectOption[] = [
  { label: "1", value: 1 },
  { label: "2 +", value: 2 },
];

export const RoofType: SelectOption[] = [
  { label: "Betongpannor (33kr)", value: 33 },
  { label: "Tegelpannor (56kr)", value: 56 },
  { label: "Takplåt (22kr)", value: 22 },
  { label: "Ytpapp (89kr)", value: 89 },
];

export const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "maj",
  "jun",
  "jul",
  "aug",
  "sep",
  "okt",
  "nov",
  "dec",
];
