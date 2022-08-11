import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard
        title="Testing"
        imgUrl="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
      />
      <CategoryCard
        title="Testing"
        imgUrl="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
      />
      <CategoryCard
        title="Testing"
        imgUrl="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
      />
      <CategoryCard
        title="Testing"
        imgUrl="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
      />
      <CategoryCard
        title="Testing"
        imgUrl="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
      />
      <CategoryCard
        title="Testing"
        imgUrl="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
      />
    </ScrollView>
  );
};

export default Categories;
