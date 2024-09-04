import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import {Category} from "@/models/Category"
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import {useContext,useState} from "react";
import {CartContext} from "@/components/CartContext";
import NewProducts from "@/components/NewProducts";


export default function ProductPage({product,category,newProducts}) {
  const {addProduct} = useContext(CartContext);


  return (
    <div>
   
      <Header/>
  <div className="flex-col max-w-[1200px] w-full mx-auto border-[.7px] border-C7C5C ">
    <div className="w-full border-b-[.7px] border-b-C7C5C">
        <div className="flex w-[80%] mx-auto mt-[22px] pb-10  ">
          
            <ProductImages images={product.images} />
         
          <div className="max-w-[700px] w-full ml-[60px] ">
            <Title className=" mt-4 text-2xl font-semibold">{product.title}</Title>
            
            <ul className="h-fit mt-4 text-[#272626]">
          
              <li className="my-1">
                <p className="my-2 text-3xl font-bold font-sans">${product.price}</p>
              </li>
             
           
           

            {!!product.feature1 &&
   <li className="my-1 ml-4 list-disc">
         <p>{product.feature1}</p>
   </li>
   
}

{!!product.feature2 &&
   <li className="my-1 ml-4 list-disc">
         <p>{product.feature2}</p>
   </li>
}
{!!product.feature3 &&
   <li className="my-1 ml-4 list-disc">
         <p>{product.feature3}</p>
   </li>
}
{!!product.feature4 &&
   <li className="my-1 ml-4 list-disc">
         <p>{product.feature4}</p>
   </li>
}

{!!product.feature5 &&
   <li className="my-1 ml-4 list-disc">
         <p>{product.feature5}</p>
   </li>
}
{!!product.feature6 &&
   <li className="my-1 ml-4 list-disc">
         <p>{product.feature6}</p>
   </li>
}
{!!product.feature7 &&
   <li className="my-1 ml-4 list-disc">
         <p>{product.feature7}</p>
   </li>
}
{!!product.feature8 &&
   <li className="my-1 ml-4 list-disc">
         <p>{product.feature8}</p>
   </li>
}
{!!product.feature9 &&
   <li className="my-1 ml-4 list-disc">
         <p>{product.feature9}</p>
   </li>
}
                <li className="w-full">
                <Button className="w-[80%] h-12 ml-4 mt-2 justify-center" primary onClick={() => addProduct(product._id)}>
                  <CartIcon />Add to cart
                </Button>
              </li>

            </ul>

        
        </div>
        </div>
        </div>
        <NewProducts products={newProducts} />
        
        <div className="w-full   mx-auto my-12 pb-12 text-center border-b-[.7px] border-b-C7C5C1 ">
        <Title className="my-6 pb-10 text-3xl text-center font-semibold border-b-[.7px] border-b-C7C5C1 "><h1>Description</h1></Title>
            <p className="px-20 text-lg text-justify ">{product.description}</p>
          </div>




        <div className="flex-col">
        <Title className="mt-6 pb-10 text-3xl text-center font-semibold border-b-[.7px] border-b-C7C5C1 "><h1>Features</h1></Title>

            {!!product.features1 &&
   <div className="flex max-h-[500px] h-full ml-4 items-center ">
    <div className="max-w-[600px] w-full h-full text-justify border-r-[.7px] border-r-C7C5C1"><p className="h-[400px] p-10 mx-a text-2xl">{product.features1}</p></div>
      
         <div className="max-w-[600px] w-full"><img className="max-w-[250px] w-full h-[400px]  mx-auto " src={product.images[0]}></img></div>
        
   </div>
}
{!!product.features2 &&
  <div className="flex max-h-[500px] h-full ml-4  items-center ">
      <div className="max-w-[600px] w-full border-r-[.7px] border-r-C7C5C1"><img className="max-w-[250px] w-full h-[400px]  mx-auto " src={product.images[1]}></img></div>
      <div className="max-w-[600px] w-full h-full text-justify border-r-[.7px] border-r-C7C5C1"><p className="h-[400px] p-10 mx-a text-2xl">{product.features2}</p></div>
    
     
      
 </div>
}

{!!product.features3 &&
   <div className="flex max-h-[500px] h-full ml-4  items-center  ">
    <div className="max-w-[600px] w-full h-full text-justify border-r-[.7px] border-r-C7C5C1"><p className="h-[400px] p-10 mx-a text-2xl">{product.features3}</p></div>
      
         <div className="max-w-[600px] w-full"><img className="max-w-[250px] w-full h-[400px]  mx-auto " src={product.images[2]}></img></div>
        
   </div>
}
{!!product.features4 &&
  <div className="flex max-h-[500px] h-full ml-4  items-center  ">
      <div className="max-w-[600px] w-full border-r-[.7px] border-r-C7C5C1"><img className="max-w-[250px] w-full h-[400px]  mx-auto " src={product.images[3]}></img></div>
      <div className="max-w-[600px] w-full h-full text-justify border-r-[.7px] border-r-C7C5C1"><p className="h-[400px] p-10 mx-a text-2xl">{product.features4}</p></div>
    
     
      
 </div>
}
{!!product.features5 &&
   <div className="flex max-h-[500px] h-full ml-4  items-center  ">
    <div className="max-w-[600px] w-full h-full text-justify border-r-[.7px] border-r-C7C5C1"><p className="h-[400px] p-10 mx-a text-2xl">{product.features5}</p></div>
      
         <div className="max-w-[600px] w-full"><img className="max-w-[250px] w-full h-[400px]  mx-auto " src={product.images[4]}></img></div>
        
   </div>
}

            
           
          <table className="max-w-[1400px] w-full mx-auto text-[#362D2D]">
        <tbody>
          <tr className="flex h-10 my-4 ">
            <td className="w-full ">
              <h2 className=" text-2xl font-bold">GENERAL</h2>
            </td>
          </tr>
   
          <tr className="flex h-full  bg-[#0000001e]">
            
         <td className="max-w-[1200px] w-full">{Object.keys(product.properties).map(blog => (
          <div className="blog-preview" key={blog} >
             <p>{blog}</p>
          </div>
        ))}</td>
            <td className="max-w-[1200px] w-full">{Object.values(product.properties).map(blog => (
          <div className="blog-preview" key={blog} >
             <p>{blog}</p>
          </div>
        ))}</td>
          </tr>    
          </tbody>
        </table>
        </div>
     
        </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const {id} = context.query;
  const product = await Product.findById(id);
  const category = await Category.findById(product.category);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:8});
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      category: JSON.parse(JSON.stringify(category)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    }
 
 

     
    }
  }
 