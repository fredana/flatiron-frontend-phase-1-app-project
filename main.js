document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        confirmBookingText(`Name: ${e.target.fname.value}`);
        confirmBookingText(`Email: ${e.target.email.value}`);
        confirmBookingText(`Guest(s) : ${e.target.adult.value} adult(s)`)
        confirmBookingText(`And : ${e.target.child.value} kid(s)`)
        confirmBookingText(`Room Size : ${e.target.typeRoom.value}`)
        confirmBookingText(`Check-in Date : ${e.target.comeIn.value}`)
        confirmBookingText(`Check-out Date : ${e.target.goOut.value}`)
        // confirmationHeading(e.target.value)
        bookingConfirmationBtn(e.target.value)   
        // form.reset();
    })
})

//**********************************************  BOOKING CONFIRMATION SECTION  *****************
function confirmationHeading(){
    let h3 = document.createElement('h2')
    h3.textContent = 'BOOKING CONFIRMATION'
    h3.style.textDecoration = 'underline'
    h3.style.padding = '10px'
    h3.style.marginTop = '5px'
    h3.style.color = 'blue'
    h3.style.backgroundColor = 'lightblue'
    h3.style.width = '340px'
    document.querySelector('#h3').appendChild(h3)
}
confirmationHeading()