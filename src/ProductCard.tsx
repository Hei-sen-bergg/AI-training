import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-64 m-4 flex flex-col items-center">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4 w-full flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">{name}</h2>
        <p className="text-xl font-bold text-blue-600">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
