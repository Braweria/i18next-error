import { createContext, useContext, useState } from "react";
import { getContentLayout } from "../../components/layouts/ContentLayout";
import appRoutes from "../../routes/appRoutes";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const ActiveTask = createContext(null);
ActiveTask.displayName = "Active Task";

export function useActiveTask() {
  const context = useContext(ActiveTask);
  if (context === undefined) {
    throw new Error(
      "useActiveTask must be used within a ActiveTask.Provider Component."
    );
  }
  return context;
}

/**
 * Component for the Page Planner
 * Planner is the page with the Gantt Chart and the Kanban Board
 * @GanttChart
 * @KanbanBoard
 */

const Manager = () => {
  return (
    <>
      <h1>Manager</h1>
    </>
  );
};

Manager.getLayout = () => {
  const { t } = useTranslation("manager");
  return getContentLayout(<Manager />, {
    tabs: [t("overview"), t("tasks"), t("notes")],
    outlineType: "manager",
    title: t("title"),
  });
};

export const getStaticPaths = async () => {
  const paths = appRoutes.map((appRoute) => {
    const slug = appRoute.slug;

    return {
      params: {
        app: slug,
        manager: "manager",
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
      ...(await serverSideTranslations(locale, ["manager", "common"])),
    },
  };
};

export default Manager;
