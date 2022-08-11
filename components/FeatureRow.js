import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeatureRow = ({ id, title, description }) => {
  return (
    <View>
      <View className=" px-4 mt-4 flex-row items-center justify-between">
        <Text>{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className=" text-xs text-gray-500 px-4">{description}</Text>
      {/* ScrollView */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {/* Restuant Cards */}
        <RestaurantCard
          id={123}
          imgUrl="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
          title="Distronix"
          rating={4.5}
          genre="Indian"
          address="Kol-105"
          short_description="Good cooking"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
          title="Distronix"
          rating={4.5}
          genre="Indian"
          address="Kol-105"
          short_description="Good cooking"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
          title="Distronix"
          rating={4.5}
          genre="Indian"
          address="Kol-105"
          short_description="Good cooking"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
