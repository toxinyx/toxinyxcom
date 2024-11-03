export {};

declare global {
  function _$<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): HTMLElementTagNameMap[K] | null;
  function _$<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): SVGElementTagNameMap[K] | null;
  function _$<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): MathMLElementTagNameMap[K] | null;
  function _$<E extends Element = Element>(selectors: string): E | null;

  function _$$<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<HTMLElementTagNameMap[K]>;
  function _$$<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): NodeListOf<SVGElementTagNameMap[K]>;
  function _$$<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<MathMLElementTagNameMap[K]>;
  function _$$<E extends Element = Element>(selectors: string): NodeListOf<E>;
  /**
   * Pace.js
   *
   * https://github.com/CodeByZach/pace
   */
  var Pace: {
    on: (event: string, handler: () => void) => void;
    sources: any[];
  };
  /**
   * AOS.js
   */
  type easingOptions =
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "ease-in-back"
    | "ease-out-back"
    | "ease-in-out-back"
    | "ease-in-sine"
    | "ease-out-sine"
    | "ease-in-out-sine"
    | "ease-in-quad"
    | "ease-out-quad"
    | "ease-in-out-quad"
    | "ease-in-cubic"
    | "ease-out-cubic"
    | "ease-in-out-cubic"
    | "ease-in-quart"
    | "ease-out-quart"
    | "ease-in-out-quart";
  interface AOSOptions {
    offset: number;
    delay: number;
    duration: number;
    disable: boolean;
    once: boolean;
    startEvent: string;
    throttleDelay: number;
    debounceDelay: number;
    easing: easingOptions;
  }
  var AOS: {
    init: (options: Partial<AOSOptions>) => void;
    refresh: (initialize?: boolean) => void;
    refreshHard: () => void;
  };
  /**
   * Record the difference between the current scroll position and the previous scroll position
   */
  var diffY: number;

  interface Window {
    on: typeof addEventListener;
    off: typeof removeEventListener;
    _addEventListener: typeof addEventListener;
    _removeEventListener: typeof removeEventListener;

    Pace: typeof Pace;
    AOS: typeof AOS;
    diffY: typeof diffY;
  }

  interface Element {
    on: typeof addEventListener;
    off: typeof removeEventListener;
    _addEventListener: typeof addEventListener;
    _removeEventListener: typeof removeEventListener;
  }

  interface Document {
    on: typeof addEventListener;
    off: typeof removeEventListener;
    _addEventListener: typeof addEventListener;
    _removeEventListener: typeof removeEventListener;
  }
}
