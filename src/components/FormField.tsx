interface FormFieldProps {
    id: string
    name: string

    label: string

    type?: string
    placeholder?: string

    value: string

    onChange: (
        event: React.ChangeEvent<HTMLInputElement>
    ) => void

    required?: boolean
}

const FormField = ({
                       id,
                       name,
                       label,
                       type = 'text',
                       placeholder,
                       value,
                       onChange,
                       required = false,
                   }: FormFieldProps) => {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={id}
                className="text-sm font-medium text-slate-700"
            >
                {label}

                {required && (
                    <span className="ml-1 text-[var(--color-primary)]">
                        *
                    </span>
                )}
            </label>

            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="
                    h-11 rounded-xl
                    border border-slate-200
                    bg-white px-4
                    text-sm text-slate-900
                    outline-none
                    transition-all
                    focus:border-[var(--color-primary)]
                    focus:ring-4
                    focus:ring-[var(--color-primary)]/10
                "
            />
        </div>
    )
}

export default FormField