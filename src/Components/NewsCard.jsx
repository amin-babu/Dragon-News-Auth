import { FaStar, FaEye, FaBookmark } from "react-icons/fa";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { useState } from "react";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const [bookMark, setBookMark] = useState(false);
  const { author, id, title, thumbnail_url, details, rating, total_view } = news;

  return (
    <div className="card bg-base-100 border border-base-200 mb-6">
      {/* Author & Action Bar */}
      <div className="flex justify-between items-center px-4 py-3 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-gray-500 text-lg">
          <span onClick={() => setBookMark(!bookMark)}>
            {
              bookMark ?
                <GoBookmarkFill size={25} className="cursor-pointer hover:text-primary" /> :
                <GoBookmark size={25} className="cursor-pointer hover:text-primary" />
            }
          </span>

          <CiShare2 size={25} className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* News Title */}
      <div className="px-4 pt-3">
        <h3 className="font-bold text-lg text-neutral">{title}</h3>
      </div>

      {/* Thumbnail Image */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="rounded-lg w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4 text-sm text-gray-600 leading-relaxed">
        {details.slice(0, 300)}...
        <Link to={`/news-details/${id}`} className="text-primary font-medium cursor-pointer"> Read More</Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-base-200 p-4 text-sm">
        {/* Rating */}
        <div className="flex items-center gap-1 text-warning">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 font-medium ml-2">
            {rating?.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye size={25} />
          <span className="font-medium text-gray-700">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
