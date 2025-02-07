import FeaturesBanner from "@/components/FeaturesBanner/FeaturesBanner";
import ShopPage from "@/components/Products/ShopProducts/ShopProducts";
import React from "react";
import { Suspense } from "react";
export default function page() {
  return (
    <>
      <FeaturesBanner />
      <Suspense fallback="loading...">
      <>
        <ShopPage />
      </>
    </Suspense>
    
    </>
    
    
  );
}
