let totalImages = 0;
let loadedImages = 0;

const action = (entry) => {
   // entry.target.firstChild.src = `https://randomfox.ca/images/${
   //    Math.floor(Math.random() * (123 - 1)) + 1
   // }.jpg`;

   const image = entry.target.firstChild;

   image.src = image.dataset.src;
   image.alt = 'randomfox';
   image.classList = 'w-full rounded-md';

   image.addEventListener('load', () => {
      entry.target.classList = 'w-96 mx-auto mt-8';
   });

   loadedImages++;
   console.log(`
   ----------------------------
   🔵 Total images: ${totalImages}
   🟢 Loaded images: ${loadedImages}
   ----------------------------
   `);

   observer.unobserve(entry.target);
};

const observer = new IntersectionObserver((entry) => {
   entry.filter((info) => info.isIntersecting).forEach(action);

   /* Also it can be */
   // if (entry[0].isIntersecting) {
   //    action(entry[0]);
   // }
});

export const registerImage = (figure) => {
   observer.observe(figure);

   totalImages++;
   console.log(`
   ----------------------------
   🔵 Total images: ${totalImages}
   🟢 Loaded images: ${loadedImages}
   ----------------------------
   `);
};
