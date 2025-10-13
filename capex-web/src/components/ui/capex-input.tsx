import * as React from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";

interface CustomInputProps extends React.ComponentProps<"input"> {
  label: string;
  required?: boolean;
  containerClassName?: string;
}

function CustomInput({
  label,
  required = false,
  containerClassName,
  className,
  id,
  ...props
}: CustomInputProps) {
  const inputId =
    id || `custom-input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={cn("flex flex-col", containerClassName)}>
      <label
        htmlFor={inputId}
        className="text-xs text-gray-500 mb-1 font-medium"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <Input id={inputId} className={cn(className)} {...props} />
    </div>
  );
}

export { CustomInput };
