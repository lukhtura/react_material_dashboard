import { Box, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "theme";
import Header from "components/Header";

const FAQ = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questins Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important quetion
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas architecto deserunt possimus, repellendus repellat eveniet nisi. Nostrum quia vero vel, enim fugit atque dolor eveniet facere sapiente illo odio.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        A second question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas architecto deserunt possimus, repellendus repellat eveniet nisi. Nostrum quia vero vel, enim fugit atque dolor eveniet facere sapiente illo odio.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas architecto deserunt possimus, repellendus repellat eveniet nisi. Nostrum quia vero vel, enim fugit atque dolor eveniet facere sapiente illo odio.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        One more question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas architecto deserunt possimus, repellendus repellat eveniet nisi. Nostrum quia vero vel, enim fugit atque dolor eveniet facere sapiente illo odio.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Some question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas architecto deserunt possimus, repellendus repellat eveniet nisi. Nostrum quia vero vel, enim fugit atque dolor eveniet facere sapiente illo odio.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        The last one question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas architecto deserunt possimus, repellendus repellat eveniet nisi. Nostrum quia vero vel, enim fugit atque dolor eveniet facere sapiente illo odio.
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default FAQ;