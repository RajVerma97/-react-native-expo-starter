import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white p-4 gap-5">
      <Link href="/about">
        <Text className="bg-green-500 text-4xl  ">Go to About</Text>
      </Link>
      <Link
        href={{ pathname: "/userProfile/[userId]", params: { userId: "42" } }}
      >
        <Text className="bg-blue-500 text-4xl  ">Go to User profile</Text>
      </Link>
    </SafeAreaView>
  );
}
