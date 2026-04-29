"use client";

type DateInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
};

export default function DateInput({ id, label, value, onChange, required }: DateInputProps) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-gray-700" htmlFor={id}>
      {label}
      <input
        id={id}
        type="date"
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none ring-teal-200 transition focus:ring-2"
      />
    </label>
  );
}
