import Header from "@/components/Header";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";

export default function HomePage({featuredProduct,featuredProduct2,newProducts}) {
  return (
    <div>
      <Header />
      <div className="px-1">
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
      <NewProducts products={featuredProduct2} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '6685ed2804ad5ce120044590';
  const featuredProductId2 = '665faff2c52420c56aa533db';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const featuredProduct2 = await Product.find({},{ 'category': featuredProductId2,limit:10});
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      featuredProduct2: JSON.parse(JSON.stringify(featuredProduct2)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}