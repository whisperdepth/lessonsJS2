export const addImageWithPromise = (imgSrc) => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement("img");
    imgElem.setAttribute("alt", "My photo");
    imgElem.src = imgSrc;
    const containerElem = document.querySelector(".page");
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener("load", onImageLoaded);

    const onError = () => {
      reject(new Error("Image load failed"));
    };

    imgElem.addEventListener("error", onError);
  });

  return p;
};
/* 
const imgSrc =
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";

const p = addImageWithPromise(imgSrc);

p.then((data) => console.log(data));
p.catch((error) => console.log(error));
 */
