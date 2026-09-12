import type { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import Icon from "@/components/ui/Icon";

const fieldBase =
  "h-11 w-full rounded-(--radius-sm) border bg-white px-3.5 text-sm text-(--color-heading) outline-none transition-colors focus:border-(--color-navy-light)";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-semibold text-red-600">
      {message}
    </p>
  );
}

export function TextField({
  id,
  label,
  error,
  className = "",
  ...rest
}: {
  id: string;
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-(--color-heading)">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`${fieldBase} ${error ? "border-red-500" : "border-(--color-border)"} ${className}`}
        {...rest}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

export function SelectField({
  id,
  label,
  error,
  options,
  placeholder,
  className = "",
  ...rest
}: {
  id: string;
  label: string;
  error?: string;
  options: readonly string[];
  placeholder?: string;
} & SelectHTMLAttributes<HTMLSelectElement>) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-(--color-heading)">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${fieldBase} appearance-none pr-9 ${error ? "border-red-500" : "border-(--color-border)"} ${className}`}
          {...rest}
        >
          <option value="" disabled hidden>
            {placeholder ?? "Select an option"}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <Icon
          name="chevron-down"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--color-muted)"
        />
      </div>
      <FieldError id={errorId} message={error} />
    </div>
  );
}
