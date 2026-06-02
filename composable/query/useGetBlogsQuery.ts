'use client'

import { useQuery } from "@tanstack/react-query"
import { getAllBlogs } from "@/http/apis/blogApi";

export const useGetBlogsQuery = (category: string) => {
    const blogsQuery = useQuery({
        queryKey: ["blogs", category],
        queryFn: async () => {
            const response = await getAllBlogs(category);
            return response;
        },
        retry: false,
    })

    return {
        blogs: blogsQuery?.data,
        isLoading: blogsQuery.isLoading,
        isError: blogsQuery.isError,
        error: blogsQuery.error,
        refetch: blogsQuery.refetch,
    }
}
