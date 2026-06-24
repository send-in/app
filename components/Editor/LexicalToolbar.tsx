"use client"

// #region imports
import { useState } from "react"

import {
	useLexicalComposerContext,
} from "@lexical/react/LexicalComposerContext"

import { 
    UNDO_COMMAND,
	REDO_COMMAND,
    FORMAT_TEXT_COMMAND,
    $getSelection,
	$isRangeSelection,
	$createTextNode,
} from "lexical"

import {
	INSERT_UNORDERED_LIST_COMMAND,
	INSERT_ORDERED_LIST_COMMAND,
} from "@lexical/list"

import { IconButton } from "@/base"

import {
	Bold,
	Italic,
	Underline,
	Strike,
	Emoji,
	Bullets,
	Numbers,
    Redo,
    Undo,
} from "@/icons"
// #endregion

const buttonClass = `
    smooth [&>svg]:fill-charcoal-100!
    hover:bg-bluewash!
    hover:scale-105 active:scale-95
    data-[active=true]:bg-blue-100
    data-[active=true]:[&>svg]:fill-white!
    data-[active=true]:hover:bg-blue-100!
`

const EMOJI_OPTIONS = [
    "😊",
	"🦶🏻",
	"😂",
	"❤️",
	"👍",
	"👏",
	"🎉",
	"🔥",
	"💪",
	"🙏",
	"✅",
	"🚀",
	"💡",
	"⭐",
	"🎯",
	"💯",
	"🤝",
	"💼",
	"📈",
	"🏆",
]

export const LexicalToolbar = () => {
	const [editor] = useLexicalComposerContext()
    const [showEmojis, setShowEmojis] = useState(false)
    const [formats, setFormats] = useState({
        bold: false,
        italic: false,
        underline: false,
        strike: false,
    })
    
	const insertEmoji = (
        emoji: string,
    ) => {
        editor.update(() => {
            const selection =
                $getSelection()

            if (
                $isRangeSelection(
                    selection,
                )
            ) {
                selection.insertNodes([
                    $createTextNode(
                        emoji,
                    ),
                ])
            }
        })

        setShowEmojis(false)
    }

    editor.registerUpdateListener(
        ({ editorState }) => {
            editorState.read(() => {
                const selection = $getSelection()

                if (
                    $isRangeSelection(selection)
                ) {
                    setFormats({
                        bold: selection.hasFormat("bold"),
                        italic: selection.hasFormat("italic"),
                        underline: selection.hasFormat("underline"),
                        strike: selection.hasFormat("strikethrough"),
                    })
                }
            })
        }
    )

	return (
		<aside
			onMouseDown={(e) =>
				e.preventDefault()
			}
			className="
				flex items-center gap-2 bg-white
				w-fit px-3 py-2 absolute
				top-4 left-4 rounded-xl z-20
				desktop:gap-4
				desktop:py-3
				desktop:px-4
			"
		>
			<IconButton
                className={buttonClass}
				variant="neutral"
                data-active={formats.bold}
				onClick={() =>
					editor.dispatchCommand(
						FORMAT_TEXT_COMMAND,
						"bold",
					)
				}
			>
				<Bold />
			</IconButton>

			<IconButton
                className={buttonClass}
				variant="neutral"
                data-active={formats.italic}
				onClick={() =>
					editor.dispatchCommand(
						FORMAT_TEXT_COMMAND,
						"italic",
					)
				}
			>
				<Italic />
			</IconButton>

			<IconButton
                className={buttonClass}
				variant="neutral"
                data-active={formats.underline}
				onClick={() =>
					editor.dispatchCommand(
						FORMAT_TEXT_COMMAND,
						"underline",
					)
				}
			>
				<Underline />
			</IconButton>

			<IconButton
                className={buttonClass}
				variant="neutral"
                data-active={formats.strike}
				onClick={() =>
					editor.dispatchCommand(
						FORMAT_TEXT_COMMAND,
						"strikethrough",
					)
				}
			>
				<Strike />
			</IconButton>

			<div
				className="
					w-[1.5px]
					h-6
					bg-grey-200
				"
			/>

			<div className="relative">
				<IconButton
                    className={buttonClass}
					variant="neutral"
					onClick={() =>
						setShowEmojis(
							!showEmojis,
						)
					}
				>
					<Emoji />
				</IconButton>

				{
					showEmojis &&
					<div
						className="
							absolute top-full left-0
							mt-2 bg-white border
							border-grey-200 rounded-xl
							shadow-lg p-2
							grid grid-cols-5 gap-1
							w-52 z-50
						"
					>
						{
							EMOJI_OPTIONS.map(
								(
									emoji,
								) => (
									<IconButton
										key={emoji}
										size="sm"
										onClick={() =>
											insertEmoji(
												emoji,
											)
										}
									>
										{
											emoji
										}
									</IconButton>
								),
							)
						}
					</div>
				}
			</div>

            <IconButton
                className={buttonClass}
                variant="neutral"
                title="Undo"
                onClick={() =>
                    editor.dispatchCommand(
                        UNDO_COMMAND,
                        undefined,
                    )
                }
            >
                <Undo />
            </IconButton>

            <IconButton
                className={buttonClass}
                variant="neutral"
                title="Redo"
                onClick={() =>
                    editor.dispatchCommand(
                        REDO_COMMAND,
                        undefined,
                    )
                }
            >
                <Redo />
            </IconButton>
            
			<div
				className="
					w-[1.5px]
					h-6 bg-grey-200
				"
			/>

			<IconButton
                className={buttonClass}
				variant="neutral"
				onClick={() =>
					editor.dispatchCommand(
						INSERT_UNORDERED_LIST_COMMAND,
						undefined,
					)
				}
			>
				<Bullets />
			</IconButton>

			<IconButton
                className={buttonClass}
				variant="neutral"
				onClick={() =>
					editor.dispatchCommand(
						INSERT_ORDERED_LIST_COMMAND,
						undefined,
					)
				}
			>
				<Numbers />
			</IconButton>
		</aside>
	)
}