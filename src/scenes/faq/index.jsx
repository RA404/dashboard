import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme"

const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m="20px">
			<Header title="FAQ" subtitle="Frequently asked questions page" />

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography variant="h5" color={colors.greenAccent[500]}>
						An important question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
						Corporis aut magnam enim aliquam nobis asperiores ea adipisci natus ex, nulla dicta illum officia veniam quibusdam? 
						Vel consequatur natus beatae doloremque iure dolore sunt deleniti distinctio facilis omnis sed dignissimos quis quae, 
						recusandae excepturi amet nulla in? Doloremque at asperiores porro ex, obcaecati placeat. 
						Veniam, laborum obcaecati quos asperiores, fugiat suscipit est corrupti et ut pariatur sequi libero ratione, earum cum? 
						Consectetur necessitatibus cum esse quo dolores voluptates commodi provident, quos ducimus facilis 
						dolorem veritatis alias assumenda reprehenderit, aspernatur tenetur incidunt placeat perspiciatis molestias. 
						Minima, ea. At quis reprehenderit eos ea!
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography variant="h5" color={colors.greenAccent[500]}>
						Another important question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
						Corporis aut magnam enim aliquam nobis asperiores ea adipisci natus ex, nulla dicta illum officia veniam quibusdam? 
						Vel consequatur natus beatae doloremque iure dolore sunt deleniti distinctio facilis omnis sed dignissimos quis quae, 
						recusandae excepturi amet nulla in? Doloremque at asperiores porro ex, obcaecati placeat. 
						Veniam, laborum obcaecati quos asperiores, fugiat suscipit est corrupti et ut pariatur sequi libero ratione, earum cum? 
						Consectetur necessitatibus cum esse quo dolores voluptates commodi provident, quos ducimus facilis 
						dolorem veritatis alias assumenda reprehenderit, aspernatur tenetur incidunt placeat perspiciatis molestias. 
						Minima, ea. At quis reprehenderit eos ea!
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography variant="h5" color={colors.greenAccent[500]}>
						Your favorite question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
						Corporis aut magnam enim aliquam nobis asperiores ea adipisci natus ex, nulla dicta illum officia veniam quibusdam? 
						Vel consequatur natus beatae doloremque iure dolore sunt deleniti distinctio facilis omnis sed dignissimos quis quae, 
						recusandae excepturi amet nulla in? Doloremque at asperiores porro ex, obcaecati placeat. 
						Veniam, laborum obcaecati quos asperiores, fugiat suscipit est corrupti et ut pariatur sequi libero ratione, earum cum? 
						Consectetur necessitatibus cum esse quo dolores voluptates commodi provident, quos ducimus facilis 
						dolorem veritatis alias assumenda reprehenderit, aspernatur tenetur incidunt placeat perspiciatis molestias. 
						Minima, ea. At quis reprehenderit eos ea!
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography variant="h5" color={colors.greenAccent[500]}>
						Some random queation
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
						Corporis aut magnam enim aliquam nobis asperiores ea adipisci natus ex, nulla dicta illum officia veniam quibusdam? 
						Vel consequatur natus beatae doloremque iure dolore sunt deleniti distinctio facilis omnis sed dignissimos quis quae, 
						recusandae excepturi amet nulla in? Doloremque at asperiores porro ex, obcaecati placeat. 
						Veniam, laborum obcaecati quos asperiores, fugiat suscipit est corrupti et ut pariatur sequi libero ratione, earum cum? 
						Consectetur necessitatibus cum esse quo dolores voluptates commodi provident, quos ducimus facilis 
						dolorem veritatis alias assumenda reprehenderit, aspernatur tenetur incidunt placeat perspiciatis molestias. 
						Minima, ea. At quis reprehenderit eos ea!
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography variant="h5" color={colors.greenAccent[500]}>
						The final question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
						Corporis aut magnam enim aliquam nobis asperiores ea adipisci natus ex, nulla dicta illum officia veniam quibusdam? 
						Vel consequatur natus beatae doloremque iure dolore sunt deleniti distinctio facilis omnis sed dignissimos quis quae, 
						recusandae excepturi amet nulla in? Doloremque at asperiores porro ex, obcaecati placeat. 
						Veniam, laborum obcaecati quos asperiores, fugiat suscipit est corrupti et ut pariatur sequi libero ratione, earum cum? 
						Consectetur necessitatibus cum esse quo dolores voluptates commodi provident, quos ducimus facilis 
						dolorem veritatis alias assumenda reprehenderit, aspernatur tenetur incidunt placeat perspiciatis molestias. 
						Minima, ea. At quis reprehenderit eos ea!
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	)
}

export default FAQ;