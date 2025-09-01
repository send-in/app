interface IconProps {
  size?: number
  fill?: string
}

const LinkIcon = ({ 
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
    <path d="M10.59 13.41a1 1 0 0 0 1.41 0l2.59-2.59a1 1 0 1 0-1.41-1.41l-2.59 2.59a1 1 0 0 0 0 1.41Zm-4.95 4.95a5 5 0 0 1 0-7.07l2.12-2.12a1 1 0 1 1 1.41 1.41l-2.12 2.12a3 3 0 0 0 4.24 4.24l2.12-2.12a1 1 0 1 1 1.41 1.41l-2.12 2.12a5 5 0 0 1-7.07 0Zm12.72-12.72a5 5 0 0 1 0 7.07l-2.12 2.12a1 1 0 0 1-1.41-1.41l2.12-2.12a3 3 0 0 0-4.24-4.24l-2.12 2.12a1 1 0 1 1-1.41-1.41l2.12-2.12a5 5 0 0 1 7.07 0Z" />
  </svg>
)

export default LinkIcon
