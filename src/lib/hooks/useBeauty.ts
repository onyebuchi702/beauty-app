"use client";
import { getBeautyData } from "../services";
import { useQuery } from "@tanstack/react-query";

export const useBeauty = () => {
  const query = useQuery({ queryKey: ["beauty"], queryFn: getBeautyData });

  return {
    query,
  };
};
