// #region imports
import { 
    Editor, 
    TemplateCard 
} from "@/components"

import { 
    Button,
	Pagination,
	Stack 
} from "@mui/material"
// #endregion


const page = () => {
	return (
		<main>
			{/* <Stack>
                {
                    <TemplateCard
                        template=""
                    />
                }

				<Stack>
                    <Button></Button>
				    <Pagination/>
				</Stack>
			</Stack> */}

				<Editor/>
			<section>

				{/* <aside>
					<Button></Button>
					<Button></Button>
				</aside> */}
			</section>
		</main>
	)
}

export default page