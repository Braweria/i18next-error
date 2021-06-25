import { makeStyles, Grid } from "@material-ui/core";
import { useContext, useState, createContext } from "react";

const useStyles = makeStyles((theme) => ({
  content: {
    flexWrap: "nowrap",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    height: "100%",
  },
}));

export const PrimaryTabContext = createContext();
PrimaryTabContext.displayName = "Primary Active Tab Context";

export default function ContentLayout(props) {
  const { tabs, outlineType, children } = props;
  const [activeTab, setActiveTab] = useState(0);

  const classes = useStyles();
  return <>{children}</>;
}

export const getContentLayout = (page, props) => (
  <ContentLayout
    tabs={props.tabs}
    outlineType={props.outlineType}
    title={props.title}
  >
    {page}
  </ContentLayout>
);

export const usePrimaryTabContext = () => {
  const context = useContext(PrimaryTabContext);
  if (context === undefined) {
    throw new Error(
      "usePrimaryTabContext must be used within a PrimaryTabContext.Provider."
    );
  }
  return context;
};
