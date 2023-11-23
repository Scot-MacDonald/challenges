import MixList from "../components/MixList";
import styled from "styled-components";
import MixForm from "../components/MixForm";

const Heading = styled.h1`
  text-align: center;
  color: black;
`;

export default function HomePage() {
  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish"></span>
        Mixes
      </Heading>
      <MixForm />
      <hr />
      <MixList />
    </>
  );
}
