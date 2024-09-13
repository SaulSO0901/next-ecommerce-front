import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";


export default function NewProducts({products}) {
  return (
    <Center>
      <ProductsGrid products={products} />
    </Center>
  );
}