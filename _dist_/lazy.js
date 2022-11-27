const action = (entry) => {
   const node = entry.target;

   console.log('hey!');
   observer.unobserve(node);
};

const observer = new IntersectionObserver((entry) => {
   entry.filter((info) => info.isIntersecting).forEach(action);

   /* Tambien puede ser */
   // if (entry[0].isIntersecting) {
   //    action(entry[0]);
   // }
});

export const registerImage = (image) => {
   observer.observe(image);
};
