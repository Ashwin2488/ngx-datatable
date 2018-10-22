declare let global: any;

/* tslint:disable */
export const MouseEvent = (((typeof window !== 'undefined' && window) as any) || (global as any)).MouseEvent as MouseEvent;
export const TouchEvent = (((typeof window !== 'undefined' && window) as any) || (global as any)).TouchEvent as TouchEvent;
export const KeyboardEvent = (((typeof window !== 'undefined' && window) as any) || (global as any)).KeyboardEvent as KeyboardEvent;
export const Event = (((typeof window !== 'undefined' && window) as any) || (global as any)).Event as Event;


//polyfill for element.closest for ie

if (!Element.prototype.matches)
  Element.prototype.matches = Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s: string) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}
