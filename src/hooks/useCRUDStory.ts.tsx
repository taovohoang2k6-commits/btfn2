import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API = "http://localhost:3000/stories";

export const useCRUDStory = () => {
  const queryClient = useQueryClient();

  const { data: list = [], isLoading } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get(API);
      return res.data;
    },
  });

  const addMutation = useMutation({
    mutationFn: async (story: any) => axios.post(API, story),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const removeMutation = useMutation({
    mutationFn: async (id: number) => axios.delete(`${API}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (story: any) => {
      const { id, ...data } = story;
      return axios.put(`${API}/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  return {
    list,
    isLoading,
    add: addMutation.mutate,
    remove: removeMutation.mutate,
    update: updateMutation.mutate,
  };
};