import React, { useState } from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { FormProps } from "./DishForm.types";

import { FormWrapper, StyledButton } from "./DishForm.styled";

import {
  renderTextField,
  renderDurationField,
  renderNumberField,
  renderSelectField,
} from "./InputFields/InputFields";

interface Props extends InjectedFormProps<FormProps> {}

const DishForm: React.FC<Props> = ({ handleSubmit }) => {
  const [selectedMeal, setSelectedMeal] = useState<string | null>();

  const API_URL =
    "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";

  const onSubmit = async (values: FormProps) => {
    try {
      console.log(values);
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMealTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMeal(event.target.value);
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="name"
          component={renderTextField}
          type="text"
          label={"Dish name"}
          required
        ></Field>

        <Field
          name="preparation_time"
          component={renderDurationField}
          label={"Preparation time"}
          type="text"
          required
        ></Field>

        <Field
          name="type"
          label="Dish type"
          component={renderSelectField}
          onChange={handleMealTypeChange}
          required
        >
          <option value="">-</option>
          <option value="pizza">Pizza</option>
          <option value="soup">Soup</option>
          <option value="sandwich">Sandwich</option>
        </Field>

        {selectedMeal === "pizza" && (
          <>
            <Field
              name="no_of_slices"
              label="Number of slices"
              component={renderNumberField}
              type="number"
              min={0}
              required={selectedMeal === "pizza"}
            ></Field>
            <Field
              name="diameter"
              label="Diameter"
              component={renderNumberField}
              type="text" // should be the number, text to see errors from api
              step={0.01}
              min={0}
              required={selectedMeal === "pizza"}
            />
          </>
        )}
        {selectedMeal === "soup" && (
          <Field
            name="spiciness_scale"
            component={renderNumberField}
            label="Spiciness scale (1-10)"
            min={1}
            max={10}
            required={selectedMeal === "soup"}
          />
        )}
        {selectedMeal === "sandwich" && (
          <Field
            name="slices_of_bread"
            type="number"
            label="Slices of bread"
            min={0}
            component={renderNumberField}
            required={selectedMeal === "sandwich"}
          />
        )}
        <StyledButton>Submit</StyledButton>
      </form>
    </FormWrapper>
  );
};

export default reduxForm<FormProps>({
  form: "myForm",
})(DishForm);
