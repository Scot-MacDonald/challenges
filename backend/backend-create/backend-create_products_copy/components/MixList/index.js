import useSWR from "swr";
import { StyledHeading, StyledList } from "./ProductList.styled";
import { StyledLink } from "../Link/Link.styled";
import Image from "next/image";

export default function MixList() {
  const { data, isLoading } = useSWR("/api/mixes");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledHeading>Mixes</StyledHeading>
      <StyledList>
        {data.map((mix) => (
          <li key={mix._id}>
            <StyledLink href={`/${mix._id}`}>
              {mix.title},{mix.description}
              <Image
                src={mix.cover}
                alt="Mix Cover"
                width={300} // Set the desired width
                height={220} // Set the desired height
              />
            </StyledLink>
          </li>
        ))}
      </StyledList>
    </>
  );
}
