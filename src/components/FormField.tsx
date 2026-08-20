interface FormFieldProps {
    id: string
    label: string
    type?: 'text' | 'email' | 'tel' | 'date'
    placeholder?: string
    required?: boolean
}

const FormField = ({
                       id,
                       label,
                       type = 'text',
                       placeholder,
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
                    <span className="ml-1 text-blue-600">
                        *
                    </span>
                )}
            </label>

            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                required={required}
                className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
        </div>
    )
}

export default FormField