interface IconProps {
  size?: number
  fill?: string
}

const EmojiIcon = ({ 
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
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-3.5-7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 17a5.48 5.48 0 0 1-4.8-2.67 1 1 0 0 1 1.7-1.06A3.48 3.48 0 0 0 12 15a3.48 3.48 0 0 0 3.1-1.73 1 1 0 0 1 1.7 1.06A5.48 5.48 0 0 1 12 17Z" />
  </svg>
)

export default EmojiIcon