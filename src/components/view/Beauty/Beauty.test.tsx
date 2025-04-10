import { render, screen } from "@testing-library/react";
import { Beauty } from "./Beauty.component";
import "@testing-library/jest-dom";
import { BeautyResponse } from "@/types";
import * as React from "react";

jest.mock("next/link", () => {
  const React = require("react");
  return ({ href, children }: { href: string; children: React.ReactNode }) => {
    return React.createElement(
      "a",
      { href: href, "data-testid": "link-component" },
      children
    );
  };
});

const mockUrls = {
  productOne: "https://example.com/test-product",
  productTwo: "https://example.com/test-product-2",
};

const mockData: BeautyResponse[] = [
  {
    name: "Test Product",
    slug: "test-product",
    url: mockUrls.productOne,
  },
  {
    name: "Test Product2",
    slug: "test-product-2",
    url: mockUrls.productTwo,
  },
];

describe("Beauty Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Beauty data={mockData} />);
    expect(container).toBeInTheDocument();
  });

  it("renders all products correctly", () => {
    render(<Beauty data={mockData} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test Product2")).toBeInTheDocument();

    expect(screen.getByText(mockUrls.productOne)).toBeInTheDocument();
    expect(screen.getByText(mockUrls.productTwo)).toBeInTheDocument();

    const links = screen.getAllByTestId("link-component");

    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute("href", "test-product");
    expect(links[1]).toHaveAttribute("href", "test-product-2");
  });

  it("displays 'No data found' message when data array is empty", () => {
    render(<Beauty data={[]} />);

    expect(screen.getByText("No data found")).toBeInTheDocument();
    expect(screen.getByText("Please check back later.")).toBeInTheDocument();

    const links = screen.queryAllByTestId("link-component");
    expect(links).toHaveLength(0);
  });

  it("does not display 'No data found' message when data exists", () => {
    render(<Beauty data={mockData} />);

    expect(screen.queryByText("No data found")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Please check back later.")
    ).not.toBeInTheDocument();
  });
});
