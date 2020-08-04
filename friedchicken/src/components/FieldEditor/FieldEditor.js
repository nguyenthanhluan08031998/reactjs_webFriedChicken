import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorTools } from '@progress/kendo-react-editor';

const {
    Bold, Italic, Underline, Strikethrough, Subscript, Superscript,
    AlignLeft, AlignCenter, AlignRight, AlignJustify,
    Indent, Outdent, OrderedList, UnorderedList,
    Undo, Redo, FontSize, FontName, FormatBlock,
    Link, Unlink, InsertImage, ViewHtml,
} = EditorTools;

function FieldEditor() {
    return (
        <Editor
            tools={[
                [Bold, Italic, Underline, Strikethrough],
                [Subscript, Superscript],
                [AlignLeft, AlignCenter, AlignRight, AlignJustify],
                [Indent, Outdent],
                [OrderedList, UnorderedList],
                FontSize, FontName, FormatBlock,
                [Undo, Redo],
                [Link, Unlink, InsertImage, ViewHtml],

            ]}
            contentStyle={{ height: 200 }}
        />
    );
}
export default FieldEditor;