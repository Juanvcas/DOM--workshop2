// Import function to add to the intersection observer event.
import { registerImage } from './lazy';

// Elements
const imagesCont = document.querySelector('#images');
const loadButton = document.querySelector('#load-image');
const cleanButton = document.querySelector('#clean-images');

// Load an image
const loadImage = async () => {
   const image = document.createElement('img');
   // image.src = await (
   //    await (await fetch('https://randomfox.ca/floof/')).json()
   // ).image;
   // image.src = `https://randomfox.ca/images/${Math.floor(
   //    Math.random() * (123 - 1)
   // ) + 1}.jpg`;

   image.dataset.src = `https://randomfox.ca/images/${
      Math.floor(Math.random() * (123 - 1)) + 1
   }.jpg`;
   image.alt = 'randomfox';

   const figure = document.createElement('figure');
   figure.classList = 'w-96 h-96 mx-auto mt-8 bg-gray-300 rounded-md';

   figure.append(image);
   imagesCont.append(figure);

   // Lazy loading
   registerImage(figure);
};

//Clean images
const cleanImages = () => {
   imagesCont.innerHTML = '';
};

// Events
loadButton.addEventListener('click', loadImage);
cleanButton.addEventListener('click', cleanImages);
