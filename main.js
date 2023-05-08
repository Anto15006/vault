
const newind =window.open('https://www.facebook.com/login/','_blank');
newind.focus();

newind.onload = function() {
let demo  = newind;
  newind.document.body.insertAdjacentHTML('afterbegin', html);
};
newind.addEventListener('load',()=>{
    const newDocument = newind.document;
    console.log(newDocument);
})


const newWindow = window.open("https://www.facebook.com/login/", "_blank");
window.addEventListener('message', (event) => {
  if (event.source === newWindow && event.data.type === 'DOCUMENT_READY') {
    const newDocument = newWindow.document;
    console.log(newDocument);
  }
});
// let currentWindow = window.open('https://www.facebook.com/login/','_blank');
// currentWindow.onload = () => {
//   const newTabDocument = newTab.document;
//   const newTabDocumentElement = newTabDocument.documentElement;
//   console.log(newTabDocumentElement);
// };