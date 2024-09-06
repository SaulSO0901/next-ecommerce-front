import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';
  
  const Footer = () => {
    return (
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 font-semibold text-gray-300 '>
        <div>
          <h1 className='w-full text-3xl font-bold text-[#747474]'>Ecommerce</h1>
          <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
          <div className='flex justify-between md:w-[75%] my-6'>
          <a href='https://github.com/SaulSO0901'><FaFacebookSquare size={30} className='hover:text-[#00dbdf]' /></a>
              <a href='https://github.com/SaulSO0901'><FaInstagram size={30} className='hover:text-[#00dbdf]' /></a>
               <a href='https://github.com/SaulSO0901'> <FaTwitterSquare size={30} className='hover:text-[#00dbdf]' /></a>
               <a href='https://github.com/SaulSO0901'><FaGithubSquare size={30} className='hover:text-[#00dbdf]' /></a>
               <a href='https://github.com/SaulSO0901'><FaDribbbleSquare size={30} className='hover:text-[#00dbdf]' /></a>
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
      <div>
          <h6 className='font-medium text-[#747474]'> <a href='https://github.com/SaulSO0901'>Solutions</a></h6>
          <ul>
              <li className='py-2 text-sm hover:text-[#00dbdf]'> <a href='https://github.com/SaulSO0901'>Analytics</a></li>
              <li className='py-2 text-sm hover:text-[#00dbdf]'> <a href='https://github.com/SaulSO0901'>Marketing</a></li>
              <li className='py-2 text-sm hover:text-[#00dbdf]'> <a href='https://github.com/SaulSO0901'>Commerce</a></li>
              <li className='py-2 text-sm hover:text-[#00dbdf]'> <a href='https://github.com/SaulSO0901'>Insights</a></li>
          </ul>
      </div>
      <div>
          <h6 className='font-medium text-[#747474]'>Support</h6>
          <ul>
              <li className='py-2 text-sm hover:text-[#00dbdf]'> <a href='https://github.com/SaulSO0901'>Pricing</a></li>
              <li className='py-2 text-sm hover:text-[#00dbdf]'> <a href='https://github.com/SaulSO0901'>Documentation</a></li>
              <li className='py-2 text-sm hover:text-[#00dbdf]'> <a href='https://github.com/SaulSO0901'>Guides</a></li>
              <li className='py-2 text-sm hover:text-[#00dbdf]'> <a href='https://github.com/SaulSO0901'>API Status</a></li>
          </ul>
      </div>
      <div>
          <h6 className='font-medium text-[#747474]'> <a href='https://github.com/SaulSO0901'>Company</a></h6>
          <ul>
              <li className='py-2 text-sm hover:text-[#00dbdf]'> <a href='https://github.com/SaulSO0901'>About</a></li>
              <li className='py-2 text-sm hover:text-[#00dbdf]'> <a href='https://github.com/SaulSO0901'>Blog</a></li>
              <li className='py-2 text-sm hover:text-[#00dbdf]'> <a href='https://github.com/SaulSO0901'>Jobs</a></li>
              <li className='py-2 text-sm hover:text-[#00dbdf]'> <a href='https://github.com/SaulSO0901'>Press</a></li>
              <li className='py-2 text-sm hover:text-[#00dbdf]'> <a href='https://github.com/SaulSO0901'>Carrers</a></li>
          </ul>
      </div>
      <div>
          <h6 className='font-medium text-[#747474]'> <a href='https://github.com/SaulSO0901'>Legal</a></h6>
          <ul>
              <li className='py-2 text-sm hover:text-[#00dbdf]'> <a href='https://github.com/SaulSO0901'>Claim</a></li>
              <li className='py-2 text-sm hover:text-[#00dbdf]'> <a href='https://github.com/SaulSO0901'>Policy</a></li>
              <li className='py-2 text-sm hover:text-[#00dbdf]'> <a href='https://github.com/SaulSO0901'>Terms</a></li>
          </ul>
      </div>
        </div>
      </div>
    );
  };
  
  export default Footer;