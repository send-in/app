interface IconProps {
  size?: number
  fill?: string
}

const UnderlineIcon = ({ 
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
    <path d="M6 3a1 1 0 0 0-1 1v7a7 7 0 1 0 14 0V4a1 1 0 1 0-2 0v7a5 5 0 1 1-10 0V4a1 1 0 0 0-1-1ZM5 20a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2Z" />
  </svg>
)

export default UnderlineIcon
