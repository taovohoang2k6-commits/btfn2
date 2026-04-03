import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useUpdateStory = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (story: any) => {
      const { id, ...data } = story;
      return await axios.put(`http://localhost:3000/stories/${id}`, data);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  return mutation;
};