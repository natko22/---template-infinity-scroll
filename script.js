const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// UNSPLASH API
const count = 10;
const apiKey = "e7-3iVN7qSi-gq-7otpn2voBYqzT7kA3ydhWW_AxUZQ";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}
`;

// Create Elements for links and photos ,Add to the DOM
function displayPhotos() {
  // run function for each object in photosArray
  photosArray.forEach((photo) => {
    // create <a> to link to Unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    // create <img> for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    // put <img> inside <a> then put both Image container element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}
// Get photos from Unsplash Api

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray);
    displayPhotos();
  } catch (error) {}
}
getPhotos();
