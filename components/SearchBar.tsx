// #region imports
import {
    Search
} from "../Icons"

import {
	TextField, 
} from "@mui/material"
// #endregion

const SearchBar = ({
	size
}: {
    size: string
}) => (
	<div 
		className={`
			flex items-center p-1 px-6 bg-grey-100 
			rounded-full focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-inset
            transition-all ease-in-out delay-100 cursor-pointer
            self-start tracking-tighter w-[35%]
		`}
	>
		<TextField
			variant="standard"
			placeholder="Search"
			fullWidth
			slotProps={{
				input:{
					disableUnderline: true,
					className: "font-mada"
				}
			}}
		/>
		<Search />
	</div>
)

export default SearchBar