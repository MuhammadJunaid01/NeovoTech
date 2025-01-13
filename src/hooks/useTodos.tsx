import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {useCallback} from 'react';

export const useTodos = () => {
  const fetchTodos = useCallback(async () => {
    const {data} = await axios.get(
      'https://jsonplaceholder.typicode.com/todos',
    );
    return data;
  }, []);
  return useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
    enabled: true,
  });
};
