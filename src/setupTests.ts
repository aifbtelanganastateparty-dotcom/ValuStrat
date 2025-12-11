// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Provide a minimal environment for components that rely on media APIs
Object.defineProperty(HTMLMediaElement.prototype, 'play', {
  configurable: true,
  value: jest.fn().mockResolvedValue(undefined),
});
Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
  configurable: true,
  value: jest.fn(),
});

// Mock GSAP and its ScrollTrigger plugin to keep Jest running in Node
jest.mock('gsap', () => {
  const tweenMock = {
    to: jest.fn(),
    from: jest.fn(),
    fromTo: jest.fn(),
    set: jest.fn(),
    kill: jest.fn(),
  };

  const gsapMock = {
    to: jest.fn(() => tweenMock),
    from: jest.fn(() => tweenMock),
    fromTo: jest.fn(() => tweenMock),
    set: jest.fn(),
    delayedCall: jest.fn(),
    timeline: jest.fn(() => ({
      to: jest.fn(),
      from: jest.fn(),
      fromTo: jest.fn(),
      set: jest.fn(),
      kill: jest.fn(),
      add: jest.fn(),
    })),
    context: jest.fn((cb: (() => void) | undefined) => {
      cb?.();
      return { revert: jest.fn() };
    }),
    registerPlugin: jest.fn(),
  };

  return {
    __esModule: true,
    gsap: gsapMock,
    default: gsapMock,
  };
});

jest.mock('gsap/ScrollTrigger', () => {
  const scrollTriggerMock = {
    create: jest.fn(() => ({ kill: jest.fn(), vars: {} })),
    getAll: jest.fn(() => []),
    refresh: jest.fn(),
    kill: jest.fn(),
  };

  return {
    __esModule: true,
    ScrollTrigger: scrollTriggerMock,
    default: scrollTriggerMock,
  };
});
