import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

const Title = styled.h2`
  font-size: 2rem;


`;

export default function NewProducts({products}) {
  return (
    <Center>
      <Title className="mt-[40px] text-3xl font-semibold">New Arrivals</Title>
      <ProductsGrid products={products} />
    </Center>
  );
}