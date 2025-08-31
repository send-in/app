// #region imports
import Editor from "@/components/Editor"
import TemplateCard from "@/components/TemplateCard"

import { 
    Button,
	Pagination,
	Stack 
} from "@mui/material"
// #endregion


const page = () => {
	return (
		<main>
			<Stack>
                {
                    <TemplateCard
                        template=""
                    />
                }

				<Stack>
                    <Button></Button>
				    <Pagination/>
				</Stack>
			</Stack>

			<Stack>
				<Editor/>

				<Stack>
					<Button></Button>
					<Button></Button>
				</Stack>
			</Stack>
		</main>
	)
}

export default page