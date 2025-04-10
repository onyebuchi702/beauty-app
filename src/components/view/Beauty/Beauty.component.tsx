import { LinkComponent } from "@/components/atom";
import { BeautyResponse } from "@/types";
import React from "react";

export const Beauty = ({ data }: { data: BeautyResponse[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item) => (
        <LinkComponent href={item.slug} key={item.slug}>
          <h2>{item.name}</h2>
          <p>{item.url}</p>
        </LinkComponent>
      ))}

      {data && data.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">No data found</h2>
          <p className="text-lg">Please check back later.</p>{" "}
        </div>
      )}
    </div>
  );
};
