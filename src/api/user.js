/**
 * 用户相关接口封装模块
 * 最佳实践：建议将所有请求都封装成一个一个的小函数，在需要的时候直接调用
 *   好处：1. 好维护，统一管理 2. 可重用
 * 遵循一个原则：不要直接在组件中发请求，都封装成函数进行调用
 */
import request from '@/utils/request'

export const login = ({ mobile, code }) => {
  // 其它逻辑。。。
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}

/**
 * 拉黑用户（添加黑名单）
 */
export const addBlacklist = userId => {
  return request({
    method: 'POST',
    url: '/app/v1_0/user/blacklists',
    data: {
      target: userId
    }
  })
}

/**
 * 关注用户
 */
export const followUser = userId => {
  return request({
    method: 'POST',
    url: '/app/v1_0/user/followings',
    data: {
      target: userId
    }
  })
}

/**
 * 取消关注用户
 */
export const unFollowUser = userId => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/user/followings/${userId}`
  })
}

/**
 * 获取用户自己信息
 */
export const getMyInfo = () => {
  return request({
    method: 'GET',
    url: `/app/v1_0/user`
  })
}

/**
 * 获取用于编辑的用户信息
 */
export const getUserProfile = () => {
  return request({
    method: 'GET',
    url: `/app/v1_0/user/profile`
  })
}

/**
 * 获取用于编辑的用户信息
 */
export const updateUserProfile = ({
  name = null,
  photo = null,
  gender = null,
  birthday = null,
  realName = null,
  idNumber = null,
  idCardFront = null,
  idCardBack = null,
  idCardHandheld = null,
  intro = null
}) => {
  return request({
    method: 'PATCH',
    url: `/app/v1_0/user/profile`,
    data: {
      name,
      photo,
      gender,
      birthday,
      real_name: realName,
      id_number: idNumber,
      id_card_front: idCardFront,
      id_card_back: idCardBack,
      id_card_handheld: idCardHandheld,
      intro
    }
  })
}

/**
 * 更新用户头像|身份证照片
 */
export const updateUserProfilePhoto = formData => {
  return request({
    method: 'PATCH',
    url: `/app/v1_0/user/photo`,
    // Content-Type 为 multipart/form-data 需要传递 FormData
    data: formData

    // 注意：对象只适用于 Content-Type 为 application/json 的数据格式
    // data: {
    //   photo,
    //   id_card_front: idCardFront,
    //   id_card_back: idCardBack,
    //   id_card_handheld: idCardHandheld
    // }
  })
}
