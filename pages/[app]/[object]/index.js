import appRoutes from '../../../routes/appRoutes';
import loadObjectData from '../../../utils/loadObjects';
import { serverSideTranslation } from 'next-i18next/serverSideTranslations';

export default function ObjectPage({ object }) {
  return <h1> {object.title} </h1>;
}

export const getStaticPaths = async () => {
  const allObjects = await loadObjectData({ id: 'all' });
  const paths = allObjects.flatMap((object) => {
    return appRoutes.map((appRoute) => {
      return {
        params: {
          object: object.type,
          app: appRoute.slug,
        },
      };
    });
  });

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps = async ({ params, locale }) => {
  const object = await loadObjectData({ type: params.object });
  const app = appRoutes.find((appRoute) => appRoute?.slug === params.app);

  if (!object) {
    throw new Error(
      `${object} is not a valid Object. Try checking out your parameters: ${params.object}`
    );
  }

  if (!app) {
    throw new Error(`${app} is not a valid App.`);
  }

  return {
    props: {
      ...(await serverSideTranslation(locale, ['common'])),
      object,
      app,
    },
  };
};
