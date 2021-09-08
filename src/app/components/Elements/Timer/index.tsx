import React from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import { Text } from '../Typography/Text';

export function Timer({ start }) {
  const Completionist = () => <span>Times up!</span>;

  const renderer = ({ minutes, seconds, completed, api: { start } }) => {
    if (completed) {
      return <Completionist />;
    } else {
      start && start();
      return (
        <span>
          {minutes}:{zeroPad(seconds)}
        </span>
      );
    }
  };

  return (
    <>
      <Text bold xl2 style={{ marginBottom: '0' }}>
        <Countdown
          autoStart={false}
          date={Date.now() + 300000}
          renderer={renderer}
        />
      </Text>
    </>
  );
}
