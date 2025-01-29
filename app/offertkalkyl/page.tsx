"use client";

import Button from "@mui/material/Button";
import MultipleSelectPlaceholder from "../components/SelectList";
import NumberInput from "../components/NumberInput";
import RadioRound from "../components/Radio/Round";
import RadioSquare from "../components/Radio/Square";
import { YesOrNo, NumberOfOwners, RoofType } from "../constants";
import { FormLabel, Slider } from "@mui/material";
import { FormEvent, useState } from "react";
import { PDFTemplate } from "../components/PDFTemplate";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import { pdf } from "@react-pdf/renderer";
import { months } from "../constants";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Logo from "@/public/logo.png";
// import Image from "next/image";

interface FormData {
  type: number;
  size: number;
  raspont: number;
  owners: number;
  sunPanels: number;
  numberOfSunPanels: number;
  manualAdjustment: number;
  ROT: number;
}

export default function Offertkalkyl() {
  const [formData, setFormData] = useState<FormData>({
    type: 0,
    size: 0,
    raspont: 0,
    owners: 0,
    sunPanels: 0,
    numberOfSunPanels: 0,
    manualAdjustment: 0,
    ROT: 0,
  });

  const [generatePDFbtn, setGeneratePDFbtn] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setGeneratePDFbtn(true);
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const openPDF = async () => {
    const blob = await pdf(<PDFTemplate formData={formData} />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

  const generatePDF = async () => {
    const blob = await pdf(<PDFTemplate formData={formData} />).toBlob();
    const url = URL.createObjectURL(blob);
    const today = new Date();
    const day = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    const a = document.createElement("a");
    a.href = url;
    a.download = `offertkalkyl-${formattedDate}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const disabledCalculate =
    formData.type == 0 || formData.size == 0 || formData.owners === 0;

  return (
    <div className="px-4 flex flex-col lg:flex-row items-center justify-end lg:justify-evenly h-screen">
      <div>
        <h1 className="hidden lg:block text-center mb-2 text-2xl lg:text-4xl xl:text-5xl">
          Takoffertkalkyl
        </h1>
        <h2 className="hidden lg:block text-center mb-2 text-lg">
          Fyll i dina uppgifter för att få en offert
        </h2>
        {/*   <Image
          className="hidden lg:block"
          width="300"
          height="200"
          src={Logo}
          alt={"Svenska Takvisionärerna logo"}
        />
        <Image
          className="block lg:hidden absolute right-6 top-6"
          width="80"
          height="80"
          src={Logo}
          alt={"Svenska Takvisionärerna logo"}
        /> */}
        <div className="absolute left-6 top-6">
          <Link href="/">
            <Button variant="contained" startIcon={<HomeIcon />}>
              Tillbaka
            </Button>
          </Link>
        </div>
      </div>
      <div className="bg-gray mb-8 lg:mb-0 sm:min-w-[600px] min-w-full p-8 rounded-xl shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="flex gap-4 items-center flex-col"
        >
          <MultipleSelectPlaceholder
            required={true}
            label="Typ av takmaterial"
            items={RoofType}
            value={formData.type}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, type: value }))
            }
          />
          <NumberInput
            required={true}
            label="Storlek (m2)"
            value={formData.size}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, size: value }))
            }
          />
          <RadioRound
            required={false}
            label="Råspont"
            items={YesOrNo}
            value={formData.raspont}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, raspont: value }))
            }
          />
          <RadioSquare
            required={true}
            label="Antal fastighetsägare"
            items={NumberOfOwners}
            value={formData.owners}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                owners: value,
              }))
            }
          />
          <RadioRound
            required={false}
            label="Finns solpaneler?"
            items={YesOrNo}
            value={formData.sunPanels}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, sunPanels: value }))
            }
          />
          {formData.sunPanels === 1 && (
            <NumberInput
              required={false}
              label="Antal solpaneler"
              value={formData.numberOfSunPanels}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, numberOfSunPanels: value }))
              }
            />
          )}
          <div className="w-full">
            <FormLabel className="pb-2">
              Manuell justering {formData.manualAdjustment}%
            </FormLabel>
            <Slider
              value={formData.manualAdjustment}
              onChange={(_, value) =>
                setFormData((prev) => ({
                  ...prev,
                  manualAdjustment: value as number,
                }))
              }
              defaultValue={0}
              aria-label="Default"
              valueLabelDisplay="auto"
              sx={{
                color: "#6567E4",
                "& .MuiSlider-thumb": {
                  "&:hover, &.Mui-focusVisible": {
                    boxShadow: `0px 0px 0px 8px rgba(101, 103, 228, 0.16)`,
                  },
                },
              }}
            />
          </div>
          <NumberInput
            required={false}
            label="ROT-justering"
            value={formData.ROT}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, ROT: value }))
            }
          />
          <Button
            className="w-full !py-[10px] !text-[18px]"
            variant="contained"
            disabled={disabledCalculate}
            type="submit"
            sx={{
              backgroundColor: "#6567E4",
              "&:hover": {
                backgroundColor: "#5254c7",
              },
            }}
            onClick={handleSubmit}
          >
            Beräkna offert
          </Button>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Button
              className="w-full"
              variant="contained"
              disabled={!generatePDFbtn}
              type="submit"
              color="info"
              onClick={generatePDF}
              endIcon={<DownloadIcon />}
            >
              Ladda ner PDF
            </Button>
            <Button
              className="w-full"
              variant="contained"
              disabled={!generatePDFbtn}
              type="submit"
              color="success"
              onClick={openPDF}
              endIcon={<OpenInNewIcon />}
            >
              Öppna PDF
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
