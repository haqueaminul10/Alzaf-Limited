import Header from '@/Components/Header/Header';
import Navbar from '@/Components/Header/Navbar';
import Category from '@/Components/Category/Category';

export default function Home({ categories }) {
  return (
    <>
      <Header />
      <Navbar />
      <Category categories={categories} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(
      'https://api.shope.com.bd/api/v1/public/hero-categories'
    );
    const data = await response.json();

    return {
      props: { categories: data },
    };
  } catch (err) {
    console.error('Error fetching categories:', err);
    return {
      props: { categories: [] },
    };
  }
}
