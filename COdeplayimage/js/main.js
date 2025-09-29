const albums = {
  travel: {
    name: "Travel",
    images: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60",
  },
  snapchat: {
    name: "Snapchat",
    images: [
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60",
  },
  family: {
    name: "Family",
    images: [
      "https://plus.unsplash.com/premium_photo-1683121257579-d40449389b63?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1683121257579-d40449389b63?w=500&auto=format&fit=crop&q=60",
  },
  vacation: {
    name: "Vacation",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60",
  },
  friends: {
    name: "Friends",
    images: [
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526662096928-b6b767c223ce?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526662096928-b6b767c223ce?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&auto=format&fit=crop&q=60",
  },
  nature: {
    name: "Nature",
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60",
  },
  pets: {
    name: "Pets",
    images: [
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560809454-92bdb85e7c73?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&auto=format&fit=crop&q=60",
  },
  wedding: {
    name: "Wedding",
    images: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=500&auto=format&fit=crop&q=60",
  },
  recent: {
    name: "Recent",
    images: [
      "https://images.unsplash.com/photo-1529419412599-7bb870e11810?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1682695794947-17061dc284dd?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/file-1715652217532-464736461acbimage?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1529419412599-7bb870e11810?w=500&auto=format&fit=crop&q=60",
  },
  x: {
    name: "X",
    images: [
      "https://images.unsplash.com/file-1715652217532-464736461acbimage?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1467385829985-2b0fb82b5193?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/file-1715652217532-464736461acbimage?w=500&auto=format&fit=crop&q=60",
  },
  adventure: {
    name: "Adventure",
    images: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&auto=format&fit=crop&q=60",
  },
  food: {
    name: "Food",
    images: [
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60",
  },
  architecture: {
    name: "Architecture",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&auto=format&fit=crop&q=60",
  },
  sports: {
    name: "Sports",
    images: [
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&auto=format&fit=crop&q=60",
  },
  art: {
    name: "Art",
    images: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&auto=format&fit=crop&q=60",
  },
  music: {
    name: "Music",
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=60",
  },
  fashion: {
    name: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485231183945-fffde7cb39e1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485231183945-fffde7cb39e1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485231183945-fffde7cb39e1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485231183945-fffde7cb39e1?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=60",
  },
  technology: {
    name: "Technology",
    images: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&auto=format&fit=crop&q=60",
  },
  business: {
    name: "Business",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551836026-d5c88ac5c4e0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551836026-d5c88ac5c4e0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551836026-d5c88ac5c4e0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551836026-d5c88ac5c4e0?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
  },
  health: {
    name: "Health",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format&fit=crop&q=60",
  },
};


// People & places data
const peoplePlaces = [
  {
    name: "People",
    thumbnail:
      "https://images.unsplash.com/photo-1529419412599-7bb870e11810?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Places",
    thumbnail:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Nature",
    thumbnail:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60",
  },
];

// Media types data
const mediaTypes = [
  {
    icon: "fas fa-video",
    name: "Videos",
    count: 5,
    page: "./videopage.html",
  },
  {
    icon: "fas fa-camera",
    name: "Selfies",
    count: 22,
    page: "./selfie.html",
  },
  { icon: "fas fa-user", name: "Live Photos", count: 20, page: "#" },
  {
    icon: "fas fa-camera-retro",
    name: "Portraits",
    count: 20,
    page: "#",
  },
  { icon: "fas fa-video", name: "Screenshots", count: 1, page: "#" },
  {
    icon: "fas fa-spinner fa-spin",
    name: "Screen Recordings",
    count: 232,
    page: "#",
  },
  {
    icon: "fas fa-spinner fa-spin",
    name: "Animated",
    count: 136,
    page: "#",
  },
];

// Lightbox state
let currentAlbum = null;
let currentIndex = 0;

// Initialize the gallery
document.addEventListener("DOMContentLoaded", function () {
  renderMobileAlbums();
  renderDesktopAlbums();
  renderPeoplePlaces();
  renderMediaTypes();
  setupEventListeners();
});

// Render mobile albums
function renderMobileAlbums() {
  const row1 = document.getElementById("mobile-albums-row1");
  const row2 = document.getElementById("mobile-albums-row2");

  // Clear existing content
  row1.innerHTML = "";
  row2.innerHTML = "";

  // Get album keys
  const albumKeys = Object.keys(albums);

  // Split albums between two rows
  const half = Math.ceil(albumKeys.length / 2);
  const row1Albums = albumKeys.slice(0, half);
  const row2Albums = albumKeys.slice(half);

  // Render first row
  row1Albums.forEach((albumKey) => {
    const album = albums[albumKey];
    const albumElement = createMobileAlbumElement(albumKey, album);
    row1.appendChild(albumElement);
  });

  // Render second row
  row2Albums.forEach((albumKey) => {
    const album = albums[albumKey];
    const albumElement = createMobileAlbumElement(albumKey, album);
    row2.appendChild(albumElement);
  });
}

// Create mobile album element
function createMobileAlbumElement(albumKey, album) {
  const div = document.createElement("div");
  div.className = "flex-shrink-0";
  div.innerHTML = `
        <div class="relative">
          <img
            class="w-[150px] h-[140px] object-cover rounded-[15px] cursor-pointer"
            src="${album.thumbnail}"
            alt="${album.name}"
            onclick="openLightbox('${albumKey}', 0)"
          />
          <div class="album-count">${album.images.length}</div>
        </div>
        <p class="text-[18px] mt-[10px]">${album.name}</p>
        <p class="text-[13.2px] mt-[-5px]">${album.images.length}</p>
      `;
  return div;
}

// Render desktop albums
function renderDesktopAlbums() {
  const container = document.getElementById("desktop-albums");

  // Clear existing content
  container.innerHTML = "";

  // Get album keys
  const albumKeys = Object.keys(albums);

  // Render all albums
  albumKeys.forEach((albumKey) => {
    const album = albums[albumKey];
    const albumElement = createDesktopAlbumElement(albumKey, album);
    container.appendChild(albumElement);
  });
}

// Create desktop album element
function createDesktopAlbumElement(albumKey, album) {
  const div = document.createElement("div");
  div.className = "album-card group";
  div.innerHTML = `
        <div class="relative rounded-xl overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
          <img
            class="w-full h-48 object-cover cursor-pointer"
            onclick="openLightbox('${albumKey}', 0)"
            src="${album.thumbnail}"
            alt="${album.name}"
          />
          <div class="album-count">${album.images.length}</div>
          <div class="album-overlay">
            <p class="text-sm">Last updated: ${getRandomDate()}</p>
          </div>
        </div>
        <p class="text-center mt-2 text-lg font-medium">${album.name}</p>
      `;
  return div;
}

// Render people & places
function renderPeoplePlaces() {
  const container = document.getElementById("people-places");

  // Clear existing content
  container.innerHTML = "";

  // Render all people & places
  peoplePlaces.forEach((item) => {
    const div = document.createElement("div");
    div.className = "flex-shrink-0";
    div.innerHTML = `
          <img
            class="w-[150px] h-[140px] object-cover rounded-[15px] cursor-pointer"
            src="${item.thumbnail}"
            alt="${item.name}"
            onclick="openLightbox('${item.name.toLowerCase()}', 0)"
          />
          <p class="text-center mt-[10px]">${item.name}</p>
        `;
    container.appendChild(div);
  });
}

// Render media types
function renderMediaTypes() {
  const container = document.getElementById("media-types");

  // Clear existing content
  container.innerHTML = "";

  // Render all media types
  mediaTypes.forEach((item) => {
    const div = document.createElement("div");
    div.className = "flex justify-between items-center w-full";
    div.innerHTML = `
          <div class="flex justify-between items-center">
            <a href="${item.page}" class="flex justify-between items-center w-full">
                <i class="${item.icon} text-blue-600 text-[25px]"></i>
                <p class="ml-[10px]">${item.name}</p>
            </a>
          </div>
          <p>${item.count}</p>
        `;
    container.appendChild(div);
  });
}

// Setup event listeners
function setupEventListeners() {
  // Dark mode toggle
  const darkmode = document.querySelector(".darkmode");
  const lightmode = document.querySelector(".lightmode");

  darkmode.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    darkmode.style.display = "none";
    setTimeout(() => {
      lightmode.style.display = "inline-block";
    }, 100);
  });

  lightmode.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    lightmode.style.display = "inline-block";
    setTimeout(() => {
      lightmode.style.display = "none";
      darkmode.style.display = "inline-block";
    }, 2000);
  });

  // Add album button
  const add = document.querySelector(".add");
  add.addEventListener("click", inputPopUp);
  const input = document.querySelector(".input");
  input.style.display = "none";
}

// Input popup function
function inputPopUp() {
  const input = document.querySelector(".input");
  input.style.display = "block";
  input.style.textAlign = "center";

  input.addEventListener("input", () => {
    console.log(input.value);
  });

  input.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Enter") {
        alert(
          `Welcome ${input.value} nice to see you visit my gallery, feel at home and explore vastly`
        );
        input.style.display = "none";
        input.value = "";
      }
    },
    { once: true }
  );
}

// Lightbox functions
function openLightbox(albumId, index) {
  currentAlbum = albumId;
  currentIndex = index;

  const album = albums[albumId];
  if (!album) return;

  document.getElementById("lightbox-img").src = album.images[index];
  document.getElementById("lightbox-caption").textContent = album.name;
  document.getElementById("lightbox-counter").textContent = `${index + 1} / ${
    album.images.length
  }`;

  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "flex";
  setTimeout(() => {
    lightbox.classList.add("active");
  }, 10);
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
  setTimeout(() => {
    lightbox.style.display = "none";
  }, 300);
}

function navigateLightbox(direction) {
  if (!currentAlbum) return;

  const album = albums[currentAlbum];
  currentIndex =
    (currentIndex + direction + album.images.length) % album.images.length;

  document.getElementById("lightbox-img").src = album.images[currentIndex];
  document.getElementById("lightbox-counter").textContent = `${
    currentIndex + 1
  } / ${album.images.length}`;
}

// Close lightbox when clicking outside the image
document.getElementById("lightbox").addEventListener("click", function (e) {
  if (e.target === this) {
    closeLightbox();
  }
});

// Keyboard navigation
document.addEventListener("keydown", function (e) {
  if (document.getElementById("lightbox").style.display === "flex") {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  }
});

// Helper function to generate random dates
function getRandomDate() {
  const days = Math.floor(Math.random() * 30) + 1;
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  return `${Math.floor(days / 30)} months ago`;
}
