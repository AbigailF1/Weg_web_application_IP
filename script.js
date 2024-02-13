let swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 5 ,
}) 

// start profile popup

// window Scroll
window.addEventListener('scroll', ()=>{
    document.querySelector('.profile-popup').style.display= 'none'
})

document.querySelectorAll('#my-profile-picture').forEach(AllProfile =>{
    AllProfile.addEventListener('click', ()=>{
        document.querySelector('.profile-popup').style.display="flex"

    })
});

document.querySelectorAll('.close').forEach(AllProfile => {
    AllProfile.addEventListener('click', ()=>{
        document.querySelector('.popup').style.display="none"

    })
})

document.querySelector('#profile-upload').addEventListener('change', () =>{
    document.querySelectorAll('#my-profile-picture img').forEach(AllMyProfileImg=>{
        AllMyProfileImg.src= URL.createObjectURL(document.querySelector('#profile-upload').files[0])
    })
})

