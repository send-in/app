interface IconProps {
  size?: number
  fill?: string
}

const BulletsIcon = ({ 
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
    <path d="M7 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H8ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
  </svg>
)

export default BulletsIcon
