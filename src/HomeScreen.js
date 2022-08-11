import { Button, Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";

// <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
// </svg>
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-2 ">
      {/* Header */}

      <View className="flex-row pb-3 items-center mx-2 space-x-2 ">
        <Image
          source={require("../assets/homepage/delivery.png")}
          className="w-7 h-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Delivery Now!</Text>
          <Text className="font-bold text-xl">
            Current location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={30} color="#00ecbb" />
      </View>

      {/* Search Bar */}
      <View className="flex-row  items-center space-x-2 pb-2 mx-2">
        <View className=" flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-lg">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00ccbb" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100 "
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Catagories */}
        <Categories />

        {/* Feature Rows */}
        <FeatureRow
          id="1"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeatureRow
          id="1"
          title="Featured"
          description="Paid placements from our partners"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
