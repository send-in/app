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
	Undo,
	Redo,
	Bullets,
	Numbers,
} from "@/Icons"
// #endregion

// #region --- Unicode Transformers ---
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

// #endregion

const EMOJI_OPTIONS = [
	"😊", "😂", "❤️", "👍", "👏", "🎉", "🔥", "💪", "🙏", "✅", 
	"🚀", "💡", "⭐", "👑", "🎯", "💯", "🤝", "💼", "📈", "🏆"
]

const Editor = () => {
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
		<section 
			className="w-full rounded-lg border border-gray-200 bg-white shadow-sm font-sans relative"
		>
			
			<aside className="flex items-center gap-1 bg-gray-50 px-3 py-2 border-b border-gray-200 rounded-t-lg">
				{/* Text Formatting */}
				<button
					onClick={() => {
						toggleFormat('bold')
						const selection = window.getSelection()
						if (selection && selection.toString()) {
							applyToSelection(toBold)
						}
					}}
					className={`p-2 rounded hover:bg-gray-200 transition-colors ${
						activeFormats.bold ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
					}`}
					title="Bold"
				>
					<Bold/>
				</button>
				
				<button
					onClick={() => {
						toggleFormat('italic')
						const selection = window.getSelection()
						if (selection && selection.toString()) {
							applyToSelection(toItalic)
						}
					}}
					className={`p-2 rounded hover:bg-gray-200 transition-colors ${
						activeFormats.italic ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
					}`}
					title="Italic"
				>
					<Italic/>
				</button>
				
				<button
					onClick={() => {
						toggleFormat('underline')
						const selection = window.getSelection()
						if (selection && selection.toString()) {
							applyToSelection(toUnderline)
						}
					}}
					className={`p-2 rounded hover:bg-gray-200 transition-colors ${
						activeFormats.underline ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
					}`}
					title="Underline"
				>
					<Underline/>
				</button>
				
				<button
					onClick={() => {
						toggleFormat('strike')
						const selection = window.getSelection()
						if (selection && selection.toString()) {
							applyToSelection(toStrike)
						}
					}}
					className={`p-2 rounded hover:bg-gray-200 transition-colors ${
						activeFormats.strike ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
					}`}
					title="Strikethrough"
				>
					<Strike/>
				</button>

				<div className="w-px h-6 bg-gray-300 mx-1" />

				<div className="relative">
					<button
						onClick={() => setShowEmojis(!showEmojis)}
						className="p-2 rounded hover:bg-gray-200 transition-colors text-gray-600"
						title="Insert Emoji"
					>
						<Emoji/>
					</button>
					
					{showEmojis && (
						<div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-2 grid grid-cols-5 gap-1 w-48">
							{EMOJI_OPTIONS.map((emoji, index) => (
								<button
									key={index}
									onClick={() => insertEmoji(emoji)}
									className="p-2 hover:bg-gray-100 rounded text-lg"
									title={emoji}
								>
									{emoji}
								</button>
							))}
						</div>
					)}
				</div>

				<button
					onClick={handleLinkInsert}
					className="p-2 rounded hover:bg-gray-200 transition-colors text-gray-600"
					title="Insert Link"
				>
					<Link/>
				</button>

				<div className="w-px h-6 bg-gray-300 mx-1" />

				{/* Undo/Redo */}
				<button
					onClick={handleUndo}
					disabled={historyIndex <= 0}
					className="p-2 rounded hover:bg-gray-200 transition-colors text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
					title="Undo"
				>
					<Undo/>
				</button>
				
				<button
					onClick={handleRedo}
					disabled={historyIndex >= history.length - 1}
					className="p-2 rounded hover:bg-gray-200 transition-colors text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
					title="Redo"
				>
					<Redo/>
				</button>

				<div className="w-px h-6 bg-gray-300 mx-1" />

				{/* Lists */}
				<button
					onClick={startBulletList}
					className={`p-2 rounded hover:bg-gray-200 transition-colors ${
						listType === 'bullet' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
					}`}
					title="Bullet List"
				>
					<Bullets/>
				</button>
				
				<button
					onClick={startNumberList}
					className={`p-2 rounded hover:bg-gray-200 transition-colors ${
						listType === 'number' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
					}`}
					title="Numbered List"
				>
					<Numbers/>
				</button>
			</aside>
					
			<aside
				ref={editorRef}
				contentEditable
				suppressContentEditableWarning
				onKeyDown={handleKeyDown}
				onInput={saveToHistory}
				className="min-h-[200px] p-4 text-[15px] leading-relaxed outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-b-lg"
				data-placeholder="Start typing your message..."
				style={{ 
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				}}
			/>

			{showEmojis && (
				<div 
					className="fixed inset-0 z-40" 
					onClick={
						() => setShowEmojis(false)
					}
				/>
			)}
		</section>
	)
}

export default Editor