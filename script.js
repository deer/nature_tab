document.addEventListener('DOMContentLoaded', function () {
  const imageContainer = document.getElementById('image-container');
  const img = document.getElementById('background-image');
  imageContainer.style.display = 'none';

  const imageFilenames = [
    "images/photo-1434394354979-a235cd36269d.avif",
    "images/photo-1464822759023-fed622ff2c3b.avif",
    "images/photo-1506905925346-21bda4d32df4.avif",
    "images/photo-1540390769625-2fc3f8b1d50c.avif"
  ];
  const randomIndex = Math.floor(Math.random() * imageFilenames.length);
  const selectedImage = imageFilenames[randomIndex];

  img.onload = function () {
    imageContainer.style.display = 'block';
    document.getElementById('image-container').style.opacity = 1;
  };
  img.src = selectedImage;
});