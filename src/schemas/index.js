import { schema } from 'normalizr';


const classSchema = new schema.Entity('classEntity', {}, {
  idAttribute: 'id'
});
const teacherSchema = new schema.Entity('teacherEntity', {}, {
  idAttribute:'id'
})

const satisfySchema = new schema.Entity('satisfyEntity', {
  class_info:classSchema,
  teacher_info:teacherSchema
}, {
  idAttribute:'time'
})

export const SatisfySchema = {
  SATISFYLIST: [ satisfySchema ]
};