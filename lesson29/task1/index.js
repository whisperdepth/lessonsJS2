export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement("img");
  imgElem.setAttribute("alt", "My photo");
  imgElem.src = imgSrc;
  const containerElem = document.querySelector(".page");
  containerElem.append(imgElem);

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height});
  };

  imgElem.addEventListener("load", onImageLoaded);

  const onError = () => {
    callback("Image load failed");
  }

  imgElem.addEventListener("error", onError);
};

const imgSrc =
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";

const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const {width, height} = data;

  const sizeElem = document.querySelector(".image-size");
  sizeElem.textContent = `${width} x ${height}`;
};

addImage(imgSrc, onImageLoaded);
