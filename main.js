document.querySelector('#fill').addEventListener('submit', handleSubmit)

    function handleSubmit(e){
        e.preventDefault()
        let guestObj = {
            fname: e.target.fname.value,
            contact: e.target.contact.value,
            adult: e.target.adult.value,
            child : e.target.child.value,
            typeRoom : e.target.typeRoom.value,
            comeIn : e.target.comeIn.value,
            goOut : e.target.goOut.value
        }
        renderOneGuest(guestObj)
        confirmGuest(guestObj)
        bookingConfirmationBtn()
    }

    //DOM RENDER FUNCTIONS
    function renderOneGuest(guest){
        let card = document.createElement('li')
        card.className = 'card'
        card.innerHTML = `
            <div class="content">
            <h4>${guest.fname}</h4>
            <p>
                Contact: <span class="room">${guest.contact}</span> 
            </p>
            <p>
               <span class="room">${guest.adult}</span> Adult(s)
            </p>
            <p>
                <span class="room">${guest.child}</span> Kid(s)
            </p>
            <p>
                Prefered Room: <span class="room">${guest.typeRoom}</span> 
            </p>
            <p>
                Checking In: <span class="enter">${guest.comeIn}</span>
            </p>
            <p>
                Checking Out: <span class="exit">${guest.goOut}</span> 
            </p>
        </div>
        `

    //ADD GUEST CARD TO DOM
    document.querySelector('#bookingList').appendChild(card)
    }

    //FETCH REQUESTS

    function getAllGuests(){
        fetch('http://localhost:3000/guestData')
        .then(res => res.json())
        .then(guestData => guestData.forEach(guest => renderOneGuest(guest)))
    }

    function confirmGuest(guestObj){
        fetch('http://localhost:3000/guestData',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(guestObj)
        })
        .then(res => res.json())
        .then(guest => console.log(guest))
    }


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
    function handleDelete(){
        let editValue = document.getElementById('bookingList')
        editValue.innerHTML = ''
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
    const list2 = document.getElementById("bookingList");
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
    

    //.... EDIT BUTTON ....
    let resetAllBtn = document.createElement('button')
    resetAllBtn.textContent = 'Edit'
    resetAllBtn.style.fontSize = '20px'
    resetAllBtn.style.borderRadius ='7px'
    resetAllBtn.addEventListener('mousemove', addBgColorResetBtn)
    resetAllBtn.addEventListener('mouseleave', cancelBgColorResetBtn)
    resetAllBtn.addEventListener('click', handleDelete)
    
    //... DISPLAY BOTH BUTTONS ...
    document.querySelector('#bookingList').appendChild(btn)
    document.querySelector('#bookingList').appendChild(resetAllBtn)
}


