export const dynamic = "force-dynamic";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import TestForm from "./components/test-form";
import styles from "./page.module.css";
import ThemeRegistry from "./theme-registry";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>MUI/React Hook Forms</h1>
        <h2>Using MUI with theme</h2>
        <h3>Test Form</h3>
        {/* Theme can only be used for client components */}
        <ThemeRegistry options={{ key: "mui" }}>
          <TestForm />
        </ThemeRegistry>
      </main>
      <footer>
        <h2>Using MUI without theme</h2>
        <Accordion slotProps={{ heading: { component: "h4" } }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Accordion
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </footer>
    </div>
  );
}
