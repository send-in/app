interface IconProps {
  size?: number
  fill?: string
}

const ItalicIcon = ({ 
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
    <path d="M10 4a1 1 0 0 0 0 2h2.58l-4.16 12H8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2.58l4.16-12H16a1 1 0 1 0 0-2Z" />
  </svg>
)

export default ItalicIcon