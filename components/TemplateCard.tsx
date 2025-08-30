// #region imports
import {
    Button,
} from "@mui/material"
// #endregion

const TemplateCard = ({
    template,
}:{
    template?: string,
}) => {
	return (
		<Button>
            <p>{template}</p>
		</Button>
	)
}

export default TemplateCard