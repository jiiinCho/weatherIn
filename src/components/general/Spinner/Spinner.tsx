import { Player } from '@lottiefiles/react-lottie-player';

export const Spinner = () => {
  return (
    <Player
      src="https://assets9.lottiefiles.com/packages/lf20_p8bfn5to.json"
      className="player"
      loop
      autoplay
      style={{ height: '180px', width: '180px' }}
    />
  );
};
