import { useState } from "react";

import { FormWrapper } from "./DishForm.styled";

const MainForm: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}></form>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, vero
        quia delectus illum totam, sed ipsum magnam saepe consequuntur, veniam
        rem sunt! Dicta officiis odio facere accusamus atque pariatur eos?
      </p>
    </FormWrapper>
  );
};

export default MainForm;
