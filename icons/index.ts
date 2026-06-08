import { SVGProps } from "react"

export interface IconProps extends SVGProps<SVGSVGElement> {
	size?: number
}

// #region Individual Icon Components
export { default as Arrow } from "./Arrow"
export { default as Clock } from "./Clock"
export { default as Globe } from "./Globe"
export { default as Google } from "./Google"
export { default as Information } from "./Information"
export { default as Linkedin } from "./Linkedin"
export { default as Logo } from "./Logo"
export { default as Search } from "./Seach"
export { default as Trash } from "./Trash"
export { default as Bold } from "./Bold"
export { default as Italic } from "./Italic"
export { default as Underline } from "./Underline"
export { default as Strike } from "./Strike"
export { default as Emoji } from "./Emoji"
export { default as Link } from "./Link"
export { default as Bullets } from "./Bullets"
export { default as Numbers } from "./Numbers"
export { default as Copy } from "./Copy"
export { default as Chevron } from "./Chevron"
export { default as GoTo } from "./GoTo"
export { default as Undo } from "./Undo"
export { default as Redo } from "./Redo"
export { default as Refresh } from "./Refresh"
// #endregion
