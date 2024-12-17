import { addUser } from "@/queries/useAddUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addUser, // Function to be called
    onSuccess: () => {
      console.log("User added successfully!");
      queryClient.invalidateQueries({ queryKey: ["users"] }); // Refetch user list
    },
    onError: (error: Error) => {
      console.error("Error adding user:", error.message);
    },
  });
};
