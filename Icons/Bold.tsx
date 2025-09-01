interface IconProps {
  size?: number
  fill?: string
}

const BoldIcon = ({ 
	size = 24, 
	fill = "currentColor" 
}: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		fill={fill}
		viewBox="0 0 24 24"
	>
		<path d="M15.6 10.79A6.5 6.5 0 0 0 12 2H7a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h6a6 6 0 0 0 2.6-11.21ZM9 4h3a4.5 4.5 0 0 1 0 9H9Zm3 14H9v-7h3a3.5 3.5 0 0 1 0 7Z" />
	</svg>
)

export default BoldIcon
