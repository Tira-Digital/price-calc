import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { RoofType } from "@/app/constants";

export interface FormData {
  type: number;
  size: number;
  raspont: number;
  owners: number;
  sunPanels: number;
  numberOfSunPanels?: number;
  manualAdjustment: number;
  ROT: string | number;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    width: 200,
    fontWeight: "bold",
  },
  value: {
    flex: 1,
  },
});

export const PDFTemplate = ({ formData }: { formData: FormData }) => {
  const getRoofTypeName = (value: number) => {
    const roofType = RoofType.find((type) => type.value === value);
    return roofType?.label || "Okänd";
  };

  const getYesNo = (value: number) => (value === 1 ? "Ja" : "Nej");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Takoffertkalkyl</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Typ av takmaterial:</Text>
            <Text style={styles.value}>{getRoofTypeName(formData.type)}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Storlek:</Text>
            <Text style={styles.value}>{formData.size} m²</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Råspont:</Text>
            <Text style={styles.value}>{getYesNo(formData.raspont)}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Antal fastighetsägare:</Text>
            <Text style={styles.value}>{formData.owners}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Solpaneler:</Text>
            <Text style={styles.value}>{getYesNo(formData.sunPanels)}</Text>
          </View>

          {formData.sunPanels === 1 && (
            <View style={styles.row}>
              <Text style={styles.label}>Antal solpaneler:</Text>
              <Text style={styles.value}>{formData.numberOfSunPanels}</Text>
            </View>
          )}

          <View style={styles.row}>
            <Text style={styles.label}>Manuell justering:</Text>
            <Text style={styles.value}>{formData.manualAdjustment}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>ROT-justering:</Text>
            <Text style={styles.value}>{formData.ROT}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
