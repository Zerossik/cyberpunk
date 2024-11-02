export const setSizeHeroWrap = () => {
  const currentViewportHeight = window.innerHeight;
  const headerHeight = document.querySelector('.header').offsetHeight;
  const hero = document.querySelector('.hero');
  //getHeaderHeight
  hero.style.height = `${currentViewportHeight - headerHeight}px`;
  console.log(currentViewportHeight - headerHeight);
};
