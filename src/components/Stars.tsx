function Stars({ rating, numReviews }: { rating: number; numReviews: number }) {
  return (
    <div className='flex items-center'>
      <span className='bg-[#191919] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-xl ml-3'>
        {rating}/5
      </span>
      <span className='text-xs text-gray-400'>
        {numReviews} review{numReviews > 1 ? 's' : ''}
      </span>
    </div>
  );
}

export default Stars;
