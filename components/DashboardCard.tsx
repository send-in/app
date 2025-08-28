// #region imports
import {
    Icon,
	IconButton,
	Button,
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
		<Button>
            <Image/>
            <p></p>

            <p></p>

            <Icon/>
            <p></p>

            <IconButton/>
		</Button>
	)
}

export default DashboardCard