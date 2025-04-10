"use client";

import { Beauty } from "@/components/view/Beauty";
import { useBeauty } from "@/lib/hooks";

export default function Home() {
  const { query } = useBeauty();

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  if (!query.data) {
    return <div>No data found</div>;
  }

  return <Beauty data={query?.data} />;
}
