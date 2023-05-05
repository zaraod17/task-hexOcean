import { InputFieldProps } from "./InputField.types";

export const renderTextField = ({
  input,
  required,
  type,
  label,
  error,
}: InputFieldProps) => (
  <div className="input-field">
    <label>{label}</label>
    <div>
      <input {...input} required={required} type={type} />
      {error && <span>{error}</span>}
    </div>
  </div>
);
export const renderDurationField = ({
  input,
  required,
  maxLength,
  type,
  label,
  error,
}: InputFieldProps) => (
  <div className="input-field">
    <label>{label}</label>
    <div>
      <input
        {...input}
        required={required}
        maxLength={maxLength}
        type={type}
        pattern="^[0-9]{2}:[0-9]{2}:[0-9]{2}$"
        placeholder="HH:MM:SS"
      />
      {error && <span>{error}</span>}
    </div>
  </div>
);
export const renderSelectField = ({
  input,
  label,
  required,
  error,
  children,
}: InputFieldProps) => (
  <div className="input-field">
    <label>{label}</label>
    <div>
      <select {...input} required={required}>
        {children}
      </select>
      {error && <span>{error}</span>}
    </div>
  </div>
);
export const renderNumberField = ({
  input,
  step,
  max,
  min,
  label,
  type,
  required,
  error,
}: InputFieldProps) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <div>
        <input
          {...input}
          type={type}
          step={step}
          max={max}
          min={min}
          required={required}
        />
        {error && <span>{error}</span>}
      </div>
    </div>
  );
};
