"use client"

// #region imports
import { 
	useRef, 
	useState 
} from "react"

import {
	Bold,
	Italic,
	Underline,
	Strike,
	Emoji,
	Link,
	Bullets,
	Numbers,
	Copy,
} from "@/Icons"

import { 
	IconButton,
	TextField,
} from "@mui/material"
// #endregion

const toBold = (text: string) =>
	text.replace(/[A-Za-z0-9]/g, (c) => {
		const code = c.charCodeAt(0)
		if (c >= '0' && c <= '9') return String.fromCodePoint(0x1d7ce + (code - 0x30))
		return String.fromCodePoint(code + (c <= "Z" ? 0x1d5d4 - 0x41 : 0x1d5ee - 0x61))
	})

const toItalic = (text: string) =>
	text.replace(/[A-Za-z]/g, (c) =>
		String.fromCodePoint(c.charCodeAt(0) + (c <= "Z" ? 0x1d608 - 0x41 : 0x1d622 - 0x61))
	)

const toUnderline = (text: string) => 
	text.split("").map((c) => c + "\u0332").join("")

const toStrike = (text: string) => 
	text.split("").map((c) => c + "\u0336").join("")

const EMOJI_OPTIONS = [
	"😊", "😂", "❤️", "👍", "👏", "🎉", "🔥", "💪", "🙏", "✅", 
	"🚀", "💡", "⭐", "👑", "🎯", "💯", "🤝", "💼", "📈", "🏆"
]

const buttonClass = `
	bg-grey-100 rounded-md w-10 h-8
`

