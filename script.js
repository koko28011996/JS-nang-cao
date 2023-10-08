console.log(document.documentElement);
 console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');
const allButon = document.getElementsByTagName('button');
console.log(allButon);
//  Chèn thêm phần tử vào trong html
const message =  document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = " chung toi nau com cho ban cho cho an";
message.innerHTML ='chung toi nau com cho ban cho cho an.<button class="btn btn-close-cookie">got it <button>';
// chèn vào header phần đầu
//  theem nhieu phan tu gioong nhau 
// header.prepend(message.cloneNode(true));

// header.prepend(message);
// vào phần cuối
//  theem nhieu phan tu gioong nhau 
// header.after(message)
// header.append(message);

// xoa phan tu
// document.querySelector('.btn-close-cookie').addEventListener('click',function(){
//     message.parentElement.removeChild(message);
// });


// style cho doi tuo
message.style.background = '#37383d';
// lay style 1 doi tuong
console.log(getComputedStyle(message).color);
// thay doi mau sac cho 1 doi tuong root
document.documentElement.style.setProperty('--color-primary','blue');

//  thay doi thuoc tinh
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
logo.alt = " Pham Manh ph30134";


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function () {
    // const s1coords = section1.getBoundingClientRect();
    // console.log(s1coords);
    // console.log(e.target.getBoundingClientRect());
    // //  lay thong so mac dinh cua nut
    // console.log('thong so cuon',window.pageXOffset, window.pageYOffset);
    // cuon c1
    // window.scrollTo(
    //    {left: s1coords.left + window.pageXOffset,
    //    top: s1coords.top + window.pageYOffset,
    //      behavior : 'smooth'});

    // c2
         section1.scrollIntoView({behavior : 'smooth'});
        
});
const h1 = document.querySelector('h1');
const alerth1 = function(e){
    alert('add : tot ');
    h1.removeEventListener('mouseenter', alerth1);
    
}
h1.addEventListener('mouseenter', alerth1);
// tat theo time
// setTimeout(() => h1.removeEventListener('mouseenter', alerth1),3000 );

// h1.onmouseenter = function(e){
//     alert('add : tot ');

// }


// thay doi mau sac cua cac thu muc theo noi bot
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;



// document.querySelector('.nav__link').addEventListener('click', function (e){
//     this.style.backgroundColor = randomColor();
//     console.log('link', e.target);
//     // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e){
//     this.style.backgroundColor = randomColor();

//     console.log('container', e.target);

// });
// document.querySelector('.nav').addEventListener('click', function (e){
//     this.style.backgroundColor = randomColor();

//     console.log('Nav', e.target);

// });
// ////////// Chuyen huong trang
// tao add event vo class me
document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
  
    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
//   chon phan tu con
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "red";
h1.lastElementChild.style.color = "red";


// ////// thay doi noi dung nhung k load lai trang

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
  
    // Guard clause
    if (!clicked) return;
  
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  
    clicked.classList.add('operations__tab--active');
  
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
  });
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// 

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// 

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
// /
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

  
