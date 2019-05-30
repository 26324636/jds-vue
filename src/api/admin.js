import request from '@/utils/request'

export function getUserList(query) {
  return request({
    url: '/Admin/user_list',
    method: 'get',
    params: query
  })
}
