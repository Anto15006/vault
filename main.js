
// const newind =window.open('https://www.zoho.com/sheet/login.html','_blank');
// debugger;
// newind.addEventListener('load',()=>{
//     const newDocument = newind.document;
//     console.log(newDocument);
// })
// const newWindow = window.open("https://www.educative.io/", "_blank");
// debugger;
// window.addEventListener('message', (event) => {
//   if (event.source === newWindow && event.data.type === 'DOCUMENT_READY') {
//     const newDocument = newWindow.document;
//     console.log(newDocument);
//   }
// });
let currentWindow = window.open('http://3.139.138.221:8080/jenkins/login','_blank');
currentWindow.onload = () => {
  const newTabDocument = newTab.document;
  const newTabDocumentElement = newTabDocument.documentElement;
  console.log(newTabDocumentElement);
};