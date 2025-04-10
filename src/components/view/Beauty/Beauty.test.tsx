import { render, screen } from "@testing-library/react";
import { Beauty } from "./Beauty.component";
import "@testing-library/jest-dom";
import { BeautyResponse } from "@/types";

// jest.mock("@/components/atom", () => ({
//   LinkComponent: ({
//     href,
//     children,
//   }: {
//     href: string;
//     children: React.ReactNode;
//   }) => (
//     <a href={href} data-testid="link-component">
//       {children}
//     </a>
//   ),
// }));

jest.mock("next/link", () => {
  return ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
      <a href={href} data-testid="next-link">
        {children}
      </a>
    );
  };
});

const mockData: BeautyResponse[] = [
  {
    name: "Test Product",
    slug: "test-product",
    url: "https://example.com/test-product",
  },
  {
    name: "Test Product2",
    slug: "test-product-2",
    url: "https://example.com/test-product-2",
  },
];

describe("Beauty Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Beauty data={mockData} />);
    expect(container).toBeInTheDocument();
  });

  it("renders all products correctly", () => {
    render(<Beauty data={mockData} />);

    // Check if products are rendered
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test Product2")).toBeInTheDocument();

    // Check if URLs are rendered
    expect(
      screen.getByText("https://example.com/test-product")
    ).toBeInTheDocument();
    expect(
      screen.getByText("https://example.com/test-product-2")
    ).toBeInTheDocument();

    // Check if we have the correct number of links
    const links = screen.getAllByTestId("link-component");
    expect(links).toHaveLength(2);

    // Check if links have correct hrefs
    expect(links[0]).toHaveAttribute("href", "test-product");
    expect(links[1]).toHaveAttribute("href", "test-product-2");
  });

  it("displays 'No data found' message when data array is empty", () => {
    render(<Beauty data={[]} />);

    expect(screen.getByText("No data found")).toBeInTheDocument();
    expect(screen.getByText("Please check back later.")).toBeInTheDocument();

    // Ensure no links are rendered
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
