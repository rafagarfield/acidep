"use client"

import React, { useState } from "react";
import CategoriesForm from "./CategoriesForm";
import CategoriesList from "./CategoriesList";

function Categories() {
  const [categories, setCategories] = useState([]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 mx-10 shadow-lg bg-white">
      <CategoriesForm categories={categories} setCategories={setCategories} />
      <CategoriesList categories={categories} setCategories={setCategories} />
    </div>
  );
}

export default Categories;

