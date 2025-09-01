interface IconProps {
  size?: number
  fill?: string
}

const UndoIcon = ({ 
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
    <path d="M12 5a8 8 0 0 0-6.32 3H4a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1 6 6 0 1 1 0 8 1 1 0 0 0-1.41 1.41A8 8 0 1 0 12 5Z" />
    <path d="M5 8a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1Z" />
    <path d="M5 8H2a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Z" />
  </svg>
)

export default UndoIcon
