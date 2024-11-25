import '@/styles/category.css';
import SubCategory from './SubCategory';

const Category = ({ categories }) => {
  return (
    <>
      <div className='heroSection'>
        <div className='cateforyList'>
          {categories &&
            categories.length > 0 &&
            categories.map((category) => (
              <SubCategory key={category.id} category={category} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Category;
