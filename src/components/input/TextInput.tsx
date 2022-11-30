type TextFieldProps = {
  value: string,
  label?: string,
  onChange: (newValue: string) => void,
  className?: string,
  type?: 'text' | 'password',
  error?: string
}

export default function TextField({
  value, onChange, className, 
  type, error, label}: TextFieldProps
) {
  return (
    <div>
      <div className={error ? 'text-red' : ''}>
        {error ?? label}
      </div>
      <input
        className={(className ?? '') + " mt-2 px-6 py-4 bg-mantle rounded-lg outline-none"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type ?? 'text'}
      />
    </div>
  )
}
