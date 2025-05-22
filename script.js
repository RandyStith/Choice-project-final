function getRandomImage() {
  const image = document.getElementById('randomImage');
  // Picsum API for random images
  const randomNumber = Math.floor(Math.random() * 1000);  // Random number to avoid caching
  const url = `https://picsum.photos/800/600?random=${randomNumber}`;
  image.src = url;
}

// Load an image when the page loads
window.onload = getRandomImage;
