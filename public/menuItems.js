export const menuItems = [
  {
    title: "Certifications",
    url: "/certifications",
    submenu: [
      {
        title: "CMMC",
        url: "cmmc",
      },
      {
        title: "CMMI v2.0",
        url: "/cmmi_v2.0",
        submenu: [
          { title: "CMMI-SVC v2.0 (Services)", url: "cmmi_svc_v2.0 " },
          { title: "CMMI-DEV v2.0 (Development)", url: "cmmi_dev_v2.0" },
          { title: "Agile Methodology", url: "agile" },
        ],
      },
      {
        title: "ISO",
        url: "/iso",
        submenu: [
          { title: "9000", url: "iso_9000 " },
          { title: "20000", url: "iso_20000" },
          { title: "13485", url: "iso_13485" },
          { title: "27000", url: "iso_27000" },
          { title: "30000", url: "iso_30000" },
        ],
      },
      {
        title: "NIST 800 series",
        url: "/nist",
        submenu: [
          { title: "800-53", url: "nist_800-53" },
          { title: "800-171", url: "nist_800-171" },
          { title: "800-172", url: "nist_800-172" },
          { title: "More...", url: "nist_etc " },
        ],
      },
    ],
  },
  {
    title: "Systems Engineering",
    url: "/systems_engineering",
    submenu: [
      {
        title: "1",
        url: "1",
      },
      {
        title: "2",
        url: "2",
      },
      {
        title: "3",
        url: "3",
      },
      {
        title: "x",
        url: "x",
      },
    ],
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Demo Homepage",
    url: "/htmlhomepage",
  },
];
