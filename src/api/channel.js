/**
 * 频道相关接口封装模块
 */
import request from '@/utils/request'

/**
 * 获取用户频道列表
 * 如果没有登录则返回默认推荐的频道列表
 * 如果登录了，则返回用户频道列表
 */
export const getUserChannels = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}

/**
 *
 * 重置用户频道列表
 */
export const resetUserChannels = channels => {
  return request({
    method: 'PUT',
    url: '/app/v1_0/user/channels',
    data: {
      channels
    }
  })
}

/**
 *
 * 获取所有频道列表
 */
export const getAllChannels = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/channels'
  })
}

/**
 *
 * 删除用户指定频道
 */
export const deleteUserChannel = channelId => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/user/channels/${channelId}`
  })
}

/**
 *
 * 批量修改用户频道列表（部分覆盖）
 * channels []
 *  { id: 频道id, seq: 频道的序号 }
 * 后端在保存用户频道的时候为每一个频道设置了一个序号，从 1 开始
 * 注意：“推荐”频道不参与序号的排列
 */
export const updateUserChannel = channels => {
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/channels',
    data: {
      channels
    }
  })
}

/**
 *
 * 删除用户指定频道
 */
// export const deleteUserChannel = channelId => {
//   return request({
//     method: 'DELETE',
//     url: `/app/v1_0/user/channels/${channelId}`
//   })
// }

/**
 *
 * 删除用户指定频道
 */
// export const deleteUserChannel = channelId => {
//   return request({
//     method: 'DELETE',
//     url: `/app/v1_0/user/channels/${channelId}`
//   })
// }
