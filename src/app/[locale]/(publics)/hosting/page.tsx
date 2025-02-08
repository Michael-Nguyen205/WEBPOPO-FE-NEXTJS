import React from "react";

interface Category {
  id: number;
  name: string;
  children: Category[] | null;
  parent_id: number | null;
  is_active: boolean;
  i18n_language_id: number;
  language_code: string;
}

interface Props {
  categories: Category;
}

const Hosting: React.FC<Props> = ({ categories }) => {
  const renderCategory = (category: Category) => (
    <div className="p-4 border border-gray-300 rounded mb-4">
      <h2 className="font-bold text-lg">{category.name}</h2>
      {category.children && (
        <div className="pl-4 mt-2 border-l-2 border-gray-200">
          {category.children.map((child) => renderCategory(child))}
        </div>
      )}
    </div>
  );

  return (
    <div className="items-center justify-items-center p-6">
      <div className="text-black text-center mb-6">
        <h1 className="text-2xl font-bold">Danh mục dịch vụ</h1>
        <p>Đây là trang dịch vụ hosting</p>
      </div>
      <div>{renderCategory(categories)}</div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("http://localhost:8098/api/v1/categories/1");
  const data = await response.json();

  return {
    props: {
      categories: data.result,
    },
  };
}

export default Hosting;


