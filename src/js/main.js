(async () => {
  const URL = 'https://on.sucesso.fm/visao';

  const playAndPauseButton = document.querySelector('#playAndPause');
  const playAndPauseImage = document.querySelector('#playAndPause img');

  const audio = new Audio(URL);

  const PlayRadio = () => {
    audio.play();
    playAndPauseButton.classList.remove('pause');
    playAndPauseImage.src = './src/img/pause.svg';
  };

  const PauseRadio = () => {
    audio.pause();
    playAndPauseButton.classList.add('pause');
    playAndPauseImage.src = './src/img/play.svg';
  };

  playAndPauseButton.addEventListener('click', () => {
    if (audio.paused) {
      return PlayRadio();
    }

    PauseRadio();
  });

  if (audio !== undefined && audio.paused) {
    PlayRadio();
  }
})();
