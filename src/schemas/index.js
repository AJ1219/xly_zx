import { schema } from "normalizr"


const classSchema = new schema.Entity("classEntity", {}, {
  idAttribute: "id"
}) // 班级库 98838:{id: 98838, name: "摄影班"}
const teacherSchema = new schema.Entity("teacherEntity", {}, {
  idAttribute: "id"
}) // 老师库: 76544:{nick: "小白老师", id: 76544, wx_code: "fgg", real_name: "白帆", mid: "98676"}
const studentSchema = new schema.Entity("studentEntity", {}, {
  idAttribute: "mid"
}) // 学生库 1001:{nick: "小年糕", mid: 1001, hurl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", enter_time: "2018-03-28", start_time: "2018-03-29", …
const lessonSchema = new schema.Entity("lessonEntity", {}, {
  idAttribute: "time"
}) // 课程库 2017-1-2:{course_name: "夜晚拍摄光鬼8", time: "2017-1-2", enter_status: 0, homework_status: 0, review_status: -1, …}

const satisfySchema = new schema.Entity("satisfyEntity", {
  class_info: classSchema,
  teacher_info: teacherSchema
}, {
  idAttribute: "time"
}) // 满意统计库 2017-1-2:{class_info: 98858, course_name: "夜晚拍摄光鬼", time: "2017-1-2", teacher_info: 76544, satisfied_score: 5, …}

const classItemSchema = new schema.Entity("classItemEntity", {
  classInfo: classSchema,
  teacherInfo: teacherSchema
}, {
  idAttribute: "id"
}) // 两个表格用得到的课程中型数据库  98856:{id: 98856, classInfo: 98856, status: 1, startTime: "2017-04-20", teacherInfo: 76544, …}

const authorSchema = new schema.Entity("authorEntity", {}, {
  idAttribute: "mid"
}) // 作业的作者库 {mid:1001,nick:"小年糕"}
const commentSchema = new schema.Entity("commentEntity", {}, {
  idAttribute: "id"
}) // 作业的评论库
const homeworkSchema = new schema.Entity("homeworkEntity", {
  author: authorSchema,
  classInfo: classSchema,
  teacherInfo: teacherSchema,
  comments: [commentSchema]
}, {
  idAttribute: "id"
}) // 作业库


export const SatisfySchema = {
  SATISFYLIST: [satisfySchema]
}
export const StudentSchema = {
  STUDENTLIST: [studentSchema]
}
export const LessonSchema = {
  LESSONLIST: [lessonSchema],
  LESSONINFO: [classItemSchema]
}
export const HomeworkSchema = {
  HOMEWORKLIST: [homeworkSchema]
}
