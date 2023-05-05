import {
  FieldTextProps,
  DurationFieldProps,
  NumberFieldProps,
  SelectFieldProps,
} from "./InputField.types";

export const renderTextField = ({
  input,
  required,
  type,
  label,
  meta: { touched, error },
}: FieldTextProps) => (
  <div className="input-field">
    <label>{label}</label>
    <div>
      <input {...input} required={required} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
export const renderDurationField = ({
  input,
  required,
  type,
  label,
  meta: { touched, error },
}: DurationFieldProps) => (
  <div className="input-field">
    <label>{label}</label>
    <div>
      <input
        {...input}
        required={required}
        type={type}
        pattern="^[0-9]{2}:[0-9]{2}:[0-9]{2}$"
        placeholder="HH:MM:SS"
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
export const renderSelectField = ({
  input,
  label,
  required,
  meta: { touched, error },
  children,
}: SelectFieldProps) => (
  <div className="input-field">
    <label>{label}</label>
    <div>
      <select {...input} required={required}>
        {children}
      </select>
      {touched && error && <span>{error}</span>}
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
  meta: { touched, error },
}: NumberFieldProps) => (
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
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
