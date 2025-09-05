// #region imports
import {
    Search
} from "../Icons"

import {
	TextField,
} from "@/base"
// #endregion

const SearchBar = ({
	size
}: {
    size: string
}) => (
	<TextField
		variant="filled"
		placeholder="Search"
		fullWidth
		endIcon={
			<Search />
		}
	/>
)

export default SearchBar
