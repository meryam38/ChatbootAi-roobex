const btn = document.querySelector(" .btn") ;
btn.onclick = (e)=>{
    console.log("clike");
    window.location.href = 'chat.html';
    e.preventDefault();
}
const btn1 = document.querySelector(" span .button-text") ;
btn1.onclick = (e)=>{
    console.log("clike");
    window.location.href = 'https://platform.openai.com/docs/guides/code';
    e.preventDefault();
}