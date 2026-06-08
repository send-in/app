"use client"

// #region imports
import {
	TextField,
	IconButton,
} from "@/base"

import {
    ListNode,
    ListItemNode,
} from "@lexical/list"
import { 
    LexicalComposer 
} from "@lexical/react/LexicalComposer"

import { Copy } from "@/icons"

import { LexicalEditor } from "./LexicalEditor"
import { LexicalToolbar } from "./LexicalToolbar"
// #endregion


const config = {
	namespace: "SendInEditor",
	theme: {
		text: {
			bold: "font-bold",
			italic: "italic",
			underline: "underline",
			strikethrough: "line-through",
		},
        list: {
            ul: "list-disc ml-6",
            ol: "list-decimal ml-6",
            listitem: "ml-2",
        },
	},
	onError: console.error,
	nodes: [
		ListNode,
		ListItemNode
	],
}

interface IEditor {
	noTemplate?: boolean
	noCopy?: boolean

	title?: string
	initialValue?: string

	onValueChange?: (
		value: string,
	) => void

	onTitleChange?: (
		value: string,
	) => void
}

export const Editor = ({
	noTemplate = false,
	noCopy = false,

	title = "Dummy Template",
	initialValue = "",

	onValueChange,
	onTitleChange,
}: IEditor) => {
	return (
		<div className="
            flex flex-col
            h-full desktop:h-2/3
            gap-4 overflow-hidden
        ">
			{
				!noTemplate &&
				<TextField
					fullWidth
					value={title}
					variant="filled"
					onChange={(e) =>
						onTitleChange?.(
							e.target.value,
						)
					}
					className="
						!rounded-xl !text-lg
						desktop:!text-xl py-3
					"
					slotProps={{
						input: {
							className:
								"focus:text-black!",
						},
					}}
				/>
			}

			<section
				className="
					w-full h-full
					rounded-2xl
					bg-white
					relative
		            min-h-0
				"
			>
				<LexicalComposer
                    initialConfig={config}
                >
                    <LexicalToolbar />

                    <LexicalEditor
                        initialValue={initialValue}
                        onChange={onValueChange}
                    />
                </LexicalComposer>

				{
					!noCopy &&
					<IconButton
						className="
							bg-blue-100
							rounded-full
							p-3
							flex items-center
							justify-center
							absolute
							bottom-5
							right-5
							z-20
						"
						title="Copy"
						onClick={() =>
							navigator
								.clipboard
								.writeText(initialValue)
						}
					>
						<Copy />
					</IconButton>
				}
			</section>
		</div>
	)
}