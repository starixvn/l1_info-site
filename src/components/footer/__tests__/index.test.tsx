import React from "react";
import { render } from "@testing-library/react";
import Footer from "..";

describe("Footer", () => {
    it("renders the correct text", () => {
        render(<Footer />);

        expect(document.querySelector(".footer")).toBeTruthy();
    });
});
