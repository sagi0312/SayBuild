import { Component, COMPONENT_TYPE } from "@/lib/types";
import { v4 as uuid } from "uuid";

export const SAMPLE_DATA: Component = {
  key: uuid(),
  type: COMPONENT_TYPE.Box,
  props: {
    backgroundColor: "#c4f9edff",
    children: [
      {
        key: uuid(),
        type: COMPONENT_TYPE.Text,
        props: {
          color: "#3980eaff",
          fontSize: 48,
          fontWeight: 900,
          text: "Speak commands, and watch it appear live",
        },
      },
      {
        key: uuid(),
        type: COMPONENT_TYPE.Text,
        props: {
          color: "black",
          fontSize: 20,
          fontWeight: 500,
          text: "Voice input with the Web Speech API (toggle mic on/off).",
        },
      },
      {
        key: uuid(),
        type: COMPONENT_TYPE.Box,
        props: {
          padding: 16,
          width: 200,
          backgroundColor: "#4e39eaff",
          children: [
            {
              key: uuid(),
              type: COMPONENT_TYPE.Text,
              props: {
                color: "white",
                text: "SIGN UP FREE",
              },
            },
          ],
        },
      },
      {
        key: uuid(),
        type: COMPONENT_TYPE.Box,
        props: {
          padding: 16,
          width: 200,
          backgroundColor: "black",
          children: [
            {
              key: uuid(),
              type: COMPONENT_TYPE.Text,
              props: {
                color: "white",
                text: "REQUEST A DEMO",
              },
            },
          ],
        },
      },
      {
        key: uuid(),
        type: COMPONENT_TYPE.Button,
        props: {
          text: "LEARN MORE",
          backgroundColor: "gray",
        },
      },
    ],
  },
};
