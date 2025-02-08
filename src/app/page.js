import { Carousel } from "@/components/Carousel/Carousel";
import FeaturesBanner from "@/components/FeaturesBanner/FeaturesBanner";
import AllProductUser from "@/components/Products/AllProductUser/AllProductUser";

import React from "react";

export default function page() {
  return (
    <>
      <Carousel />
      <FeaturesBanner />
      <AllProductUser />
    </>
  );
}
