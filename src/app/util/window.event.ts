import { fromEvent, merge, Observable, of, Subject } from 'rxjs';
import {distinctUntilChanged, map, share, tap} from 'rxjs/operators';
import { RAF } from '@app/util/raf';

class WindowEventService {
  scroll$:Observable<{y: number, h: number}> = merge(of(1), fromEvent(window, 'scroll')).pipe(
    map(e => ({ y: Math.floor(window.pageYOffset), h: window.innerHeight})),
    share()
  );
  resize$ = merge(of(1), fromEvent(window, 'resize').pipe(
    distinctUntilChanged((x: Event, y: Event)=> {
      const exWidth = (x.target as Window).innerWidth;
      const exHeight = (x.target as Window).innerHeight;
      const newWidth = (y.target as Window).innerWidth;
      const newHeight = (y.target as Window).innerHeight;
      return (exWidth !== newWidth) || (exHeight !== newHeight);
    })
  )).pipe(share());
  widthResize$ = this.resize$.pipe(
    share()
  )
  focus$ = new Subject();
  constructor(){
  }

  easing (t: number) { return t*(2-t) }

  scrollToTop(){
    const start = Date.now();
    const y = window.pageYOffset;
    const duration = 300;
    const end = start + duration;
    const handler = () => {
      const now = Date.now();
      if (now > end) {
        window.scrollTo(0, 0)
      } else {
        const rate = this.easing(+((now-start)/duration).toFixed(3));
        window.scrollTo(0, y -(y*rate));
        RAF(handler);
      }
    };
    handler();
  }
}

export const windowEventService = new WindowEventService();
