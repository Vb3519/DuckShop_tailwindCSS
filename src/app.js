import './styles/styles.css';
// Функционал: навигационное меню интерактивно; popup-форма интерактивна (закрывается по клику)

// Состояние приложения:
// --------------------
const appState = {
  isNavMenuOpened: false,
  isPopUpFormOpened: false,
};

// --------------------
// Вид:
// --------------------
const menuBtn = document.getElementById('menu-btn');
const mobileNavMenuContainer = document.getElementById('mobile-menu-container');
const mobileNavMenuContent = document.getElementById('mobile-menu-content');
const mobileNavMenuLayer = document.getElementById(
  'app-header-menu-active-layer'
);
const popupActiveLayer = document.getElementById('app-main-popup-active-layer');

const navMenuLinks = document.querySelectorAll('.nav-menu-elem');

const popupForm = document.getElementById('popup-form');
const showPopupFormBtn = document.querySelectorAll('.popup-form-btn');
const closePopupFormBtn = document.getElementById('close-popup-btn');

// --------------------
// Обработчики:
// --------------------
menuBtn.addEventListener('click', handleToggleMobileNavMenu);

Array.from(navMenuLinks).forEach((link) => {
  link.addEventListener('click', (e) => {
    handleSelectNavMenuLik(e);
  });
});

Array.from(showPopupFormBtn).forEach((btn) => {
  btn.addEventListener('click', handleOpenPopup);
});

closePopupFormBtn.addEventListener('click', handleClosePopup);

// --------------------
// Логика:
// --------------------

// Переход по ссылке в меню:
function handleSelectNavMenuLik(e) {
  const { currentTarget } = e;

  if (currentTarget.classList.contains('selected')) return;

  Array.from(navMenuLinks).forEach((link) => {
    link.classList.remove('selected');
  });

  currentTarget.classList.add('selected');
}

// Открытие формы:
function handleOpenPopup() {
  togglePopupFormViewClasses(appState.isPopUpFormOpened, 'active-elem');
  appState.isPopUpFormOpened = true;
}

// Закрытие формы:
function handleClosePopup() {
  togglePopupFormViewClasses(appState.isPopUpFormOpened, 'active-elem');
  appState.isPopUpFormOpened = false;
}

// Фукнция-тогглер классов со стилями для отображения формы:
function togglePopupFormViewClasses(option, className) {
  const popupFormElems = [popupForm, popupActiveLayer];
  popupFormElems.forEach((elem) => {
    option ? elem.classList.remove(className) : elem.classList.add(className);
  });
}

// Открытие навигационного меню:
const menuContentRenderDelay = 500;

function handleToggleMobileNavMenu() {
  if (!appState.isNavMenuOpened) {
    mobileNavMenuContainer.classList.add('active-menu');

    setTimeout(() => {
      mobileNavMenuContent.classList.add('active-menu');
    }, menuContentRenderDelay);

    mobileNavMenuLayer.classList.add('active-elem');
    appState.isNavMenuOpened = true;
  } else {
    mobileNavMenuContainer.classList.remove('active-menu');
    mobileNavMenuContent.classList.remove('active-menu');

    mobileNavMenuLayer.classList.remove('active-elem');
    appState.isNavMenuOpened = false;
  }
}
