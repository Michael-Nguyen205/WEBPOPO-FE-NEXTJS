"use client";
import { useState } from "react";

type Category = {
  name: string;
  is_active: boolean;
  children: Category[];
};

export default function CategoryForm() {
  const [categories, setCategories] = useState<Category[]>([]);

  // Thêm danh mục mới vào danh sách
  const addCategory = (parent: Category | null = null) => {
    const newCategory: Category = { name: "", is_active: true, children: [] };


    console.log(parent);
    
    if (!parent) {
      // Thêm vào cấp gốc
      console.log("Thêm vào cấp gốc");

      setCategories([...categories, newCategory]);
    } else {
      // Thêm vào danh mục con
      console.log("Them vao danh muc con");
      console.log("categories",categories);

      parent.children.push(newCategory);
      setCategories([...categories]); // Trigger re-render
    }
  };










  // Cập nhật thông tin danh mục
  const updateCategory = (
    category: Category,
    field: keyof Category,
    value: string | boolean
  ) => {
    console.log("categories",categories);
    
    (category[field] as typeof value) = value;
    setCategories([...categories]); // Trigger re-render
  };





  // Hiển thị form danh mục (đệ quy)
  const renderCategoryForm = (category: Category, depth: number = 0) => {
    return (
      <div
        key={Math.random()}
        style={{
          marginLeft: `${depth * 20}px`,
          border: "1px solid #ddd",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Category name"
          value={category.name}
          onChange={(e) => updateCategory(category, "name", e.target.value)}
          required
        />
        <label style={{ marginLeft: "10px" }}>
          <input
            type="checkbox"
            checked={category.is_active}
            onChange={(e) =>
              updateCategory(category, "is_active", e.target.checked)
            }
          />
          Active
        </label>
        <button
          type="button"
          style={{ marginLeft: "10px" }}
          onClick={() => addCategory(category)}
        >
          Add Child
        </button>
        {/* Render các danh mục con (nếu có) */}
        {category.children.map((child) => renderCategoryForm(child, depth + 1))}
      </div>
    );
  };














  // Gửi request tạo danh mục
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categories),
      });

      if (!response.ok) {
        throw new Error("Failed to create categories");
      }

      console.log("Categories created successfully!");
    } catch (error) {
      console.error("Error creating categories:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button
          type="button"
          onClick={() => addCategory(null)}
          style={{
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Parent Category
        </button>
      </div>
      {/* Render tất cả danh mục ở cấp gốc */}
      {categories.map((category) => renderCategoryForm(category))}

      <button
        type="submit"
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
}
