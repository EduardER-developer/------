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
