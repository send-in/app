// #region imports
import {
    Button,
    Popover,
    Stack
} from "@mui/material"
import { DateRangePicker } from "@mui/x-date-pickers-pro"

import Image from "next/image"
// #endregion

const DateTime = ({
}) => {
	return (
		<>
			<Button>
                {"Date"}
                {"Time"}
			</Button>

            <Popover open>
                <Stack>
                    <Image/>

                    <Stack>
                        <p></p>
                        <p></p>
                    </Stack>
                </Stack>

                <Stack>
                    <Button></Button>
                    <Button></Button>
                    <Button></Button>
                </Stack>

                <Stack>
                    <p></p>
                    <DateRangePicker/>
                </Stack>
            </Popover>
		</>
	)
}

export default DateTime