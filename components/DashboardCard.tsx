// #region imports
import {
    Icon,
	IconButton,
	Stack,
} from "@mui/material"
import Image from "next/image"
// #endregion

const DashboardCard = ({
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
		<Stack>
            <Image/>
            <p></p>

            <p></p>

            <Icon/>
            <p></p>

            <IconButton/>
		</Stack>
	)
}

export default DashboardCard