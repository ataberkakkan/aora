import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "./CustomButton";

import { images } from "../constants";

const EmpytState = ({ title, subtitle }) => {
  const router = useRouter();

  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-xl text-center mt-2 font-psemibold text-white">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>

      <CustomButton
        title="Create Video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};
export default EmpytState;
