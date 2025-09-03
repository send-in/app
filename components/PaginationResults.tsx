"use client"

// #region imports
import { 
    useState 
} from "react"

import { 
    ToggleButton, 
    ToggleButtonGroup 
} from "@mui/material"
// #endregion

const TailwindToggleGroup = () => {
	const [value, setValue] = useState("20")

	const handleChange = (
        _: React.MouseEvent<HTMLElement>, 
        newValue: string | null
    ) =>
		newValue !== null && 
        setValue(newValue)


	const options = ["20", "50", "All"]

	return (
		<ToggleButtonGroup
			value={value}
			exclusive
			onChange={handleChange}
		>
			{options.map((option) => (
				<ToggleButton
					key={option}
					value={option}
					className={`
						relative rounded-full min-w-10 h-10 
                        font-medium tracking-tighter transition-all 
                        duration-200 border-0 font-mada normal-case
						${value === option ? 
                            "text-charcoal-100 bg-grey-100" : 
                            "text-grey-200 bg-transparent"
                        } 
					`}
				>
					{option}
				</ToggleButton>
			))}
		</ToggleButtonGroup>
	)
}

export default TailwindToggleGroup