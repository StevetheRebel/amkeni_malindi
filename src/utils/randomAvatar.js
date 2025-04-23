const avatarNames = [
  "profile1.webp",
  "profile2.webp",
  "profile3.webp",
  "profile4.webp",
  "profile5.webp",
  "profile6.webp",
  "profile7.webp",
  "profile8.webp",
  "profile9.webp",
  "profile10.webp",
  "profile11.webp",
  "profile12.webp",
  "profile13.webp",
  "profile14.webp",
  "profile15.webp",
  "profile16.webp",
  "profile17.webp",
  "profile18.webp",
  "profile19.webp",
  "profile20.webp",
];

const specialAvatar = {
    "Amkeni Malindi": 'Amkeni Avatar.webp'
}

export const getRandomAvatar = (name = '') => {
    if (specialAvatar[name]) {
        return `../Collection/${specialAvatar[name]}`;
    }

    const randomIndex = Math.floor(Math.random() * avatarNames.length);
    return `../Collection/${avatarNames[randomIndex]}`;
}