import { FormInputField } from '@/types/feed';

export const FormInputFieldComponent=({ value, setValue, title, palceholder }: FormInputField) => {

  return (
    <div className="relative rounded-md">
      <h3 className="text-sm font-medium p-3">
        {title}
      </h3>
      <input
        type="text"
        className="w-full rounded-md p-3 ring-1 ring-gray-200 dark:ring-white focus:outline-none"
        placeholder={palceholder}
        value={value as string}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}