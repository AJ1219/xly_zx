import { schema } from 'normalizr';


const classSchema = new schema.Entity('classEntity', {}, {
  idAttribute: 'id'
}); //班级库
const teacherSchema = new schema.Entity('teacherEntity', {}, {
  idAttribute:'id'
}) //老师库
const studentSchema = new schema.Entity('studentEntity', {}, {
  idAttribute:'mid'
}) //学生库
const lessonSchema = new schema.Entity('lessonEntity', {}, {
  idAttribute:'time'
}) //课程库

const satisfySchema = new schema.Entity('satisfyEntity', {
  class_info:classSchema,
  teacher_info:teacherSchema
}, {
  idAttribute:'time'
}) // 满意统计库

const classItemSchema = new schema.Entity('classItemEntity', {
  classInfo:classSchema,
  teacherInfo:teacherSchema
}, {
  idAttribute: 'id'
}); // 两个表格用得到的课程中型数据库

export const SatisfySchema = {
  SATISFYLIST: [ satisfySchema ]
};
export const StudentSchema = {
  STUDENTLIST: [ studentSchema ]
};
export const LessonSchema = {
  LESSONLIST: [ lessonSchema ],
  LESSONINFO: [ classItemSchema ]
};