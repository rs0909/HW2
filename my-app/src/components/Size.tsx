import {style} from "@macaron-css/core";

export const sizeStyles = {
  header: style({
    height: "72px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    border: "2px solid",
    borderTop: "0",
    borderLeft: "0",
    borderRight: "0",
    borderColor: "#36393d",
    backgroundColor: "#272b32",
    color: "white",
  }),
  sidePanel: style({
    display: "flex",
    width: "400px",
    flexDirection: "column",
    flexShrink: "0",
    backgroundColor: "#272b32",
  }),
  sidePanelList: style({
    width: "100%",
    height: "40vh",
    border: "2px solid",
    borderTop: "0",
    borderLeft: "0",
    borderRight: "0",
    display: "flex",
    marginTop: "0.2rem",
    flexDirection: "column",
    alignItems: "center",
    flexShrink: "0",
    color: "white",
    backgroundColor: "transparent",
    borderColor: "#36393d",
    ":last-child": {
      borderBottom: "0",
    },
  }),
  sidePanelItem: style({
    height: "52px",
    width: "90%",
    display: "flex",
    borderRadius: "4px",
    flexShrink: "0",
    alignItems: "center",
    paddingLeft: "9px",
    marginBottom: "8px",
    backgroundColor: "#343940",
  }),
};
