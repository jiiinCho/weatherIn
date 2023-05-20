import { FC } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

type ErrorProps = {
  message: string;
};

export const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <div>
      <Player
        src="https://assets6.lottiefiles.com/packages/lf20_bdnjxekx.json"
        className="player"
        loop
        autoplay
        style={{ height: '180px', width: '180px' }}
      />
      <p>{message}</p>
    </div>
  );
};
