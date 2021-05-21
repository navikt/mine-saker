export const baseBreadcrumbs = [
  {
    url: "https://www.nav.no/person/dittnav",
    title: "Ditt NAV",
    handleInApp: false,
  },
  {
    url: "https://www.nav.no/person/mine-saker",
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
