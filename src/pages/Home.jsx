import React, { useContext, useEffect } from 'react';
import ProvideContext from '../context/ProviderContext';

function Home() {
  const { productApi, productData, setProductsData, sun, setSun } = useContext(ProvideContext);

  useEffect(() => {
    productApi();
  }, []);

 

  return (
    <div>
     

      <div className={`grid grid-cols-4 p-7 gap-6 min-h-screen ${sun ? "bg-black text-white" : "bg-white"}`}>
        {productData?.map((ele, index) => (
          <div key={index} className="border shadow-lg bg-transparent rounded-lg p-5 hover:shadow-xl transition-shadow duration-300">
            <h1 className="text-xl font-bold mb-3">{ele.author}</h1>
            <p className="text-sm">{ele.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
