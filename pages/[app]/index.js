import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import appRoutes from '../../routes/appRoutes';
import { useTranslation } from 'next-i18next';

export default function AppPage({ app }) {
  const { t } = useTranslation('common');
  return <h1> {t(app.name)} </h1>;
}

export const getStaticPaths = async () => {
  const paths = appRoutes.map((appRoute) => {
    const slug = appRoute.slug;

    return {
      params: {
        app: slug,
      },
    };
  });

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps = async ({ params, locale }) => {
  const app = appRoutes.find((appRoute) => appRoute?.slug === params.app);

  if (!app) {
    throw new Error(`${app} is not a valid App.`);
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['manager', 'common'])),
      app,
    },
  };
};
