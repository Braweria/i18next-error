import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: 0,
    height: "100vh",
  },
  bodyWrapper: {
    display: "flex",
    flexDirection: "row",
    height: `calc(100% - ${theme.spacing(8)}px)`,
  },
  mainWrapper: {
    alignContent: "flex-start",
    flexDirection: "column",
    flexWrap: "nowrap",
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();

  const router = useRouter();
  const {
    query: { app },
  } = router;

  return (
    <div className={classes.wrapper}>
      <Box className={classes.bodyWrapper}>
        <ul>
          <li>
            <Link
              href={{
                pathname: "/[app]/[menuItem]",
                query: { app, menuItem: "manager" },
              }}
            >
              <a>Manager</a>
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/[app]/[menuItem]",
                query: { app, menuItem: "feed" },
              }}
            >
              <a>Feed</a>
            </Link>
          </li>
        </ul>
        <Grid container className={classes.mainWrapper}>
          {children}
        </Grid>
      </Box>
    </div>
  );
}
