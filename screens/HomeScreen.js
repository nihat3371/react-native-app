import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeroImage } from "../assets";
HeroImage;
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  {
    return (
      <SafeAreaView className="bg-gray-900 flex-1 relative">
        {/* Header */}
        <View className="flex-row px-6 mt-8 items-center space-x-2 ">
          <View className="w-32 left-28 h-16 items-center bg-black rounded-full justify-center">
            <Text className="text-gray-400 text-3xl font-bold ">GO</Text>
          </View>
        </View>
        {/* Middle */}
        <View className="px-6 mt-8 space-y-3">
          <Text className="text-[#3C6072] text-[42px]">follow the rabbit </Text>
          <Text className="text-white text-[38px]">only good vibes</Text>
        </View>
        {/* Bottom */}
        <Animatable.View
          animation={"pulse"}
          easing="ease-out"
          iterationCount="infinite"
          className="w-[340px] h-[340px] absolute bottom-24 right-48 bg-black rounded-3xl"
        ></Animatable.View>
        <Animatable.View
          animation={"pulse"}
          easing="ease-out"
          iterationCount="infinite"
          className="w-[340px] h-[340px] absolute bottom-0 left-48 bg-red-700 rounded-3xl"
        ></Animatable.View>
        {/* Img */}
        <View className="flex-1 relative items-center justify-center">
          <Image source={HeroImage} className="h-full w-full absolute" />
          <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
            <View className="w-40 h-16 top-40 left-1 bg-black items-center justify-center rounded-3xl">
              <View>
                <Text className="text-white text-[30px] font-bold">Browse</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
};

export default HomeScreen;
