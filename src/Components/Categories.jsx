import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res => res.json());
const Categories = () => {
  const categories = use(categoryPromise);
  console.log(categories);
  return (
    <div>
      <h4 className='font-semibold'>All Categories</h4>
      <div className='grid grid-cols-1 mt-4 category'>
        {
          categories.map(category => (
            <NavLink key={category.id}
              to={`/category/${category.id}`}
              className={'py-3 px-12 font-medium text-accent hover:bg-base-200 rounded-sm'}>
              {category.name}
            </NavLink>)
          )
        }
      </div>
    </div>
  );
};

export default Categories;