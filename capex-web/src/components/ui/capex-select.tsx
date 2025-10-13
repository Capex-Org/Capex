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
}

function CustomSelect({
  label,
  required = false,
  containerClassName,
  className,
  id,
  options,
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
      <Select id={selectId} className={cn(className)} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
}

export { CustomSelect };
