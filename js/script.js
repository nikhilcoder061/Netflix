const questions = document.querySelectorAll(".question");
function toggleFaq(item) {
    questions.forEach((v, i) => {
        // v.lastChild.previousSibling.innerText="+";
        if(v!==item){
            v.nextElementSibling.classList.remove("scale-y2");
            v.lastChild.previousSibling.innerText="+";
        }else{
            item.nextElementSibling.classList.toggle("scale-y2");
            if(item.lastChild.previousSibling.innerText=="+"){

                item.lastChild.previousSibling.innerText="x";
            }else{
                item.lastChild.previousSibling.innerText="+"
            }
        }
    })
}


function checkEmail() {
    inputValue = document.querySelector("#inputValue");
    if (inputValue.value.includes("@")) {
        console.log('hello');
    } else {
        inputValue.nextElementSibling = `<div>hello</div>`
        //    console.log(inputValue.nextElementSibling);
    }

    event.preventDefault();
}