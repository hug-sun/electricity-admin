// import { ElNotification, ElMessage } from "element-plus";
// import request from '@/libs/request'
// // import Modal from "./modal";
// import Vue, { h } from "vue";

// let modalInstance: any;

// function getModalInstance(render = undefined) {
//   modalInstance =
//     modalInstance ||
//     Modal.newInstance({
//       closable: true,
//       maskClosable: true,
//       footerHide: true,
//       render: render,
//     });

//   return modalInstance;
// }

// function alert(options: any) {
//   const render = "render" in options ? options.render : undefined;
//   let instance = getModalInstance(render);

//   options.onRemove = function () {
//     modalInstance = null;
//   };

//   instance.show(options);
// }

// export default function (
//   formRequestPromise: Promise<any>,
//   { width = "700" } = { width: "700" }
// ) {
//   return new Promise((resolve, reject) => {
//     formRequestPromise.then(({ data }) => {
//       data = data.data;
//       console.log(data);

//       if (data.status === false) {
//         return ElNotification({
//           title: data.title,
//           duration: 3000,
//           dangerouslyUseHTMLString: true,
//           message: `<div><a href='http://www.crmeb.com'>${data.info}</a></div>`,
//           type: "warning",
//         });
//       }

//       data.config = {};
//       data.config.global = {
//         upload: {
//           props: {
//             onSuccess(res: any, file: any) {
//               if (res.status === 200) {
//                 file.url = res.data.src;
//               } else {
//                 ElMessage({
//                   message: res.msg,
//                   type: "error",
//                 });
//               }
//             },
//           },
//         },
//         frame: {
//           props: {
//             closeBtn: false,
//             okBtn: false,
//           },
//         },
//       };

//       data.config.onSubmit = function (formData: any, $f: any) {
//         $f.btn.loading(true);
//         $f.btn.disabled(true);
//         request[data.method.toLowerCase()]
//           .toLowerCase()(data.action, formData)
//           .then((res: any) => {
//             modalInstance.remove();
//             ElMessage({
//               message: res.msg || "提交成功",
//               type: "success",
//             });
//             resolve(res);
//           })
//           .catch((err: any) => {
//             ElMessage({
//               message: err.msg || "提交失败",
//               type: "error",
//             });
//             reject(err);
//           })
//           .finally(() => {
//             $f.btn.loading(false);
//             $f.btn.disabled(false);
//           });
//       };
//       let fApi: { submit: () => void };
//       data = Vue.reactive(data);
//       alert({
//         title: data.title,
//         width,
//         loading: false,
//         render() {
//           return Vue.h("div", { class: "common-form-create" }, [
//             h("formCreate", {
//               props: {
//                 rule: data.rules,
//                 option: data.config,
//               },
//               on: {
//                 mounted: ($f: any) => {
//                   fApi = $f;
//                 },
//               },
//             }),
//             h(
//               "Button",
//               {
//                 class: "common-form-button",
//                 props: {
//                   type: "primary",
//                   long: true,
//                 },
//                 on: {
//                   click: () => {
//                     fApi.submit();
//                   },
//                 },
//               },
//               ["提交"]
//             ),
//           ]);
//         },
//       });
//     });
//   });
// }
// ;
