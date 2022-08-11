import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ title, imgUrl }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className=" h-32 w-32 rounded"
      />
      <Text className=" absolute bottom-1 text-white font-semibold left-2">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
