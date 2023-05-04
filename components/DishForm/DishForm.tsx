import React, { useState } from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { FormProps } from "./DishForm.types";

import { FormWrapper, StyledButton } from "./DishForm.styled";

interface Props extends InjectedFormProps<FormProps> {}

const DishForm: React.FC<Props> = ({ handleSubmit }) => {
  const [selectedMeal, setSeletecMeal] = useState<string | null>();

  const onSubmit = (values: FormProps) => {
    console.log(values);
  };

  const handleOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSeletecMeal(event.target.value);
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Dish name</label>
          <Field name="name" component="input" required></Field>
        </div>
        <div>
          <label htmlFor="preparation_time">Preparation time (hh:mm:ss)</label>
          <Field
            name="preparation_time"
            component="input"
            type="time"
            step={1}
            required
          ></Field>
        </div>
        <div>
          <label htmlFor="Type">Dish type</label>
          <Field
            name="type"
            component="select"
            onChange={handleOption}
            required
          >
            <option value="">-</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="sandwich">Sandwich</option>
          </Field>
        </div>
        {selectedMeal === "pizza" && (
          <>
            <label htmlFor="no_of_slices">Number of slices</label>
            <Field
              name="no_of_slices"
              component="input"
              type="number"
              min={0}
              required
            ></Field>
            <label htmlFor="diameter">Diameter</label>
            <Field
              name="diameter"
              component="input"
              type="number"
              step={0.01}
              min={0}
              label="Diameter"
              required
            />
          </>
        )}
        {selectedMeal === "soup" && (
          <div>
            <label htmlFor="spiciness_scale">Spiciness scale (1-10)</label>
            <Field name="spiciness_scale" component="input" type="" required />
          </div>
        )}
        {selectedMeal === "sandwich" && (
          <div>
            <label htmlFor="slices_of_bread">Slices of bread</label>
            <Field
              name="slices_of_bread"
              type="number"
              min={0}
              component="input"
              required
            />
          </div>
        )}
        <StyledButton>Submit</StyledButton>
      </form>
    </FormWrapper>
  );
};

export default reduxForm<FormProps>({
  form: "myForm",
})(DishForm);
