// import { hendlerClickCard } from './js/modal-movie';
import { setSizeHeroWrap } from './js/hero';
import debounce from 'debounce';

window.addEventListener('load', setSizeHeroWrap);
window.addEventListener('resize', debounce(setSizeHeroWrap, 100));
