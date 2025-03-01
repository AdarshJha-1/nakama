'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from "@tiptap/extension-placeholder";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false
      }),
      Placeholder.configure({
        placeholder: "What's up watcher"
      })
    ],

    immediatelyRender: false
  })

  return <div className="w-full max-w-[500px]">
    <EditorContent
    className={"max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-5 py-3"}
    editor={editor}
  />
  </div>
}

export default Tiptap
