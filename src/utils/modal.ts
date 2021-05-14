// import { h } from "vue";
// import Message from 'element3/src/components/Message/src/Message.vue'
// import Button from 'element3/src/components/Button/src/Button.vue'

// const prefixCls = 'ivu-modal-alert'

// Message.newInstance = (properties:any) => {
//     const _props = properties || {}

//     const Instance = Vue.createApp({
//         data: Object.assign({}, _props, {
//             visible: false,
//             width: 416,
//             title: '',
//             body: '',
//             iconType: '',
//             iconName: '',
//             okText: undefined,
//             cancelText: undefined,
//             showCancel: false,
//             loading: false,
//             buttonLoading: false,
//             scrollable: false,
//             closable: true,
//             closing: false // 关闭有动画，期间使用此属性避免重复点击
//         }),
//         render () {
//             let footerVNodes = []
//             if (this.showCancel) {
//                 footerVNodes.push(h(Button, {
//                     props: {
//                         type: 'text',
//                         size: 'large'
//                     },
//                     on: {
//                         click: this.cancel
//                     }
//                 }, this.localeCancelText))
//             }
//             let body_render
//             if (this.render) {
//                 body_render = h('div', {
//                     attrs: {
//                         class: `${prefixCls}-body ${prefixCls}-body-render`
//                     }
//                 }, [this.render(h)])
//             } else {
//                 body_render = h('div', {
//                     attrs: {
//                         class: `${prefixCls}-body`
//                     }
//                 }, [
//                     h('div', {
//                         domProps: {
//                             innerHTML: this.body
//                         }
//                     })
//                 ])
//             }

//             // when render with no title, hide head
//             let head_render
//             if (this.title) {
//                 head_render = h('div', {
//                     attrs: {
//                         class: `${prefixCls}-head`
//                     },
//                     slot: 'header'
//                 }, [
//                     h('h2', {
//                         attrs: {
//                             class: `${prefixCls}-head-title`
//                         },
//                         domProps: {
//                             innerHTML: this.title,
//                             style: 'margin-bottom: 10px;'
//                         }
//                     })
//                 ])
//             }

//             return Vue.h(Message, {
//                 props: Object.assign({}, _props, {
//                     width: this.width,
//                     scrollable: this.scrollable,
//                     closable: this.closable
//                 }),
//                 domProps: {
//                     value: this.visible
//                 },
//                 on: {
//                     input: (status:any) => {
//                         this.visible = status
//                     },
//                     'on-cancel': this.cancel
//                 }
//             }, [
//                 h('div', {
//                     attrs: {
//                         class: prefixCls
//                     }
//                 }, [
//                     head_render,
//                     body_render,
//                     h('div', {
//                         attrs: {
//                             class: `${prefixCls}-footer`
//                         }
//                     }, footerVNodes)
//                 ])
//             ])
//         },
//         computed: {
//             iconTypeCls () {
//                 return [
//                     `${prefixCls}-head-icon`,
//                     `${prefixCls}-head-icon-${this.iconType}`
//                 ]
//             },
//             iconNameCls () {
//                 return [
//                     'ivu-icon',
//                     `ivu-icon-${this.iconName}`
//                 ]
//             },
//             localeOkText () {
//                 if (this.okText) {
//                     return this.okText
//                 } else {
//                     return this.t('i.modal.okText')
//                 }
//             },
//             localeCancelText () {
//                 if (this.cancelText) {
//                     return this.cancelText
//                 } else {
//                     return this.t('i.modal.cancelText')
//                 }
//             }
//         },
//         methods: {
//             cancel () {
//                 if (this.closing) return
//                 this.$children[0].visible = false
//                 this.buttonLoading = false
//                 this.onCancel()
//                 this.remove()
//             },
//             ok () {
//                 if (this.closing) return
//                 if (this.loading) {
//                     this.buttonLoading = true
//                 } else {
//                     this.$children[0].visible = false
//                     this.remove()
//                 }
//                 this.onOk()
//             },
//             remove () {
//                 this.closing = true
//                 setTimeout(() => {
//                     this.closing = false
//                     this.destroy()
//                 }, 300)
//             },
//             destroy () {
//                 this.$destroy()
//                 if (this.$el) {
//                     document.body.removeChild(this.$el)
//                 }
//                 this.onRemove()
//             },
//         }
//     })

//     const component = Instance.mount('')
//     document.body.appendChild(component.$el)
//     // const message = Instance.$children[0]

//     return {
//         // show (props: any) {
//         //   message.$parent.showCancel = props.showCancel
//         //   message.$parent.iconType = props.icon

//         //     switch (props.icon) {
//         //     case 'info':
//         //       message.$parent.iconName = 'ios-information-circle'
//         //         break
//         //     case 'success':
//         //       message.$parent.iconName = 'ios-checkmark-circle'
//         //         break
//         //     case 'warning':
//         //       message.$parent.iconName = 'ios-alert'
//         //         break
//         //     case 'error':
//         //       message.$parent.iconName = 'ios-close-circle'
//         //         break
//         //     case 'confirm':
//         //       message.$parent.iconName = 'ios-help-circle'
//         //         break
//         //     }

//         //     if ('width' in props) {
//         //       message.$parent.width = props.width
//         //     }

//         //     if ('closable' in props) {
//         //       message.$parent.closable = props.closable
//         //     }

//         //     if ('title' in props) {
//         //       message.$parent.title = props.title
//         //     }

//         //     if ('content' in props) {
//         //       message.$parent.body = props.content
//         //     }

//         //     if ('okText' in props) {
//         //       message.$parent.okText = props.okText
//         //     }

//         //     if ('cancelText' in props) {
//         //       message.$parent.cancelText = props.cancelText
//         //     }

//         //     if ('onCancel' in props) {
//         //       message.$parent.onCancel = props.onCancel
//         //     }

//         //     if ('onOk' in props) {
//         //       message.$parent.onOk = props.onOk
//         //     }

//         //     // async for ok
//         //     if ('loading' in props) {
//         //       message.$parent.loading = props.loading
//         //     }

//         //     if ('scrollable' in props) {
//         //       message.$parent.scrollable = props.scrollable
//         //     }

//         //     // notice when component destroy
//         //     message.$parent.onRemove = props.onRemove

//         //     message.visible = true
//         // },
//         // remove () {
//         //   message.visible = false
//         //   message.$parent.buttonLoading = false
//         //   message.$parent.remove()
//         // },
//         // component: message
//     }
// }

// export default Message
