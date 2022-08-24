export const baseBreadcrumbs = [
  {
    url: "https://www.nav.no/minside",
    title: "Min side",
    handleInApp: false,
  },
  {
    url: "/mine-saker",
    title: "Mine Saker",
    handleInApp: true,
  },
];

export const createCrumb = (url, title) => {
  return {
    url: url,
    title: title,
    handleInApp: true,
  };
};
