import Header from "@/components/Header";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import Footer from "@/components/Footer";

export default function HomePage({featuredProduct,laptopProduct,cellphoneProduct,headphoneProduct,controllerProduct,keyboardProduct,mouseProduct,consoleProduct}) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct}/>
      <div className="max-w-[1280px] w-full mx-auto px-1">
      <h2 className="my-[40px] text-3xl text-center font-semibold">LAPTOPS</h2>
      <NewProducts products={laptopProduct}/>
      <h2 className="my-[50px] text-3xl text-center font-semibold">CELLPHONES</h2>
      <NewProducts products={cellphoneProduct}/>
      <h2 className="my-[50px] text-3xl text-center font-semibold">HEADPHONES</h2>
      <NewProducts products={headphoneProduct}/>
      <h2 className="my-[50px] text-3xl text-center font-semibold">CONTROLLERS</h2>
      <NewProducts products={controllerProduct}/>
      <h2 className="my-[50px] text-3xl text-center font-semibold">KEYBOARDS</h2>
      <NewProducts products={keyboardProduct}/>
      <h2 className="my-[50px] text-3xl text-center font-semibold">MOUSES</h2>
      <NewProducts products={mouseProduct}/>
      <h2 className="my-[50px] text-3xl text-center font-semibold">CONSOLES</h2>
      <NewProducts products={consoleProduct}/>
      <Footer/>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '66e22811b97a4472674b7e39';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const cellphoneProduct = await Product. find({   
    'category': "665faff2c52420c56aa533db",
  }).limit(8);
  const laptopProduct = await Product. find({   
    'category': "666362e549025c2eb29a4498",
  }).limit(8);
  const headphoneProduct = await Product. find({   
    'category': "6668e0fab2c973c806792c04",
  }).limit(8);
  const keyboardProduct = await Product. find({   
    'category': "6674ba7a80d8f20886684f0f",
  }).limit(4);
  const mouseProduct = await Product. find({   
    'category': "6668de4cb2c973c806792bf8",
  }).limit(8);
  const controllerProduct = await Product. find({   
    'category': "6674b38780d8f20886684ef9",
  }).limit(8);
  const consoleProduct = await Product. find({   
    'category': "6668de70b2c973c806792bfc",
  }).limit(4);
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      cellphoneProduct: JSON.parse(JSON.stringify(cellphoneProduct)),
      laptopProduct: JSON.parse(JSON.stringify(laptopProduct)),
      headphoneProduct: JSON.parse(JSON.stringify(headphoneProduct)),
      keyboardProduct: JSON.parse(JSON.stringify(keyboardProduct)),
      mouseProduct: JSON.parse(JSON.stringify(mouseProduct)),
      controllerProduct: JSON.parse(JSON.stringify(controllerProduct)),
      consoleProduct: JSON.parse(JSON.stringify(consoleProduct)),
    },
  };
}