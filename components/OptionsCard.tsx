// #region imports
import {
    Icon,
	Button,
    Stack,
    Radio,
    IconButton,
} from "@mui/material"
import Image from "next/image"
import Templates from "./Templates"
import DateTime from "./DateTime"
// #endregion

const OptionsCard = ({
	name,
    picture,
    template,
    message,
    scheduleTime,
}:{
    name: string,
    picture: string,
    template?: string,
    message?: string,
    scheduleTime: Date,
}) => {
	return (
		<Button>
            <Radio/>

            <Stack>
                <Image/>

                <Stack>
                    <h3></h3>
                    <p></p>
                </Stack>
            </Stack>

            <Stack>
                <Icon/>
                {/* timezone */}
            </Stack>

            <Stack>
                <Icon/>
                {/* afternoon */}
            </Stack>

            <Templates/>
            <DateTime/>

            <IconButton/>
            <IconButton/>
		</Button>
	)
}

export default OptionsCard