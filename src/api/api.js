import { getAction, postAction } from '@/api/manage'

const getList = (params) => postAction('/business/approval/approvalLists', params)

const getListsss = (params) => getAction('/business/approval/approvalLists', params)

export {
  getList,
  getListsss
}
