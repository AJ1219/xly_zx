import { normalize } from "normalizr"
import ActionTypes from "../const/ActionTypes"
import { StudentSchema } from "../schemas"

export default {
  fetchUserInfo: params => ({
    SERVER_API: {
      type: ActionTypes.FETCH_USER_INFO,
      endpoint: "/getUserInfo",
      params: {
        mid: params.mid
      }
    },
    mid: params.mid
  }),
  fetchStudentList: () => ({
    SERVER_API: {
      type: ActionTypes.FETCH_STUDENT_LIST,
      endpoint: "/getStudentList",
      params: {
      },
      normalizeFunc: response => normalize(response.data, StudentSchema.STUDENTLIST)
    }
  }),
  searchStudentListByOption: params => {
    const { keyName, value } = params
    return {
      type: ActionTypes.SEARCH_STUDENT_LIST_BY_OPTION,
      params: { keyName, value }
    }
  }
}
