// Example 2: React Native Component Test
// This file demonstrates testing a React Native component

import { render, screen } from "@testing-library/react-native";
import React from "react";
import WelcomeScreen from "../(onboarding)/welcome";

describe("WelcomeScreen", () => {
  it("renders the title", () => {
    // Check that the title is displayed on the screen
    render(<WelcomeScreen />);
    const title = screen.getByText("Budget\nYour\nIncome\n");
    expect(title).toBeTruthy();
  });
});

//   it("renders without crashing", () => {
//     // This test ensures the component mounts without errors
//     const { toJSON } = render(<Pressable />);
//     expect(toJSON()).toBeTruthy();
//   });
// });
