import Project1 from "../../assets/images/ProjectPic/hotjar.png";
import Project2 from "../../assets/images/ProjectPic/fatsecret.png";
import Project3 from "../../assets/images/ProjectPic/mamearth.png";
import Project4 from "../../assets/images/ProjectPic/cnn.png";
import HTML5 from "../../assets/images/TechPic/html-5.svg";
import CSS3 from "../../assets/images/TechPic/css3.svg";
import BOOTSTRAP from "../../assets/images/TechPic/bootstrap-4.svg";
import REACT from "../../assets/images/TechPic/react.svg";
import REDUX from "../../assets/images/TechPic/redux.svg";
import REACT_ROUTER from "../../assets/images/TechPic/react-router.svg";
// import MATERIALUI from "../../assets/images/TechPic/material-ui-1.svg";
// import REACT_BOOTSTRAP from "../../assets/images/TechPic/react-bootstrap.svg";
import STYLED_COMPONENTS from "../../assets/images/TechPic/styled-components.svg";
// import NODE_JS from "../../assets/images/TechPic/nodejs.svg";
// import EXPRESS from "../../assets/images/TechPic/express.svg";
// import MONGODB from "../../assets/images/TechPic/mongodb.svg";
// import MSSQL from "../../assets/images/TechPic/mssql.svg";
import GIT from "../../assets/images/TechPic/git-icon.svg";
import HEROKU from "../../assets/images/TechPic/heroku.svg";
import GITHUB_PAGES from "../../assets/images/TechPic/github.svg";
import JAVASCRIPT from "../../assets/images/TechPic/javascript.svg";

export const projects = [
   {
      project_name: "Hotjar.com",
      project_image: Project1,
      Project_description:
         "Hotjar complements the data and insights you get from traditional web analytics tools like Google Analytics. Created in under 4 days with a team of 3 members, Tech Stack: HTML, CSS, JAVASCRIPT",
      github_link: "https://github.com/shalendrasingh/Calcium",
      deployed_link:
         "https://shalendrasingh.github.io/hotjar_clone.github.io/index.html",
      video_link:
         "https://drive.google.com/file/d/1sMbKJ1W6U3fQ6SAYIU0S3h3NW-hy_H3J/view?usp=sharing",
      technologies: [HTML5, CSS3, JAVASCRIPT, GIT, GITHUB_PAGES],
   },
   {
      project_name: "Fat Secret ",
      project_image: Project2,
      Project_description:
         "FatSecret is a mobile application, website and API that lets users track their nutrition, exercise and weight. Implemented CRUD operations with HTML, CSS, JAVASCRIPT",
      github_link: "https://github.com/udit22022000/Vanadium",
      // deployed_link:"https://drive.google.com/file/d/15eIuE5mAkoB2DrXlgGZ78kgDq-2leuXF/view?usp=sharing",
      video_link:
         "https://drive.google.com/file/d/15eIuE5mAkoB2DrXlgGZ78kgDq-2leuXF/view?usp=sharing",
      technologies: [HTML5, CSS3, JAVASCRIPT, GIT, GITHUB_PAGES],
   },
   {
      project_name: "Mamaearth.com Clone",
      project_image: Project3,
      Project_description:
         "Cloned Mamaearth.com website perfectly, a user can filter products and buy the products and add items to cart. Technologies used are Javascript, Mock API",
      github_link: "https://github.com/shalendrasingh/team_nitrogen",
      deployed_link:
         "https://shalendrasingh.github.io/mamaearth_clone.github.io/",
      video_link:
         "https://drive.google.com/file/d/1LwvzThx1_PvQ0MhyGHWHcg-2a77tj19D/view?usp=sharing",
      technologies: [
         HTML5,
         CSS3,
         JAVASCRIPT,
         BOOTSTRAP,
         HEROKU,
         GIT,
         GITHUB_PAGES,
      ],
   },
   {
      project_name: "cnnnews.com Clone",
      project_image: Project4,
      Project_description:
         "cnnnews.com is one of the famous News website. Cloned it under 4 days with a team of 4 people. Technologies used here are styled Components, React, Redux, and React-Redux.",
      github_link: "https://github.com/MaheshFSD/ethane",
      video_link:
         "https://drive.google.com/file/d/1QUyWDSzC8EqeXjrQ0MvOQ_o8jPrHRfpG/view?usp=sharing",
      technologies: [
         REACT,
         REDUX,
         STYLED_COMPONENTS,
         REACT_ROUTER,
         HEROKU,
         GITHUB_PAGES,
      ],
   },
];
