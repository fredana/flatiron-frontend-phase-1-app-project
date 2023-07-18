document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        confirmBookingText(`Name: ${e.target.fname.value}`);
        confirmBookingText(`Guest(s) : ${e.target.adult.value} adult(s)`)
        confirmBookingText(`And : ${e.target.child.value} kid(s)`)
        confirmBookingText(`Room Size : ${e.target.typeRoom.value}`)
        confirmBookingText(`Check-in Date : ${e.target.comeIn.value}`)
        confirmBookingText(`Check-out Date : ${e.target.goOut.value}`)
        bookingConfirmationBtn(e.target.value)   
        // form.reset();
    })
})

    //****   SUBMIT & RESET BUTTON IN BOOKING A ROOM SECTION  ******

//..... Submit Button .....
function bgColorSubmit(bsbtn){
    bsbtn.target.style.backgroundColor = 'lightgreen'
    bsbtn.target.style.color ='green'
    bsbtn.target.style.fontWeight ='bold'
    bsbtn.target.style.borderRadius ='10px'
    bsbtn.target.style.fontSize ='25px'
}
function alertNotSubmit(bsbtn){
    bsbtn.target.style.backgroundColor ='white'
    bsbtn.target.style.color ='black'
    bsbtn.target.style.fontWeight ='bold'
    bsbtn.target.style.borderRadius ='1px'
    bsbtn.target.style.fontSize ='15px'
}
    
//..... Submit Button Backgroung Color .....    
function submitBtn(){
    let btn = document.querySelector('#submit')
    btn.addEventListener('mouseover', bgColorSubmit)
    btn.addEventListener('mouseleave', alertNotSubmit)
}
submitBtn()
    

    //... BG COLOR RESET BUTTON ...
    function addBgColorResetBtn(brbtn){
        brbtn.target.style.backgroundColor = 'orange'
        brbtn.target.style.color ='red'
        brbtn.target.style.fontWeight ='bold'
        brbtn.target.style.borderRadius ='10px'
        brbtn.target.style.fontSize ='25px'
    }
    function cancelBgColorResetBtn(brbtn){
        brbtn.target.style.backgroundColor = 'white'
        brbtn.target.style.color ='black'
        brbtn.target.style.fontWeight ='bold'
        brbtn.target.style.borderRadius ='1px'
        brbtn.target.style.fontSize ='15px'
    }
    
        //... RESET BOOKING VALUES ...
    function handleDelete(e){
        e.target.value.remove(); 
    }
    
        //... BOOKING RESET BUTTON ...
    function resetBtn(){
        let btn = document.querySelector('#reset')
        btn.addEventListener('mouseover', addBgColorResetBtn)
        btn.addEventListener('mouseleave', cancelBgColorResetBtn)
        btn.addEventListener('click', handleDelete)
    }
    resetBtn()


    //*****************  BOOKING CONFIRMATION SECTION  *****************

//-------  CONFIRMATION TEXT  ---------
function confirmBookingText(text){    
    let p = document.createElement('p')
    p.textContent = text 
    p.style.fontWeight='bold'  
    p.style.fontSize='25px'
    p.style.backgroundColor = 'lightgray'
    document.querySelector('#confirmation').appendChild(p)
}

function confirmMessage(){
    const list2 = document.getElementById("fill");
    list2.innerHTML = 'THANKS FOR BOOKING WITH US TODAY!. A CONFIRMATION EMAIL HAS BEEN SENT TO YOU.'
    list2.style.color = 'green'
    list2.style.backgroundColor = 'cyan'
    list2.style.fontSize = '30px'
    list2.style.fontFamily = 'cursive'
    list2.style.width = '500px'
}

//-----  CONFIRM & EDIT BUTTONS  ----

    //.... CONFIRM BUTTON ...
function bookingConfirmationBtn(){
    let btn = document.createElement('button')
    btn.textContent = 'Confirm'
    btn.style.color ='green'
    btn.style.fontWeight ='bold'
    btn.style.fontSize ='25px'
    btn.style.borderRadius ='10px'
    btn.addEventListener('mouseover', bgColorSubmit)
    btn.addEventListener('mouseleave', alertNotSubmit)
    btn.addEventListener('click', confirmMessage)
    btn.addEventListener('click', handleDelete2)

    //.... EDIT BUTTON ....
    let resetAllBtn = document.createElement('button')
    resetAllBtn.textContent = 'Edit'
    resetAllBtn.style.fontSize = '20px'
    resetAllBtn.style.borderRadius ='7px'
    resetAllBtn.addEventListener('mousemove', addBgColorResetBtn)
    resetAllBtn.addEventListener('mouseleave', cancelBgColorResetBtn)
    resetAllBtn.addEventListener('click', handleDelete2)
    resetAllBtn.addEventListener('click', handleDelete)
    
    //... DISPLAY BOTH BUTTONS ...
    document.querySelector('#confirmation').appendChild(btn)
    document.querySelector('#confirmation').appendChild(resetAllBtn)
}

//..... Delete Booking Text .....
function handleDelete2(){
    const list = document.getElementById("confirmation");

    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}

