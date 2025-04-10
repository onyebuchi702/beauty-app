import { BeautyResponse } from "@/types";

export const getBeautyData = async (): Promise<
  BeautyResponse[] | undefined
> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_BEAUTY_API_URL!;

    if (!apiUrl) {
      throw new Error("API URL is not defined");
    }
    const data = await fetch(`${apiUrl}products/categories`);

    if (!data.ok) {
      throw new Error("Network response was not ok");
    }

    const response = await data?.json();

    return response;
  } catch (error) {
    console.error("Error fetching beauty data:", error);
    return undefined;
  }
};
