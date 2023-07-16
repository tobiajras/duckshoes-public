import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import CarouselDetails from './CarouselDetails';
import { AppContext } from '../context/AppProvider';

function ProductDetails() {
  const { products } = useContext(AppContext);

  const { productName } = useParams();
  const [productFound, setProductFound] = useState({});

  useEffect(() => {
    const productNameDetails = products.find((dat) => dat.name === productName);
    setProductFound(productNameDetails);
  }, [products, productName]);

  return (
    <div className="bg-white">
      {productFound ? (
        <>
          {' '}
          <h2 className="font-semibold text-lg line-clamp-1 leading-10 p-3 he bg-white">
            {productFound.name}
          </h2>
          <img
            className="bg-white"
            src={productFound.main_picture_url}
            alt=""
          />
          <span className="font-bold text-3xl p-3 bg-white">
            ${productFound.retail_price_cents / 100}
          </span>
          <h3 className="font-semibold bg-white px-3 mt-2">Size:</h3>
          <CarouselDetails arrayDetails={productFound.size_range} />
          {productFound.color && (
            <div>
              <h3 className="font-semibold bg-white px-3 mt-2">Color:</h3>
              <div className="w-10 m-3 drop-shadow-md">
                <img
                  className=""
                  src={`/assets/colors/${productFound.color}Color.svg`}
                  alt={productFound.color}
                />
              </div>
            </div>
          )}
          <h3 className="font-semibold px-3">Product details</h3>
          <div className="p-3">
            <table className="border-collapse table-fixed w-full">
              <tbody>
                <tr className="bg-primaryLight">
                  <td className="w-1/2 rounded-l-lg p-2">Brand</td>
                  <td className="w-1/2 rounded-r-lg p-2 text-right">
                    {productFound.brand_name}
                  </td>
                </tr>
                <tr>
                  <td className="w-1/2 rounded-l-lg p-2">Color</td>
                  <td className="w-1/2 rounded-r-lg p-2 text-right">
                    {productFound.color}
                  </td>
                </tr>
                <tr className="bg-primaryLight">
                  <td className="w-1/2 rounded-l-lg p-2">Release year</td>
                  <td className="w-1/2 rounded-r-lg p-2 text-right">
                    {productFound.release_year}
                  </td>
                </tr>
                <tr>
                  <td className="w-1/2 rounded-l-lg p-2">Upper material</td>
                  <td className="w-1/2 rounded-r-lg p-2 text-right">
                    {productFound.upper_material}
                  </td>
                </tr>
                <tr className="bg-primaryLight">
                  <td className="w-1/2 rounded-l-lg p-2">Silhouette</td>
                  <td className="w-1/2 rounded-r-lg p-2 text-right">
                    {productFound.silhouette}
                  </td>
                </tr>
                <tr>
                  <td className="w-1/2 rounded-l-lg p-2">Gender</td>
                  <td className="w-1/2 rounded-r-lg p-2 text-right">
                    {productFound.gender}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default ProductDetails;
