const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropdownMenu = document.querySelector('.dropdownmenu')

toggleBtn.onclick = function(){
    dropdownMenu.classList.toggle('open')
    const isOpen = document.classList.contains('open')
    
    toggleBtnIcon.classList = isOpen
    ?'fa-solid fa-Xmark'
    :'fa-solid fa-bars'
}
toggleBtnIcon.addEventListener = function(){
    
}