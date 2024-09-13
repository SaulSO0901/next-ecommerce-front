import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import NewProducts from "@/components/NewProducts";
import Footer from "@/components/Footer";

export default function ProductPage({ product, newProducts }) {
  const { addProduct } = useContext(CartContext);

  return (
    <div>
      <Header />
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="flex-col max-w-[1200px] w-full mx-auto border-[.7px] border-C7C5C text-[#747474] ">
          <div className="w-full border-b-[.7px] border-b-C7C5C">
            <div className="flex w-[80%] mx-auto mt-[22px] pb-10 max-[768px]:flex max-[768px]:flex-col  ">
              <ProductImages images={product.images} />

              <div className="max-w-[700px] w-full ml-[60px] max-[768px]:ml-0 max-[768px]:mt-20 ">
                <h2 className=" mt-4 text-3xl font-semibold">
                  {product.title}
                </h2>

                <ul className="h-fit mt-4 ">
                  <li className="my-1">
                    <p className="my-2 text-3xl font-bold font-sans">
                      ${product.price}
                    </p>
                  </li>

                  {!!product.feature1 && (
                    <li className="my-1 ml-4 list-disc">
                      <p>{product.feature1}</p>
                    </li>
                  )}

                  {!!product.feature2 && (
                    <li className="my-1 ml-4 list-disc">
                      <p>{product.feature2}</p>
                    </li>
                  )}
                  {!!product.feature3 && (
                    <li className="my-1 ml-4 list-disc">
                      <p>{product.feature3}</p>
                    </li>
                  )}
                  {!!product.feature4 && (
                    <li className="my-1 ml-4 list-disc">
                      <p>{product.feature4}</p>
                    </li>
                  )}

                  {!!product.feature5 && (
                    <li className="my-1 ml-4 list-disc">
                      <p>{product.feature5}</p>
                    </li>
                  )}
                  {!!product.feature6 && (
                    <li className="my-1 ml-4 list-disc">
                      <p>{product.feature6}</p>
                    </li>
                  )}
                  {!!product.feature7 && (
                    <li className="my-1 ml-4 list-disc">
                      <p>{product.feature7}</p>
                    </li>
                  )}
                  {!!product.feature8 && (
                    <li className="my-1 ml-4 list-disc">
                      <p>{product.feature8}</p>
                    </li>
                  )}
                  {!!product.feature9 && (
                    <li className="my-1 ml-4 list-disc">
                      <p>{product.feature9}</p>
                    </li>
                  )}
                  <li className="w-full">
                    <Button
                      className="w-full h-12 mx-auto mt-2 justify-center"
                      primary
                      onClick={() => addProduct(product._id)}
                    >
                      <CartIcon />
                      Add to cart
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <NewProducts products={newProducts} />

          <div className="w-full   mx-auto my-12 pb-12 text-center border-b-[.7px] border-b-C7C5C1 ">
            <div className="my-6 pb-10 text-3xl text-center font-semibold border-b-[.7px] border-b-C7C5C1">
              <h1>Description</h1>
            </div>
            <p className="px-20  text-lg text-justify  max-[425px]:p-4  max-[425px]:text-base ">
              {product.description}
            </p>
          </div>
          {/*Features*/}
          <div className="flex-col  max-[768px]:hidden">
            <div className="mt-6 pb-10 text-3xl text-center font-semibold border-b-[.7px] border-b-C7C5C1 ">
              <h1>Features</h1>
            </div>

            {!!product.features1 && (
              <div className="flex max-h-[500px] h-full ml-4 items-center border-b-[.7px] border-b-C7C5C1  max-[425px]:h-[800px]  max-[425px]:flex-col max-[425px]:ml-0  ">
                <div className="max-w-[600px] w-full h-full text-justify ">
                  <p className="max-w-[500px] w-full h-[400px] p-10 text-2xl max-[425px]:p-4">
                    {product.features1}
                  </p>
                </div>

                <div className="max-w-[600px] w-full">
                  <img
                    className="max-w-[250px] w-full h-[400px] p-6  mx-auto "
                    src={product.images[0]}
                    alt="product"
                  ></img>
                </div>
              </div>
            )}
            {!!product.features2 && (
              <div className="flex max-h-[500px] h-full ml-4  items-center border-b-[.7px] border-b-C7C5C1 ">
                <div className="max-w-[600px] w-full ">
                  <img
                    className="max-w-[250px] w-full h-[400px] p-6  mx-auto "
                    src={product.images[1]}
                    alt="product"
                  ></img>
                </div>
                <div className="max-w-[600px] w-full h-full text-justify ">
                  <p className="max-w-[500px] w-full h-[400px] p-10  text-2xl">
                    {product.features2}
                  </p>
                </div>
              </div>
            )}

            {!!product.features3 && (
              <div className="flex max-h-[500px] h-full ml-4  items-center border-b-[.7px] border-b-C7C5C1  ">
                <div className="max-w-[600px] w-full h-full text-justify ">
                  <p className="h-[400px] p-10  text-2xl">
                    {product.features3}
                  </p>
                </div>

                <div className="max-w-[600px] w-full">
                  <img
                    className="max-w-[250px] w-full h-[400px] p-4  mx-auto "
                    src={product.images[2]}
                    alt="product"
                  ></img>
                </div>
              </div>
            )}
            {!!product.features4 && (
              <div className="flex max-h-[500px] h-full ml-4  items-center  ">
                <div className="max-w-[600px] w-full border-b-[.7px] border-b-C7C5C1">
                  <img
                    className="max-w-[250px] w-full h-[400px]  mx-auto "
                    src={product.images[3]}
                    alt="product"
                  ></img>
                </div>
                <div className="max-w-[600px] w-full h-full text-justify border-b-[.7px] border-b-C7C5C1">
                  <p className="max-w-[500px] w-full h-[400px] p-10 mx-a text-2xl">
                    {product.features4}
                  </p>
                </div>
              </div>
            )}
            {!!product.features5 && (
              <div className="flex max-h-[500px] h-full ml-4  items-center  ">
                <div className="max-w-[600px] w-full h-full text-justify border-b-[.7px] border-b-C7C5C1">
                  <p className="max-w-[500px] w-full h-[400px] p-10 mx-a text-2xl">
                    {product.features5}
                  </p>
                </div>

                <div className="max-w-[600px] w-full">
                  <img
                    className="max-w-[250px] w-full h-[400px]  mx-auto "
                    src={product.images[4]}
                    alt="product"
                  ></img>
                </div>
              </div>
            )}
          </div>

          {/*Features for mobiles*/}
          <div className="hidden  max-[768px]:flex max-[768px]:flex-col">
            <div className="mt-6 pb-10 text-3xl text-center font-semibold border-b-[.7px] border-b-C7C5C1 ">
              <h1>Features</h1>
            </div>

            {!!product.features1 && (
              <div className="flex-col h-fit items-center border-b-[.7px] border-b-C7C5C1   ">
                <div className="max-w-[600px] w-full mx-auto text-justify ">
                  <p className="max-w-[600px] w-full h-fit text-2xl p-4">
                    {product.features1}
                  </p>
                </div>

                <div className="w-full">
                  <img
                    className="max-w-[250px] w-full h-[400px] p-6  mx-auto "
                    src={product.images[0]}
                    alt="product"
                  ></img>
                </div>
              </div>
            )}

            {!!product.features2 && (
              <div className="flex-col h-fit items-center border-b-[.7px] border-b-C7C5C1   ">
                <div className="max-w-[600px] w-full mx-auto text-justify ">
                  <p className="max-w-[600px] w-full h-fit text-2xl p-4">
                    {product.features2}
                  </p>
                </div>

                <div className="w-full">
                  <img
                    className="max-w-[250px] w-full h-[400px] p-6  mx-auto "
                    src={product.images[1]}
                    alt="product"
                  ></img>
                </div>
              </div>
            )}

            {!!product.features3 && (
              <div className="flex-col h-fit items-center border-b-[.7px] border-b-C7C5C1   ">
                <div className="max-w-[600px] w-full mx-auto text-justify ">
                  <p className="max-w-[600px] w-full h-fit text-2xl p-4">
                    {product.features3}
                  </p>
                </div>

                <div className="w-full">
                  <img
                    className="max-w-[250px] w-full h-[400px] p-6  mx-auto "
                    src={product.images[2]}
                    alt="product"
                  ></img>
                </div>
              </div>
            )}
            {!!product.features4 && (
              <div className="flex-col h-fit items-center border-b-[.7px] border-b-C7C5C1   ">
                <div className="max-w-[600px] w-full mx-auto text-justify ">
                  <p className="max-w-[600px] w-full h-fit text-2xl p-4">
                    {product.features4}
                  </p>
                </div>

                <div className="w-full">
                  <img
                    className="max-w-[250px] w-full h-[400px] p-6  mx-auto "
                    src={product.images[3]}
                    alt="product"
                  ></img>
                </div>
              </div>
            )}

            {!!product.features5 && (
              <div className="flex-col h-fit items-center border-b-[.7px] border-b-C7C5C1   ">
                <div className="max-w-[600px] w-full mx-auto text-justify ">
                  <p className="max-w-[600px] w-full h-fit text-2xl p-4">
                    {product.features5}
                  </p>
                </div>

                <div className="w-full">
                  <img
                    className="max-w-[250px] w-full h-[400px] p-6  mx-auto "
                    src={product.images[4]}
                    alt="product"
                  ></img>
                </div>
              </div>
            )}
          </div>
        </div>

        <table className="w-full  my-12 text-[#747474] font-semibold  max-[425px]:mt-10 ">
          <tbody>
            <tr className="flex h-10  mt-6 mb-2 text-center  ">
              <td className="mx-auto">
                <h2 className="text-2xl font-bold border-b-[.7px] border-b-C7C5C1 ">
                  Product information
                </h2>
              </td>
            </tr>

            <tr className="flex h-full p-2 bg-[#d6d5d51e]">
              <td className="max-w-[300px] w-full ">
                {Object.keys(product.properties).map((key) => (
                  <div className="border-b-[.7px] border-b-C7C5C1" key={key}>
                    <p className="pl-2">{key}</p>
                  </div>
                ))}
              </td>
              <td className=" w-full">
                {Object.values(product.properties).map((key) => (
                  <div className="border-b-[.7px] border-b-C7C5C1" key={key}>
                    <p>{key}</p>
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
        <Footer />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);

  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 8,
  });
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
