"use client"
import React, { useState } from "react";
import CategoriesForm from "./CategoriesForm";
import CategoriesList from "./CategoriesList";

function Categories() {
    const [categories, setCategories] = useState([]) 
  return (
    <div>
      <CategoriesForm categories={categories} setCategories={setCategories} />
      <CategoriesList categories={categories} setCategories={setCategories}/>
    </div>
  )
}

export default Categories;
