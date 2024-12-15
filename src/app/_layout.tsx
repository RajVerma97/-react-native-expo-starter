import { Stack } from "expo-router";
import React from "react";

import "../../global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={({ route }) => {
        const params = route.params as { userId?: string } | undefined;
        const userId = params?.userId;

        return {
          contentStyle: {
            padding: 20,
          },
          title: userId ? `Profile of User ${userId}` : "Default Title",
        };
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home Screen" }} />
      <Stack.Screen name="about" options={{ title: "About Screen" }} />
      <Stack.Screen name="userProfile/[userId]" />
    </Stack>
  );
}
