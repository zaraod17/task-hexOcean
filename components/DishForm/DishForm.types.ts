import { InjectedFormProps } from "redux-form";

export interface FormProps {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices?: number;
  diameter?: number;
  spiciness_scale?: number;
  slices_of_bread?: number;
}

export interface Props extends InjectedFormProps<FormProps> {}
