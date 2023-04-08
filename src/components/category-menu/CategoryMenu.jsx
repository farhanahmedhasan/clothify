import './categories.styles.scss';
import CategoryItem from '../category-item/CategoryItem';

export default function CategoryMenu({ categories }) {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
