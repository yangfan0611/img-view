import { getAction, postAction } from '@/api/manage'

const getList = (params) => postAction('api/memberList', params)

const getListsss = (params) => getAction('api/memberList', params)

export {
  getList,
  getListsss
}
