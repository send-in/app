interface IconProps {
  size?: number
  fill?: string
}

const NumbersIcon = ({ 
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
    <path d="M4 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H6v4h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1V5Zm6 0a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-3v2h2a1 1 0 0 1 0 2h-2v4a1 1 0 1 1-2 0V5Zm6 8a1 1 0 0 1 1-1h1v-2h-1a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1v8h1a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1v-2h-1a1 1 0 0 1-1-1v-2Zm-12 6h2a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2Z" />
  </svg>
)

export default NumbersIcon
