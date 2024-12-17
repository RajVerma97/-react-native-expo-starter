import { supabase } from "@/utils/supabase";

export const addUser = async (username: string): Promise<any> => {
  const { data, error } = await supabase.from("users").insert({ username });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
