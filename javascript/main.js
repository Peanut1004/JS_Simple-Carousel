const wrapper = document.querySelector('.wrapper');
let isMouseDown = false;
let startX, scrolling;

wrapper.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - wrapper.offsetLeft;
  scrolling = wrapper.scrollLeft; // 0
})

wrapper.addEventListener('mouseup', () => {
  isMouseDown = false;
})

wrapper.addEventListener('mouseleave', () => {
  isMouseDown = false;
})

wrapper.addEventListener('mousemove', (e) => {
  if(!isMouseDown) return;

  const x = e.pageX - wrapper.offsetLeft;

  const walk = x - startX;

  wrapper.scrollLeft = scrolling - walk;
})


