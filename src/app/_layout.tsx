import { Stack } from "expo-router";
import React from "react";
import "../../global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
