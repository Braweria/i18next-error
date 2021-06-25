import appRoutes from "../../routes/appRoutes";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Feed = () => {
  return <h1>Feed</h1>;
};

export const getStaticPaths = async () => {
  const paths = appRoutes.map((appRoute) => {
    const slug = appRoute.slug;

    return {
      params: {
        app: slug,
        feed: "feed",
      },
    };
  });

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["feed", "common"])),
    },
  };
};

export default Feed;