const Editor = ({
	noTemplate = false
}:{
	noTemplate: boolean
}) => {
	const editorRef = useRef<HTMLDivElement>(null)

	const [activeFormats, setActiveFormats] = useState({
		bold: false,
		italic: false,
		underline: false,
		strike: false,
	})

	const [showEmojis, setShowEmojis] = useState(false)
	const [history, setHistory] = useState<string[]>([""])
	const [historyIndex, setHistoryIndex] = useState(0)
	const [listCounter, setListCounter] = useState(1)

	const [listType, setListType] = useState<
		"none" | 
		"bullet" | 
		"number"
	>("none")
	
	const transformers = {
		bold: toBold,
		italic: toItalic,
		underline: toUnderline,
		strike: toStrike,
	}

	const toggleFormat = (
		format: keyof typeof activeFormats
	) => {
		setActiveFormats(prev => ({
			...prev,
			[format]: !prev[format]
		}))
	}

	const applyToSelection = (
		transform: (t: string) => string
	) => {
		const selection = window.getSelection()

		if (!selection || selection.rangeCount === 0) 
			return

		const range = selection.getRangeAt(0)
		const selectedText = range.toString()
		if (!selectedText) 
			return

		const transformed = transform(selectedText)
		range.deleteContents()
		range.insertNode(
			document.createTextNode(transformed)
		)
		
		saveToHistory()
	}

	const insertAtCursor = (
		text: string
	) => {
		const selection = window.getSelection()

		if (!selection || selection.rangeCount === 0) {
			if (editorRef.current) {
				editorRef.current.focus()
				const range = document.createRange()
				range.selectNodeContents(editorRef.current)
				range.collapse(false)
				selection?.removeAllRanges()
				selection?.addRange(range)
				range.insertNode(document.createTextNode(text))
			}
			return
		}

		const range = selection.getRangeAt(0)
		range.deleteContents()
		range.insertNode(document.createTextNode(text))
		
		range.setStartAfter(range.endContainer)
		range.collapse(true)
		selection.removeAllRanges()
		selection.addRange(range)

		saveToHistory()
	}

	const handleKeyDown = (
		e: React.KeyboardEvent
	) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			
			if (listType === "bullet")
				insertAtCursor("\n• ")
			else if (listType === "number") {
				insertAtCursor(`\n${listCounter + 1}. `)
				setListCounter(prev => prev + 1)
			} 
			else
				insertAtCursor("\n")
			return
		}

		if (
			e.key.length === 1 && 
			!e.ctrlKey && 
			!e.metaKey
		) {
			let transformedChar = e.key
			
			Object.entries(activeFormats).forEach(
				([format, isActive]) => {
					if (isActive) {
						transformedChar = transformers[format as keyof typeof transformers](transformedChar)
					}
			})

			if (transformedChar !== e.key) {
				e.preventDefault()
				insertAtCursor(transformedChar)
			}
		}
	}

	const saveToHistory = () => {
		if (editorRef.current) {
			const content = editorRef.current.innerText
			setHistory(prev => [...prev.slice(0, historyIndex + 1), content])
			setHistoryIndex(prev => prev + 1)
		}
	}

	const handleUndo = () => {
		if (historyIndex > 0) {
			setHistoryIndex(prev => prev - 1)
			if (editorRef.current) {
				editorRef.current.innerText = history[historyIndex - 1]
			}
		}
	}

	const handleRedo = () => {
		if (historyIndex < history.length - 1) {
			setHistoryIndex(prev => prev + 1)
			if (editorRef.current) {
				editorRef.current.innerText = history[historyIndex + 1]
			}
		}
	}

	const startBulletList = () => {
		setListType("bullet")
		insertAtCursor("• ")
	}

	const startNumberList = () => {
		setListType("number")
		setListCounter(1)
		insertAtCursor("1. ")
	}

	const insertEmoji = (emoji: string) => {
		insertAtCursor(emoji)
		setShowEmojis(false)
	}

	const handleLinkInsert = () => {
		const url = prompt("Enter URL:")
		if (url) {
			insertAtCursor(url)
		}
	}

	return (
		<>
			{
				!noTemplate && 
				<section
					className="
						flex items-center w-full p-2 px-6 bg-grey-100 
						rounded-xl mb-5 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-inset
						transition-all ease-in-out delay-100 cursor-pointer
					"
				>
					<TextField
						variant="standard"
						placeholder="Appreciation & Connection"
						fullWidth
						slotProps={{
							input:{
								disableUnderline: true,
								className: "font-mada tracking-tight"
							}
						}}
					/>
				</section>

			}

			<section 
				className="
					w-full rounded-2xl group
					bg-white font-sans relative
				"
			>
				
				<aside 
					className="
						flex items-center gap-2 bg-white w-fit
						px-3 py-2 absolute top-4 left-4 rounded-xl
					"
				>
					<IconButton
						className={buttonClass}
						onClick={() => {
							toggleFormat('bold')
							const selection = window.getSelection()
							if (selection && selection.toString()) {
								applyToSelection(toBold)
							}
						}}
						title="Bold"
					>
						<Bold/>
					</IconButton>
					
					<IconButton
						className={buttonClass}
						onClick={() => {
							toggleFormat('italic')
							const selection = window.getSelection()
							if (selection && selection.toString())
								applyToSelection(toItalic)
						}}
						title="Italic"
					>
						<Italic/>
					</IconButton>
					
					<IconButton
						className={buttonClass}
						onClick={() => {
							toggleFormat('underline')
							const selection = window.getSelection()
							if (selection && selection.toString()) {
								applyToSelection(toUnderline)
							}
						}}
						title="Underline"
					>
						<Underline/>
					</IconButton>
					
					<IconButton
						className={buttonClass}
						onClick={() => {
							toggleFormat('strike')
							const selection = window.getSelection()
							if (selection && selection.toString()) {
								applyToSelection(toStrike)
							}
						}}
						title="Strikethrough"
					>
						<Strike/>
					</IconButton>

					<div className="w-[1.5px] h-6 bg-grey-200 mx-2 rounded-full" />

					<div className="relative">
						<IconButton
							className={buttonClass}
							onClick={() => setShowEmojis(!showEmojis)}
							title="Insert Emoji"
						>
							<Emoji/>
						</IconButton>
						
						{showEmojis && (
							<div 
								className="
									absolute top-full left-0 mt-1 bg-white border 
									border-grey-200 rounded-lg shadow-lg z-50 p-2 
									grid grid-cols-5 gap-1 w-48
								"
							>
								{EMOJI_OPTIONS.map((emoji, index) => (
									<IconButton
										key={index}
										onClick={() => insertEmoji(emoji)}
										title={emoji}
										size="small"
										className="text-black"
									>
										{emoji}
									</IconButton>
								))}
							</div>
						)}
					</div>

					<IconButton
						className={buttonClass}
						onClick={handleLinkInsert}
						// className="p-2 rounded hover:bg-grey-200 transition-colors text-grey-600"
						title="Insert Link"
					>
						<Link/>
					</IconButton>

					<div className="w-[1.5px] h-6 bg-grey-200 mx-2 rounded-full" />

					<IconButton
						className={buttonClass}
						onClick={startBulletList}
						title="Bullet List"
					>
						<Bullets/>
					</IconButton>

					<IconButton
						className={buttonClass} 
						onClick={startNumberList}
						title="Numbered List"
						size="medium"
					>
						<Numbers/>
					</IconButton>
				</aside>
						
				<aside
					ref={editorRef}
					contentEditable
					suppressContentEditableWarning
					onKeyDown={handleKeyDown}
					onInput={saveToHistory}
					className="
						bg-grey-100 rounded-2xl tracking-tight text-grey-200
						focus:text-charcoal-100 w-full peer
						min-h-[60vh] p-4 pt-20 text-base leading-relaxed outline-none 
						focus:ring-2 focus:ring-blue-500 focus:ring-inset
						transition-all ease-in-out delay-100 cursor-pointer
					"
					data-placeholder="Hi {{username}}, I really admire the work you’re doing at {{company}}. I’d love to connect and stay updated on your journey!"
					style={{ 
						whiteSpace: 'pre-wrap',
						wordWrap: 'break-word'
					}}
				/>

				{showEmojis && (
					<div
						onClick={
							() => setShowEmojis(false)
						}
					/>
				)}

				<IconButton
					className="
						bg-blue-100 rounded-full p-3
						flex items-center justify-center
						absolute bottom-5 right-5
					"
					onClick={startNumberList}
					title="Copy"
					size="medium"
				>
					<Copy/>
				</IconButton>
			</section>
		</>
	)
}

export default Editor