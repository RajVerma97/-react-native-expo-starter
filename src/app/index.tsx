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
import { useFetchTodos } from "@/hooks/useFetchTodos";
import useCounterStore from "./store/counterStore";
import { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";
import { useAddUser } from "@/hooks/useAddUser";

export default function HomeScreen() {
  // const { data, isLoading } = useFetchTodos();
  //console.log(data);
  // const { count, increment, decrement, reset, setCount } = useCounterStore();

  // useEffect(() => {
  //   console.log("Initial count", useCounterStore.getState().count);
  //   setCount(5);
  //   console.log("After settings the count", useCounterStore.getState().count);
  //   increment(); // Updates count to 1
  //   console.log("After increment:", useCounterStore.getState().count);

  //   decrement(); // Updates count to 0
  //   console.log("After decrement:", useCounterStore.getState().count);

  //   reset(); // Resets count to 0
  //   console.log("After reset:", useCounterStore.getState().count);
  // }, []);

  const useAddUserMutation = useAddUser();

  const handleAddUser = () => {
    const username = "raj";
    useAddUserMutation.mutate(username);
  };

  return (
    <SafeAreaView className="bg-white p-4 gap-5">
      <Link href="/about">
        <Text className="bg-green-500 text-4xl">Go to About</Text>
      </Link>
      <Link
        href={{ pathname: "/userProfile/[userId]", params: { userId: "42" } }}
      >
        <Text className="bg-blue-500 text-4xl">Go to User profile</Text>
      </Link>

      <TouchableOpacity
        className="bg-purple-500 p-4 rounded"
        onPress={handleAddUser}
        // disabled={isLoading} // Disable while mutation is in progress
      >
        <Text className="text-white text-center">
          {/* {isLoading ? "Adding User..." : "Add User"} */}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
