// @ts-ignore
import { navbar } from "vuepress-theme-hope"

export default navbar([
  "/",
  {
    text: "导航",
    icon: "context",
    prefix: "/",
    children: [
      {
        text: "前端",
        prefix: "front-end/",
        children: [
          "HTML5",
          "CSS",
          "JavaScript",
          "JavaScript-Algo",
          "TypeScript",
          "Ajax",
          "Nodejs",
          "Git",
          "Webpack",
          "React",
          "Vue",
          "Wxapp"
        ]
      },
      {
        text: "后端",
        prefix: "after-end/",
        children: [
          "Java",
          "Java-Algo",
          "MySQL",
          "JDBC",
          "JavaWeb",
          "Python"
        ]
      }
    ]
  },
  {
    text: "构建文档",
    link: "https://theme-hope.vuejs.press/zh/"
  }
])
