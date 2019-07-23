<template>
  <div>
    chat page
  </div>
</template>

<script>
import io from 'socket.io-client'

/**
 * 1. 建立连接
 * 发送与接收数据都是事件的形式（API的使用方式）
 * 网络通信中一个核心概念术语：Socket
 * 2. 发送数据
 *  WebSocket WebSocket.send(data)
 *  socket.emit('消息类型', 数据体)
 *    消息类型说白了就好比 http 协议中的请求路径
 *    这是 socket.io 封装之后的使用方式，目的是为了区别不同的数据
 *    消息类型都是后台指定的，就好比接口路径一样，人家设计成什么，我们就怎么使用
 * 3. 接收数据
 *  socket.on('消息类型', 数据体)
 *  这个消息类型还是由后端指定的
 *  一种方式就是后端完全主导，他说类型是什么你就怎么用
 *  有时候也需要前端
 *  socket.on('notify', 数据体)
 */

export default {
  name: 'ChatIndex',
  data () {
    return {
      socket: null
    }
  },
  created () {
    // 1. 建立连接
    const socket = io('http://ttapi.research.itcast.cn', {
      // 接口要求建立连接需要提供用户的 token
      query: { // 设置第一次建立连接的请求参数
        token: this.$store.state.user.token
      }
    })

    this.socket = socket

    // 建立连接成功调用
    socket.on('connect', function () {
      console.log('建立连接成功了 ')

      // 它是 socket.emit('message', 数据) 的简写
      // socket.send('hello')

      // 发送消息(只有连接成功了才能发送消息)
      // 参数1：消息的类型（服务端要求的）
      // 参数2：发送的数据（文本数据）
      // 参数3：发送成功的回调
      socket.emit('message', {
        msg: 'hello',
        timestamp: Date.now()
      })
    })

    // 监听特定类型的消息
    // 当服务端给我发送一个类型为 message 的消息的时候，被触发
    // message 不是乱写的，服务端指定，相当于约定的 url 地址
    socket.on('message', function (data) {
      console.log(data)
    })

    // 断开连接调用
    socket.on('disconnect', function () {})
  }
}
</script>

<style>

</style>
