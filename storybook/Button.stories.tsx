import * as React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs/react";


(storiesOf("Components/Button", module) as any).addWithJSX(
  "bk Button",
    (() => (
    <div>{'Karthikeyan'}</div>
  ))
);