import pupster1 from "../assets/images/Project-images/600.jpg";
import pupster2 from "../assets/images/pupster/pupster.jpg";
import pupster3 from "../assets/images/pupster/pupster-main.png";
import pupster4 from "../assets/images/pupster/pupster-like.png";
import pupster5 from "../assets/images/pupster/pupster-search.png";
import clicky1 from "../assets/images/Project-images/clicky.png";
import clicky2 from "../assets/images/clicky-images/clicky-game.jpg";
import clicky3 from "../assets/images/clicky-images/cliky-1.png";
import clicky4 from "../assets/images/clicky-images/clicky-2.png";
import dev1 from "../assets/images/Project-images/devonline.png";
import dev2 from "../assets/images/devonline/Dev-online-1.png";
import dev3 from "../assets/images/devonline/Dev-online-2.png";
import dev4 from "../assets/images/devonline/Dev-online-4.png";
import dev5 from "../assets/images/devonline/Dev-online-5.png";

const List = [
  {
    id: "/pupster",
    urls: require("../assets/images/Project-images/600.jpg"),
    heading: "Pupster",
    detail:
      "Pupster Desktop React javascript web application build on top of the Bootstrap framework.",
  },
  {
    id: "/clicky",
    urls: require("../assets/images/Project-images/clicky.png"),
    heading: "Clicky Game",
    detail:
      "Test your memory with your favorite friends from The Simpsons. Click on each character once to win the game. But don't click on a character twice, or it's game over for you!",
  },
  {
    id: "/devonline",
    urls: require("../assets/images/Project-images/devonline.png"),
    heading: "Dev Online",
    detail:
      "Dev Online is a free, online service Bootsrap framework website with scroll reavel animation and Mobile responsive.",
  },
  {
    id: "/imovie",
    urls: require("../assets/images/Project-images/imove.jpg"),
    heading: "I Heart Movie",
    detail:
      "This is Movie Search website where you can find the newest movies and news related to movies, also you can add or read reviews.",
  },
  {
    id: "/nutrition",
    urls: require("../assets/images/Project-images/nutrition.jpg"),
    heading: "My Nutrition",
    detail:
      "MyNutriAdvisor is a free, online service providing personalized health and fitness recommendations. We are a group of developers trying to make the world a healthier place using code.",
  },
  {
    id: "/train",
    urls: require("../assets/images/Project-images/train.jpg"),
    heading: "Train Scheduler",
    detail:
      "Used Firebase to host a globally available set of data that is retrieved and manipulated using Moment.js to provide up-to-date information about various trains' arrival times and minutes to arrival.",
  },
];
export default List;

const PROJECT_LIST = {
  pupster: {
    id: 1,
    title: "Pupster",
    path: "/pupster",
    headline:
      "Pupster Desktop React javascript web application build on top of the Bootstrap framework.",
    description:
      "Pupster Desktop React javascript web application build on top of the Bootstrap framework. Project developed as a student with UCLA Coding Bootcamp, The Pupster Desktop app is a React eb application build with Bootstrap Framework. In this activity i was work to create an entire React application from scratch, complete with routing and AJAX requests to the Dog Ceo API: an API for dog images.",
    images: [pupster1, pupster2, pupster3, pupster4, pupster5],
  },
  clicky: {
    id: 2,
    title: "Clicky Game",
    path: "/clicky",
    headline:
      "Test your memory with your favorite friends from The Simpsons. Click on each character once to win the game. But don't click on a character twice, or it's game over for you!",
    description:
      "Clicky Game Desktop React javascript web application build on top of the Bootstrap framework. Project developed as a student with UCLA Coding Bootcamp, The Clicky Game Desktop app is a React eb application build with Bootstrap Framework. The app should render 12 different images of your choice to the screen. Each image should listen for click events. In this activity i was work to create an entire React application, Test your memory with your favorite friends from The Simpsons. Click on each character once to win the game. But don't click on a character twice, or it's game over for you! The app should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once. Click on each character once to win the game. But don't click on a character twice, or it's game over for you! The app should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.",
    images: [clicky1, clicky2, clicky3, clicky4],
  },
  devonline: {
    id: 2,
    title: "Dev online",
    path: "/devonline",
    headline:
      "Dev Online is a free, online service Bootsrap framework website with scroll reavel animation and Mobile responsive.",
    description:
      "Dev Online is a free, online service Bootsrap framework website with scroll reavel animation and Mobile responsive. Project developed as a student with UCLA Coding Bootcamp, The dev online Desktop app is a Bootstrap framework. Entirly project i did. Self Thought design website color scheme and button style.",
    images: [dev1, dev2, dev3, dev4, dev5],
  },
};

export const projectList = Object.keys(PROJECT_LIST).map(
  (key) => PROJECT_LIST[key]
);
console.log(projectList);
