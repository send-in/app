// #region imports
import Search from "./Icons/Seach"
import {
	TextField, 
} from "@mui/material"
// #endregion

const SearchBar = ({
	
}) => (
	<div 
		className="
			flex items-center w-full p-2 px-6 bg-grey-100 
			rounded-full
		"
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