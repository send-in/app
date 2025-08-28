// #region imports
import {
	Input, 
	Stack,
} from "@mui/material"
// #endregion

const Editor = ({
	placeholder,
    template,
    noheader=false
}:{
	placeholder?: string,
    template?: any,
    noheader?: boolean
}) => {
	return (
		<Stack>
			{
                !noheader && 
                <Input/>
            }

            {/* Text editor here */}
		</Stack>
	)
}

export default Editor