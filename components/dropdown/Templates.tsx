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
		<FormControl 
            className="w-max"
        >
			<Select
				className="
                    bg-blue-100 text-white rounded-full 
                    px-4 py-4 w-max h-[1rem] font-mada text-base tracking-tighter
                "
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
						color: "var(--color-white)",
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
