// #region imports
import { 
    Button,
	Pagination,
	Stack 
} from "@mui/material"
import Editor from "@/components/Editor"
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