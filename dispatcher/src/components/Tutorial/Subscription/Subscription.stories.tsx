import React from "react";
import { Primary } from "../Button/Button.stories";
import { LargeInput } from "../Input/Input.stories";

export default {
  title: "basic/Subscription",
};

export const PrimarySubscription = () => (
  <>
    <LargeInput />
    <Primary />
  </>
);
