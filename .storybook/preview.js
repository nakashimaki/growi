import '!style-loader!css-loader!sass-loader!../src/styles/styles.scss';
import { configure, addDecorator } from "@storybook/react";
import React from "react";
import '~/styles/styles.scss';

addDecorator((storyFn) => (
  <>
    {storyFn()}
  </>
));

const req = require.context("../src", true, /\.stories\.tsx$/);
configure(req, module);
