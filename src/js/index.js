//Header
const header = document.querySelector('.header');
const headerBar = document.querySelector(".header__bar");
const headerMenu = document.querySelector(".header__menu");
const headerAltertive = document.querySelector(".header__altertive");

window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1024) {
        headerMenu.classList.remove('tohc-header-expanded');
        headerMenu.classList.add('hidden');
    }
});

document.addEventListener('click', (e) =>{
    if(headerBar.contains(e.target)){
        headerMenu.classList.toggle('hidden');
        headerMenu.classList.toggle('tohc-header-expanded');
    }
    else{
        if(headerMenu.classList.contains('tohc-header-expanded')){
            headerMenu.classList.remove('tohc-header-expanded');
            headerMenu.classList.add('hidden');
        }
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        header.classList.add("header__scroll");
        headerAltertive.classList.add("header__altertive-block");
    } else {
        header.classList.remove("header__scroll");
        headerAltertive.classList.remove("header__altertive-block");
    }
})
//End Header

//Animation khi scroll or load
const isInViewport = (element) => { // Kiểm tra phần tử có trong viewport hay không
    const rect = element.getBoundingClientRect();
    return (
        rect.top + rect.height / 2 <= window.innerHeight &&
        rect.bottom - rect.height / 2 >= 0
    );
};

const handleScrollOrLoad = (element, animationClass, state) => { // Hàm xử lý scroll hoặc load
    if (!state.hasAnimated && isInViewport(element)) {
        element.classList.add(animationClass);
        state.hasAnimated = true; // Đánh dấu đã thực hiện animation
    }
};

const discoverState = { hasAnimated: false }; // Trạng thái của từng khối
const mainFormState = { hasAnimated: false };


const discoverImg = document.querySelector('.discover__img-main'); // Áp dụng cho từng khối
const mainForm = document.querySelector('.home__main-form'); 


window.addEventListener('load', () => {
    handleScrollOrLoad(discoverImg, 'discover__img__animation', discoverState);
    handleScrollOrLoad(mainForm, 'home__main-form__animation', mainFormState);

});

window.addEventListener('scroll', () => {
    handleScrollOrLoad(discoverImg, 'discover__img__animation', discoverState);
    handleScrollOrLoad(mainForm, 'home__main-form__animation', mainFormState);

});
//End Animation khi scroll or load


//Home
const inputContainers = document.querySelectorAll('.home__main-form-name');

inputContainers.forEach((inputContainer)=>{
    inputContainer.addEventListener('click', () =>{
        const inputMain = inputContainer.querySelector('.home__main-form-name-input');
        if(inputMain) {
            inputMain.focus();
        }
    })
});
//End Home

//Customer
const customizeItems = document.querySelectorAll('.customize__item');
const customizeImg = document.querySelector('.customize__img');

customizeItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        customizeItems.forEach(i => i.classList.remove('customize-bg'));
        item.classList.add('customize-bg');

        for(let tmp = 1; tmp <=3 ; tmp++){
            customizeImg.classList.remove(`customize-img${tmp}`);
        }
        customizeImg.classList.add(`customize-img${index + 1}`);
    });
});

//End Customize
