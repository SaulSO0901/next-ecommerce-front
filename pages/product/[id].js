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
import {useContext} from "react";
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
            <p>{product.description}</p>
           
          
            
            <div className="blog-list">
       
 
      </div>
     
            <div>
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
            <td className="w-[299px] font-medium max-[425px]:text-sm"> 
        {category.properties.map(blog => (
          <div className="blog-preview" key={blog.name}>
             <p>{blog.name}</p>
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
 