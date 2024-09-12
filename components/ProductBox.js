import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)``;

const ProductInfoBox = styled.div``;

const PriceRow = styled.div``;

const Price = styled.div``;

export default function ProductBox({ _id, title, price, images }) {
  const { addProduct } = useContext(CartContext);

  const url = "/product/" + _id;
  return (
    <ProductWrapper className="h-60 max-[766px]:w-[100%] ">
      <WhiteBox
        className="flex h-[120px] p-5 text-center items-center justify-center rounded-xl bg-white"
        href={url}
      >
        <div className="">
          <img
            className="w-30 max-h-[80px] h-full mt-8 mx-auto"
            src={images?.[0]}
            alt="product"
          />
        </div>
      </WhiteBox>
      <ProductInfoBox className="w-full mt-1">
        <div className="w-full h-12 text-center" href={url}>
          <a className=" max-[425px]:text-sm max-[325px]:text-xs">
            {title.slice(0, 34) + "..."}
          </a>
        </div>
        <PriceRow className="flex-col block w-full ">
          <Price className="w-full">
            <p className="w-full text-center text-lg font-bold">${price}</p>
          </Price>
          <Button block onClick={() => addProduct(_id)} primary outline>
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
