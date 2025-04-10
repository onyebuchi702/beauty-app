import { render, screen } from "@testing-library/react";
import { LinkComponent } from "@/components/atom";
import "@testing-library/jest-dom";

jest.mock("next/link", () => {
  return ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
      <a href={href} data-testid="next-link">
        {children}
      </a>
    );
  };
});

describe("LinkComponent", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <LinkComponent href="/test-link">Test Link</LinkComponent>
    );
    expect(container).toBeInTheDocument();
  });

  it("passes href to Next.js Link component", () => {
    render(<LinkComponent href="/test-link">Test Link</LinkComponent>);

    const link = screen.getByTestId("next-link");
    expect(link).toHaveAttribute("href", "/test-link");
  });

  it("renders children correctly", () => {
    render(
      <LinkComponent href="/test-link">
        <span>Test Child</span>
      </LinkComponent>
    );

    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("renders complex children", () => {
    render(
      <LinkComponent href="/test-link">
        <h2>Heading</h2>
        <p>Paragraph</p>
      </LinkComponent>
    );

    expect(screen.getByText("Heading")).toBeInTheDocument();
    expect(screen.getByText("Paragraph")).toBeInTheDocument();
  });
});
