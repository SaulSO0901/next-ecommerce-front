import Header from "@/components/Header";
import Featured from "@/components/Featured";
import Center from "@/components/Center";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Footer from "@/components/Footer";
export default function ProductsPage({featuredProduct,products}) {
  return (
    <div>
      <Header/>
      <Featured product={featuredProduct}/>
      <Center>
      <h2 className="my-[40px] text-3xl text-center font-semibold">NEW ARRRIVALS</h2>
        <ProductsGrid products={products} />
      </Center>
      <Footer/>
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '66e22811b97a4472674b7e39';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}