import React from 'react';
import type { Dish } from '../types';

interface MenuItemProps {
  dish: Dish;
}

const MenuItem: React.FC<MenuItemProps> = ({ dish }) => {
  return (
    <div
      className="w-full text-left rounded-lg p-6 flex flex-col justify-between bg-gray-800/50"
    >
      <div>
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-semibold text-white">{dish.name}</h3>
          <p className="text-lg font-medium text-amber-300 whitespace-nowrap">{dish.price}</p>
        </div>
        {dish.description && (
          <p className="text-gray-400 text-sm mt-2 pr-4">{dish.description}</p>
        )}
      </div>
    </div>
  );
};

export default MenuItem;