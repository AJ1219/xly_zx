import Game2048 from "./container/Game2048"
import UserCenter from "./container/UserCenter"
import StudentsLib from "./container/StudentsLib"
import ClassDetail from "./container/ClassDetail"
import AppWrapper from "./container/AppWrapper"
import HomeworkReview from "./container/HomeworkReview"

const routeConfig = {
  path: "/",
  component: AppWrapper,
  indexRoute: { component: HomeworkReview },
  childRoutes: [
    { path: "homeworkReview", component: HomeworkReview },
    { path: "studentsLib", component: StudentsLib },
    { path: "userCenter/:mid", component: UserCenter },
    { path: "classDetail/:classId", component: ClassDetail },
    { path: "game2048", component: Game2048 }
  ]
}

export default routeConfig
