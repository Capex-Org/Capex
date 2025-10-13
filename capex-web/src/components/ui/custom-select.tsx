import * as React from "react";
import { Select } from "./select";
import { cn } from "@/lib/utils";

interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps
  extends Omit<React.ComponentProps<"select">, "children"> {
  label: string;
  required?: boolean;
  containerClassName?: string;
  options: SelectOption[];
  placeholder?: string;
}

function CustomSelect({
  label,
  required = false,
  containerClassName,
  className,
  id,
  options,
  placeholder,
  ...props
}: CustomSelectProps) {
  const selectId =
    id || `custom-select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={cn("flex flex-col", containerClassName)}>
      <label
        htmlFor={selectId}
        className="text-xs text-gray-500 mb-1 font-medium"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <Select id={selectId} className={cn("pr-10", className)} {...props}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export { CustomSelect };
