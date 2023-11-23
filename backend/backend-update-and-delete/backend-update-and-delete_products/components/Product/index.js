import { StyledLink } from "../Link/Link.styled";
import { ProductCard } from "./Product.styled";
import ProductForm from "../ProductForm";
import Comments from "../Comments";
import { StyledButton } from "../Button/Button.styled";

// export default function Product() {
//   const router = useRouter();
//   const { id } = router.query;

//   const { data, isLoading } = useSWR(`/api/products/${id}`);

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   if (!data) {
//     return;
//   }

///////////
export default function Product({
  onHandleDelete,
  onHandleEdit,
  onSubmitComment,
  setIsEditMode,
  isEditMode,
  data,
}) {
  return (
    <>
      {isEditMode && <ProductForm onHandleSubmit={onHandleEdit} update />}
      <ProductCard>
        <h2>{data.name}</h2>
        <p>Description: {data.description}</p>
        <p>
          Price: {data.price} {data.currency}
        </p>
        <StyledButton onClick={onHandleDelete}>DELETE</StyledButton>
        <StyledButton onClick={() => setIsEditMode(!isEditMode)}>
          {isEditMode ? "CLOSE" : "EDIT"}
        </StyledButton>
        <StyledLink href={"/"}>Back to all</StyledLink>
      </ProductCard>
      <Comments onSubmitComment={onSubmitComment} />
    </>
  );
}
