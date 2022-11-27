import { registerImage } from './lazy';

// Elements
const imagesCont = document.querySelector('#images');
const loadButton = document.querySelector('#load-image');
const cleanButton = document.querySelector('#clean-images');

// Load an image
const loadImage = async () => {
   const image = document.createElement('img');
   image.classList = 'w-full';
   // image.src = await (
   //    await (await fetch('https://randomfox.ca/floof/')).json()
   // ).image;
   image.src = `https://randomfox.ca/images/${Math.floor(
      Math.random() * 123
   )}.jpg`;
   image.alt = 'randomfox';

   const figure = document.createElement('figure');
   figure.classList = 'w-96 mx-auto mt-8';

   figure.append(image);
   imagesCont.append(figure);

   // Lazy
   registerImage(image);
};

//Clean images
const cleanImages = () => {
   imagesCont.innerHTML = '';
};

// Events
loadButton.addEventListener('click', loadImage);
cleanButton.addEventListener('click', cleanImages);
