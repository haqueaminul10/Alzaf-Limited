const Category = ({ categories }) => {
  console.log('🚀 ~ Category ~ categories:', categories);
  return (
    <>
      <div>
        {categories && categories.length > 0 && (
          <ul style={{ listStyle: 'none', margin: '2px' }}>
            {categories.map((category) => {
              return (
                <li
                  key={category.id}
                  style={{ margin: '10px', cursor: 'pointer' }}
                >
                  {category.title}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default Category;
