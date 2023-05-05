import React, { ReactNode } from "react";
import { WrappedFieldProps } from "redux-form";
export interface InputFieldProps extends WrappedFieldProps {
  label: string;
  type: string;
  error?: string;
  required?: boolean;
  children?: ReactNode;
  min?: number;
  max?: number;
  step: number;
  maxLength?: number;
}
