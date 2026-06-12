"use client"

// #region imports
import { useEffect, useState } from "react"

import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { ListPlugin } from "@lexical/react/LexicalListPlugin"
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"

import {
	$getRoot,
	$createParagraphNode,
	$createTextNode,
	EditorState,
} from "lexical"
// #endregion

interface IProps {
    onChange?: (
        value: string
	) => void
	className?: string
    initialValue?: string
}

export const LexicalEditor = ({
    onChange,
	className,
	initialValue,
}: IProps) => {
	const [editor] = useLexicalComposerContext()

    useEffect(() => {
        if (!initialValue) return

        try {
            const editorState =
                editor.parseEditorState(initialValue)
            editor.setEditorState(editorState)
        } catch {
            editor.update(() => {
                const root = $getRoot()
                root.clear()
                const paragraph = $createParagraphNode()
                paragraph.append(
                    $createTextNode(initialValue),
                )
                root.append(paragraph)
            })
        }
    }, [
        editor,
        initialValue,
    ])

	return (
		<section className="
            h-full group overflow-clip min-h-0
        ">
			<RichTextPlugin
				contentEditable={
					<ContentEditable
						className={`
							bg-grey-100 text-grey-200
                            border-2 border-white

                            group-focus-within:bg-white
                            group-focus-within:text-black
                            group-focus-within:border-blue-100

                            rounded-2xl overflow-y-auto 
                            w-full h-full min-h-0

                            p-4 pt-20
                            desktop:pt-24

                            text-base
                            desktop:text-xl

                            leading-relaxed
                            outline-none
                            whitespace-pre-wrap
                            smooth

							${className ?? ""}
						`}
					/>
				}
				placeholder={
					<p
						className="
							absolute top-20
							left-4 pl-1.5 pt-1
							pointer-events-none
						"
					>
						Write your message...
					</p>
				}
				ErrorBoundary={
					({ children }) => children
				}
			/>

            <ListPlugin />
			<HistoryPlugin />
			<OnChangePlugin
                onChange={(
                    editorState: EditorState,
                ) => {
                    onChange?.(
                        JSON.stringify(
                            editorState.toJSON(),
                        ),
                    )
                }}
            />
		</section>
	)
}