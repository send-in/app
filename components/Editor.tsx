// #region imports
import {
    Button,
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

            <Button>
                {/* copy to clipboard */}
            </Button>
		</Stack>
	)
}

export default Editor