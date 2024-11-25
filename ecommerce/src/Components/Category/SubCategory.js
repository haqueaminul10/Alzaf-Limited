import RightArrow from '@/pages/fonts/icons/RightArrow';
import '@/styles/category.css';
const SubCategory = ({ category }) => {
  console.log(`📌 ~ SubCategory ~ category:`, category);
  const [showSubCategories, setShowSubCategories] = useState(false);

  return (
    <>
      <div
        className={styles.categoryItem}
        onMouseEnter={() => setShowSubCategories(true)}
        onMouseLeave={() => setShowSubCategories(false)}
      ></div>
      <div className='categoryOne'>
        <div className='categoryTitle'>{category.title}</div>
        <div>
          {category?.childrens && category?.childrens.length > 0 && (
            <RightArrow color='#000' size='16' className='rightArrow' />
          )}
        </div>
      </div>
      {
        <div className='subCategoryContainer'>
          {category?.childrens?.length > 0 && (
            <div>
              {category.childrens.map((subCategory) => (
                <SubCategory key={subCategory.id} category={subCategory} />
              ))}
            </div>
          )}
        </div>
      }
    </>
  );
};
export default SubCategory;
