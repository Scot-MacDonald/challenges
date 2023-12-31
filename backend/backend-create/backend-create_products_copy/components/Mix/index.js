import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import Comments from "../Comments";
import { StyledLink } from "../Link/Link.styled";

export default function Mix() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/mixes/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.title}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.date} {data.url}
      </p>
      {/* {data.reviews.length > 0 && <Comments reviews={data.reviews} />} */}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
