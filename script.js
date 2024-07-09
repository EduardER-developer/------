const screenWidth = window.innerWidth;

// Если ширина экрана меньше, чем 768 пикселей (примерный размер телефона)
if (screenWidth < 768) {
  // Скрываем блоки
  const blockToHide = document.querySelectorAll('.block-map');
  const blockToHide2 = document.querySelectorAll('.block-second-map');

  const firstblock = document.querySelectorAll('.b2023');
  const secondblock = document.querySelectorAll('.b140')
    blockToHide.forEach(block => {
        block.style.display = 'none';
    });

    blockToHide2.forEach(block => {
        block.style.display = 'none';
    });

    firstblock.forEach(block =>
        block.style.paddingTop = '10px',
    ) 
    secondblock.forEach(block =>
        block.style.paddingTop = '10px',
        ) 
} else {
  // Показывает блоки, если экран шире, чем 768 пикселей
  const blockToHide = document.querySelectorAll('.block-map');
  const blockToHide2 = document.querySelectorAll('.block-second-map');

  const firstblock = document.querySelectorAll('.b2023');
  const secondblock = document.querySelectorAll('.b140')
  
  blockToHide.forEach(block => {
    block.style.display = 'block';
});

blockToHide2.forEach(block => {
    block.style.display = 'block';
});

firstblock.forEach(block =>
    block.style.paddingTop = '10px',
) 
secondblock.forEach(block =>
    block.style.paddingTop = '10px',    
    ) 
}

// Вызываем функцию при загрузке страницы
window.onload = checkScreenSize;

// Вызываем функцию при изменении размера окна
window.addEventListener('resize', checkScreenSize);




// Получаем элементы
const openButton = document.querySelector('.appli'); // Кнопка для открытия формы
const closeButton = document.querySelector('.close-popup'); // Кнопка для закрытия формы
const popup = document.querySelector('.popup'); // Сама форма

// Функция для открытия формы
function openPopup() {
  popup.style.display = 'block';
}

// Функция для закрытия формы
function closePopup() {
  popup.style.display = 'none';
}

// Добавляем обработчики событий
openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

// Дополнительно: закрытие формы по клику вне её
popup.addEventListener('click', function(event) {
  if (event.target === popup) {
    closePopup();
  }
});

