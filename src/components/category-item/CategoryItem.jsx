import './categoryItem.styles.scss';

export default function CategoryItem({ category }) {
  const { title, imageUrl } = category;

  return (
    <div className='category-container'>
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
      {/* <img src={imageUrl} alt={`${title}-image`} /> */}
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
