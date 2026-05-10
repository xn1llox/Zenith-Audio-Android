/* global jest */

jest.mock('@react-native-async-storage/async-storage', () => ({
  __esModule: true,
  default: {
    getItem: jest.fn(() => Promise.resolve(null)),
    removeItem: jest.fn(() => Promise.resolve()),
    setItem: jest.fn(() => Promise.resolve()),
  },
}));

jest.mock('react-native-track-player', () => ({
  __esModule: true,
  default: {
    add: jest.fn(),
    pause: jest.fn(),
    play: jest.fn(),
    registerPlaybackService: jest.fn(),
    reset: jest.fn(),
    setupPlayer: jest.fn(),
    setRepeatMode: jest.fn(),
    skipToNext: jest.fn(),
    skipToPrevious: jest.fn(),
    stop: jest.fn(),
    updateOptions: jest.fn(),
    addEventListener: jest.fn(),
  },
  AppKilledPlaybackBehavior: {
    StopPlaybackAndRemoveNotification: 'stop-playback-and-remove-notification',
  },
  Capability: {
    Play: 'play',
    Pause: 'pause',
    Stop: 'stop',
    SeekTo: 'seek-to',
    SkipToNext: 'skip-to-next',
    SkipToPrevious: 'skip-to-previous',
  },
  Event: {
    RemotePlay: 'remote-play',
    RemotePause: 'remote-pause',
    RemoteStop: 'remote-stop',
    RemoteNext: 'remote-next',
    RemotePrevious: 'remote-previous',
  },
  RepeatMode: {
    Off: 'off',
  },
}));
