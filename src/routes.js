import { DataDriven, Homepage,HowWeRecruit,SalesSkills,Styleguide } from "./pages"


const routes = [
  {
    path:'/',
    component: Homepage,
    exact: true,
  },
  {
    path:'/style-guide',
    component: Styleguide,
    exact: false,
  },
  {
    path:'/sales-skills',
    component: SalesSkills,
    exact: false,
  },
  {
    path:'/how-we-recruit',
    component: HowWeRecruit,
    exact: false,
  },
  {
    path:'/data-driven',
    component: DataDriven,
    exact: false,
  },
]


export default routes
