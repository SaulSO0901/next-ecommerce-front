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



export default function ProductPage({product,category}) {
  const {addProduct} = useContext(CartContext);


  return (
    <div>
   
      <Header/>
      <Center>
        <div>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            <p className="">{product.description.replace(/\./g, "\n")}</p>
            <ul className="h-72">
              
           

            {!!product.feature1 &&
   <li className="ml-4 list-disc">
         <p>{product.feature1}</p>
   </li>
   
}

{!!product.feature2 &&
   <li className="ml-4 list-disc">
         <p>{product.feature2}</p>
   </li>
}
{!!product.feature3 &&
   <li className="ml-4 list-disc">
         <p>{product.feature3}</p>
   </li>
}
{!!product.feature4 &&
   <li className="ml-4 list-disc">
         <p>{product.feature4}</p>
   </li>
}

{!!product.feature5 &&
   <li className="ml-4 list-disc">
         <p>{product.feature5}</p>
   </li>
}
{!!product.feature6 &&
   <li className="ml-4 list-disc">
         <p>{product.feature6}</p>
   </li>
}
{!!product.feature7 &&
   <li className="ml-4 list-disc">
         <p>{product.feature7}</p>
   </li>
}
{!!product.feature8 &&
   <li className="ml-4 list-disc">
         <p>{product.feature8}</p>
   </li>
}
{!!product.feature9 &&
   <li className="ml-4 list-disc">
         <p>{product.feature9}</p>
   </li>
}
            {!!product.features1 &&
   <li className="ml-4 list-disc">
         <p>{product.features1}</p>
         <img src={product.images[0]}></img>
   </li>
}
{!!product.features2 &&
   <li className="ml-4 list-disc">
         <p>{product.features2}</p>
         <img src={product.images[1]}></img>
   </li>
}
{!!product.features3 &&
   <li className="ml-4 list-disc">
         <p>{product.features3}</p>
         <img src={product.images[2]}></img>
   </li>
}
            {!!product.features4 &&
   <li className="ml-4 list-disc">
         <p>{product.features4}</p>
         <img src={product.images[3]}></img>
   </li>
}
{!!product.features5 &&
   <li className="ml-4 list-disc">
         <p>{product.features5}</p>
         <img src={product.images[4]}></img>
   </li>
}
            
            </ul>
          
            
            <div className="blog-list">
       
 
      </div>
     
            <div className="mt-[3800px]">
              <div>
                <p>${product.price}</p>
              </div>
              <div>
                <Button primary onClick={() => addProduct(product._id)}>
                  <CartIcon />Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
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
      </Center>
             
     
    
    </div>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const {id} = context.query;
  const product = await Product.findById(id);
  const category = await Category.findById(product.category);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      category: JSON.parse(JSON.stringify(category)),
    }
 
 

     
    }
  }
 