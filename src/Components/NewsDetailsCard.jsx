import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";

const NewsDetailsCard = ({ news }) => {
  const { image_url, title, details, category_id } = news;
  return (
    <div className='p-5 border space-y-3.5 rounded-sm border-base-300 '>
      <img className='w-full rounded-sm' src={image_url} alt="" />
      <h3 className='text-2xl font-bold text-primary leading-9'>{title}</h3>
      <p className='text-accent leading-7'>{details}</p>
      <Link to={`/category/${category_id}`} className='text-base-100 inline-flex items-center gap-2.5 mt-3 bg-secondary px-5 py-2'><FaArrowLeft /> All news in this category</Link>
    </div>
  );
};

export default NewsDetailsCard;