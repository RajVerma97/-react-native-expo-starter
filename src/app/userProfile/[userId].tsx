import React from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function userProfile() {
  const { userId } = useLocalSearchParams<{ userId: string }>();
  return (
    <View>
      <Text>User profile of {userId}</Text>
    </View>
  );
}
