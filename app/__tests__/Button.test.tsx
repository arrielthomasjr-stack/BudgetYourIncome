// Example 2: React Native Component Test
// This file demonstrates testing a React Native component

import { render, screen } from "@testing-library/react-native";
import React from "react";

import Pressable from "@/app/(onboarding)/welcome"; // Adjust the import path as necessary

describe("Button Component", () => {
  it("renders correctly", () => {
    // Check that the button is displayed with the correct text
    const button = screen.getByText("create account");
    expect(button).toBeTruthy();
  });

  it("renders without crashing", () => {
    // This test ensures the component mounts without errors
    const { toJSON } = render(<Pressable />);
    expect(toJSON()).toBeTruthy();
  });
});
