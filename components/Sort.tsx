"use client"

// #region imports
import { 
	Select, 
	MenuItem, 
	FormControl, 
} from "@mui/material"
// #endregion

interface SortProps {
	value: string
	onChange: (selected: string) => void
	options: string[]
}

const Sort = ({ 
	value,
	onChange,
	options
}: SortProps) => {

	const handleChange = (event) => {
		const selected = options.find(
			(t) => t === event.target.value
		)
		
		if (selected) 
			onChange(selected)
		else 
			onChange("")
	}

	return (
		<FormControl className="w-max">
			<Select
				className="bg-blue-100 text-white rounded-full px-4 py-5 w-max h-[1rem]"
				value={value || ""}
				onChange={handleChange}
				displayEmpty
				MenuProps={{
					PaperProps: {
						className: "rounded-2xl shadow-none mt-4",
					},
				}}
				renderValue={
					selected =>
						selected ? selected : "Sort"
				}
				sx={{
					".MuiSelect-icon": {
						color: "white",
					},
				}}
			>

				{
					options.map(
						option => (
							<MenuItem
								className="rounded-full m-2 p-2 px-4 hover:bg-grey-100"
								key={option} 
								value={option}
							>
								{option}
							</MenuItem>
						)
					)
				}
			</Select>
		</FormControl>
	)
}

export default Sort
