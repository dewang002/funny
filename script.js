let toast = document.querySelector(".toast");
const bell = document.querySelector(".bell")

bell.addEventListener("click",()=>{
    showToast()
})

function showToast() {
    toast.classList.add("show");
    let audio = new Audio("https://www.myinstants.com/media/sounds/windows-notification.mp3");
    audio.play();
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}
