interface IconProps {
  size?: number
  fill?: string
}

const RedoIcon = ({ 
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
    <path d="M12 5a8 8 0 0 1 6.32 3H20a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1 6 6 0 1 0 0 8 1 1 0 0 1 1.41 1.41A8 8 0 1 1 12 5Z" />
    <path d="M19 8a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v3a1 1 0 0 0 1 1Z" />
    <path d="M19 8h3a1 1 0 0 0 0-2h-3a1 1 0 0 0 0 2Z" />
  </svg>
)

export default RedoIcon
