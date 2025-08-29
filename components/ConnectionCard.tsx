// #region imports
import {
    Icon,
	Button,
    Stack,
    Radio,
} from "@mui/material"
import Image from "next/image"
// #endregion

const ConnectionCard = ({
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

            <p></p>

            <Stack>
                <Icon/>
                {/* timezone */}
            </Stack>

            <Stack>
                <Icon/>
                {/* afternoon */}
            </Stack>
		</Button>
	)
}

export default ConnectionCard