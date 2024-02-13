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

document.querySelectorAll('#profile-upload').forEach(input => {
    input.addEventListener('change', () => {
        document.querySelectorAll('#my-profile-picture img').forEach(AllMyProfileImg => {
            AllMyProfileImg.src = URL.createObjectURL(input.files[0]);
        });
    });
});


// // add post
// document.querySelector('#crat-lg').addEventListener('click', () => {
//     document.querySelector('.add-post-popup').style.display = 'flex';
// });


// document.querySelectorAll('#feed-pic-upload').forEach(input => {
//     input.addEventListener('change', () => {
//         document.querySelector('#postImg').src = URL.createObjectURL(input.files[0]);
//     });
// });
