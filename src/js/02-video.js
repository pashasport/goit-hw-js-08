// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';
// const iframe = document.querySelector('iframe');
// const CURRENT_TIME_KEY = 'videoplayer-current-time';
// const player = new Player(iframe);
// const getCurrentTime = function (currentTime) {
//     localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(currentTime.seconds));
//  };

// player.on('timeupdate', throttle(getCurrentTime, 1000));
// const saveCurrentTime(JSON.parse(saveCurrentTime) || 0);

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const getCurrentTime = function (currentTime) {
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(currentTime.seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

const savedCurrentTime = localStorage.getItem(CURRENT_TIME_KEY);
player.setCurrentTime(JSON.parse(savedCurrentTime) || 0);
