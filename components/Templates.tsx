"use client"

// #region imports
import { 
	Select, 
	MenuItem, 
	FormControl, 
} from "@mui/material"

import templates from "@/templates/templates.json"
// #endregion

interface TemplatesProps {
	value: string
	onChange: (
		template: { 
			name: string,
			content: string 
		}
	) => void
}

const Templates = ({ 
	value,
	onChange, 
}: TemplatesProps) => {

	const handleChange = (event) => {
		const selected = templates.find(
			(t) => t.name === event.target.value
		)
		
		if (selected) 
			onChange(selected)
		else 
			onChange({ 
				name: "", 
				content: "" 
			})
	}

	return (
		<FormControl className="w-max">
			<Select
				className="bg-grey-100 text-charcoal-100 rounded-full px-4 py-5 w-max h-[1rem] font-mada text-lg"
				value={value || ""}
				onChange={handleChange}
				displayEmpty
				MenuProps={{
					PaperProps: {
						className: "rounded-4xl shadow-none p-2 mt-4",
					},
				}}
				renderValue={
					selected =>
						selected ? selected : "Select Template"
				}
				sx={{
					".MuiSelect-icon": {
						color: "var(--color-charcoal-100)",
					},
				}}
			>

				{
					templates.map(
						template => (
							<MenuItem
								className="rounded-full m-2 p-2 px-4 hover:bg-grey-100"
								key={template.name} 
								value={template.name}
							>
								{template.name}
							</MenuItem>
						)
					)
				}
			</Select>
		</FormControl>
	)
}

export default Templates
