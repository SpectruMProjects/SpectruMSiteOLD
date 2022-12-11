import { TextInputProps } from "./TextInput.props";

export function TextField({
  value,
  setValue,
  className,
  type,
  error,
  label,
}: TextInputProps): JSX.Element {
  return (
    <div>
      <div className={error ? "text-red" : ""}>{error ?? label}</div>
      <input
        className={
          (className ?? "") +
          " mt-2 px-6 py-4 bg-mantle rounded-lg outline-none"
        }
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type ?? "text"}
      />
    </div>
  );
}
