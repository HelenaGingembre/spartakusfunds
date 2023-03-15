import buildindImg from "../../assets/images/building.jpg";
import equityImg from "../../assets/images/equity.jpg";
import market_viewImg from "../../assets/images/market-view.jpg";
import private_equityImg from "../../assets/images/private-equity.jpg";
// import oilImg from "../../assets/images/oil.jpg";

export const ownProjects = [
  {
    id: "id-6",
    label: "Phonebook",
    link: "#",
    repo: "#",
    preview: buildindImg,
    info: " application with the ability ollections of contacts.",
    tech: [
      { id: "id-1", name: "HTML5" },
      { id: "id-2", name: "CSS3" },
      { id: "id-3", name: "React.js" },
      { id: "id-4", name: "Redux" },
      { id: "id-5", name: "AJAX" },
      { id: "id-6", name: "REST API" },
      { id: "id-7", name: "Axios" },
      { id: "id-8", name: "Material-UI" },
      { id: "id-9", name: "Framer Motion" },
    ],
  },
  {
    id: "id-5",
    label: "Movies",
    link: "#",
    repo: "#",
    preview: equityImg,
    info: "App for watching .",
    tech: [
      { id: "id-1", name: "HTML5" },
      { id: "id-2", name: "CSS3" },
      { id: "id-3", name: "React.js" },
      { id: "id-4", name: "AJAX" },
      { id: "id-5", name: "REST API" },
      { id: "id-6", name: "Material-UI" },
      { id: "id-7", name: "Slugify" },
    ],
  },

  {
    id: "id-3",
    label: "Image Finder",
    link: "#",
    repo: "#",
    preview: market_viewImg,
    info: "Keyword search image app. or HTTP requests.",
    tech: [
      { id: "id-1", name: "HTML5" },
      { id: "id-2", name: "CSS3" },
      { id: "id-3", name: "React.js" },
      { id: "id-4", name: "AJAX" },
      { id: "id-5", name: "REST API" },
      { id: "id-6", name: "Axios" },
    ],
  },
  {
    id: "id-1",
    label: "Web Studio",
    link: "#",
    repo: "#",
    preview: private_equityImg,
    info: "Responsive web page layout Web Studio - effective solutions for your business.",
    tech: [
      { id: "id-1", name: "HTML5" },
      { id: "id-2", name: "SCSS" },
    ],
  },
];
