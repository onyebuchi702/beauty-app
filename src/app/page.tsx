"use client";

import { Error, Loading, NoData } from "@/components/atoms";
import { Beauty } from "@/components/views";
import { useBeauty } from "@/lib/hooks";

export default function Home() {
  const { query } = useBeauty();

  if (query.isLoading) {
    return <Loading />;
  }

  if (query.isError) {
    return <Error message={query.error.message} />;
  }

  if (!query.data) {
    return <NoData />;
  }

  return <Beauty data={query?.data} />;
}
