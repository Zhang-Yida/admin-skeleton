import Mock from 'mockjs'
import user from './data/user'

const mockInfos = [
  ...user
]

mockInfos.map(mockRoute => {
  Mock.mock(mockRoute.url, mockRoute.method, mockRoute.response)
})
