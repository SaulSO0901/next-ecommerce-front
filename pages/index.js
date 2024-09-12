import Header from "@/components/Header";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import Footer from "@/components/Footer";

export default function HomePage({featuredProduct,newProducts}) {
  return (
    <div>
      <Header/>
      <Featured product={featuredProduct}/>
      <div className="max-w-[1280px] w-full mx-auto px-1">
      <h2 className="my-[40px] text-3xl text-center font-semibold">NEW ARRRIVALS</h2>
      <NewProducts products={newProducts}/>
      </div>
      <Footer/>
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '66e22811b97a4472674b7e39';
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