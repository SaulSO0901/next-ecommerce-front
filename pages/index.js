import Header from "@/components/Header";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import Footer from "@/components/Footer";

export default function HomePage({featuredProduct,featuredProduct2,newProducts}) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct}/>
      <div className="max-w-[1280px] w-full mx-auto px-1">
      <h2 className="my-[40px] text-3xl text-center font-semibold">NEW ARRRIVALS</h2>
      <NewProducts products={newProducts}/>

      <Footer/>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '6685ed2804ad5ce120044590';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:16});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}