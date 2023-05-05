import React, { ReactNode } from "react";
import { WrappedFieldProps } from "redux-form";

export interface DishNameFieldProps extends WrappedFieldProps {
  label: string;
  type: string;
  children?: ReactNode;
}

export interface FieldTextProps extends DishNameFieldProps {
  required: boolean;
}

export interface DurationFieldProps extends DishNameFieldProps {
  required?: boolean;
}

export interface SelectFieldProps extends DishNameFieldProps {
  required?: boolean;
}

export interface NumberFieldProps extends DishNameFieldProps {
  min?: number;
  max?: number;
  required?: boolean;
  step: number;
}
