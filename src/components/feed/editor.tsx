import { Editor as NovelEditor } from 'novel';
import { EditorProps } from '@/types/feed';
import { JSONContent } from '@tiptap/react';

const InteractiveEditor=({ editMode, defaultContent, setValue, title }: EditorProps) => {

  return (
    <div>
      <h3 className="text-sm font-medium p-3 mt-4">
        {title}
      </h3>
      <NovelEditor
        className="relative min-h-[500px] w-full border-stone-200 mb-4 sm:rounded-lg sm:border sm:shadow-lg"
        onUpdate={(editor) => {
          setValue(editor!.getJSON());
        }}
        onDebouncedUpdate={(editor) => {
          setValue(editor!.getJSON());
        }}
        defaultValue={defaultContent as JSONContent}
        editorProps={
          { editable: () => editMode }
        }
      />
    </div>
  );
}

export default InteractiveEditor;