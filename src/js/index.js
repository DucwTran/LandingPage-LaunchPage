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
const handleScrollOrLoadFeature = (element,  items, state) => { // Hàm xử lý scroll hoặc load
    if (!state.hasAnimated && isInViewport(element)) {
        items.forEach((item, index) =>{
            setTimeout(()=>{
                item.classList.add('opacity-100');
            }, index * 400);
        });
        state.hasAnimated = true; // Đánh dấu đã thực hiện animation
    }
};

const handleScrollOrLoadPrice = (element,  item, animationClass, state) => { // Hàm xử lý scroll hoặc load
    if (!state.hasAnimated && isInViewport(element)) {
        item.classList.add(animationClass);
        state.hasAnimated = true; // Đánh dấu đã thực hiện animation
    }
};
const handleScrollOrLoadPriceEnd = (element,  item, animationClass, state) => { // Hàm xử lý scroll hoặc load
    if (state.hasAnimated ) {
        setTimeout(()=>{
            item.classList.remove(animationClass);
            item.classList.remove('opacity-0');
            item.classList.remove('delay-1000');
        }, 3000);
    }
};

let discoverState = { hasAnimated: false }; // Trạng thái của từng khối
let mainFormState = { hasAnimated: false };
let portfolioState = { hasAnimated: false };
let featureState = { hasAnimated: false };
let priceState1 = { hasAnimated: false };
let priceState2 = { hasAnimated: false };
let formContactState = { hasAnimated: false };


const discoverImg = document.querySelector('.discover__img-main'); // Áp dụng cho từng khối
const mainForm = document.querySelector('.home__main-form'); 
const itemPortfolio = document.querySelector('.portfolio-items');
const feature = document.querySelector('.feature');
const contactForm = document.querySelector('.contact__input');

const price = document.querySelector('.price');
const priceMonthly = document.querySelector('.price__monthly');
const priceAnnualy = document.querySelector('.price__annualy');

const features = document.querySelectorAll('.feature__item');
const featureArr = [...features];

window.addEventListener('load', () => {
    handleScrollOrLoad(discoverImg, 'discover__img__animation', discoverState);
    handleScrollOrLoad(mainForm, 'home__main-form__animation', mainFormState);
    handleScrollOrLoad(itemPortfolio, 'portfolio__animation', portfolioState);
    handleScrollOrLoad(contactForm, 'contact__input-animation', formContactState);
    handleScrollOrLoadPrice(price, priceMonthly, 'price__animation1', priceState1);
    handleScrollOrLoadPrice(price, priceAnnualy, 'price__animation2', priceState2);
    handleScrollOrLoadPriceEnd(price, priceMonthly, 'price__animation1', priceState1);
    handleScrollOrLoadPriceEnd(price, priceAnnualy, 'price__animation2', priceState2);
    handleScrollOrLoadFeature(feature, featureArr, featureState);
});
window.addEventListener('scroll', () => {
    handleScrollOrLoad(discoverImg, 'discover__img__animation', discoverState);
    handleScrollOrLoad(mainForm, 'home__main-form__animation', mainFormState);
    handleScrollOrLoad(itemPortfolio, 'portfolio__animation', portfolioState);
    handleScrollOrLoad(contactForm, 'contact__input-animation', formContactState);
    handleScrollOrLoadPrice(price, priceMonthly, 'price__animation1', priceState1);
    handleScrollOrLoadPrice(price, priceAnnualy, 'price__animation2', priceState2);
    handleScrollOrLoadPriceEnd(price, priceMonthly, 'price__animation1', priceState1);
    handleScrollOrLoadPriceEnd(price, priceAnnualy, 'price__animation2', priceState2);
    handleScrollOrLoadFeature(feature, featureArr, featureState);
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

//Comment
const nameComment = document.querySelectorAll(".comment__item-name");
nameComment.forEach((nameElement, index) => {
    nameElement.addEventListener("click", () => {
        // Lấy danh sách các thẻ B
        let mainComment = document.querySelectorAll(".comment__item-main");

        // Lấy thẻ B tương ứng với A được nhấn
        const selectedComment = mainComment[index];

        // Kiểm tra trạng thái của thẻ B
        if (selectedComment.classList.contains("hidden")) {
            // Nếu thẻ B đang ẩn, ẩn tất cả các thẻ B khác và hiển thị thẻ B tương ứng
            mainComment.forEach(mainElement => {
                mainElement.classList.add("hidden");
            });
            selectedComment.classList.remove("hidden");
        } else {
            // Nếu thẻ B đang hiển thị, ẩn nó
            selectedComment.classList.add("hidden");
        }
    });
});
//End Comment

//Portfolio


//End Portfolio