import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";
import useSWR from "swr";

export default function MixForm() {
  const products = useSWR("/api/mixes");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const mixData = Object.fromEntries(formData);

    const response = await fetch("/api/mixes", {
      method: "POST",
      body: JSON.stringify(mixData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
      products.mutate();
      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Add a new Fish</StyledHeading>
      <StyledLabel htmlFor="title">
        Name:
        <input type="text" id="title" name="title" />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input type="text" id="description" name="description" />
      </StyledLabel>
      <StyledLabel htmlFor="date">
        Date:
        <input type="number" id="date" name="date" min="0" />
      </StyledLabel>

      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
