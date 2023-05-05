import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";

import { FormProps, Props } from "./DishForm.types";

import { FormWrapper, StyledButton } from "./DishForm.styled";

import {
  renderTextField,
  renderDurationField,
  renderNumberField,
  renderSelectField,
} from "./InputFields/InputFields";

const DishForm: React.FC<Props> = ({ handleSubmit }) => {
  const [selectedMeal, setSelectedMeal] = useState<string | null>();
  const [errors, setErrors] = useState<{
    [key: string]: string;
  }>({});

  const API_URL =
    "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";

  const onSubmit = async (values: FormProps) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const result = await response.json();

    if (!response.ok) {
      const err: { [key: string]: string[] } = result;
      for (const e in err) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [e]: err[e][0],
        }));
      }
    }
  };

  const handleResetErrors = () => {
    setErrors({});
  };

  const handleMealTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
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
          error={errors.name}
          required
        ></Field>

        <Field
          name="preparation_time"
          component={renderDurationField}
          label={"Preparation time (HH:MM:SS)"}
          type="text"
          error={errors.preparation_time}
          required
          maxLength={8}
        ></Field>

        <Field
          name="type"
          label="Dish type"
          component={renderSelectField}
          onChange={handleMealTypeChange}
          error={errors.type}
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
              error={errors.no_of_slices}
            ></Field>
            <Field
              name="diameter"
              label="Diameter"
              component={renderNumberField}
              type="number"
              step={0.01}
              min={0}
              error={errors.diameter}
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
            type="number"
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
            error={errors.slices_of_bread}
            required={selectedMeal === "sandwich"}
          />
        )}
        <StyledButton onClick={handleResetErrors}>Submit</StyledButton>
      </form>
    </FormWrapper>
  );
};

export default reduxForm<FormProps>({
  form: "myForm",
})(DishForm);
