import { animate, state, style, transition, trigger } from '@angular/animations';

export const productFadeAnimation = trigger('productHoverFade', [
  state('active', style({
    opacity: '1',
    position: 'relative',
    left: 0,
    top: 0,
  })),
  state('inactive', style({
    opacity: '0',
    position: 'absolute',
    left: 0,
    top: 0
  })),
  state('normal', style({
    opacity: 0,
    transform: 'translateY(100%)'
  })),
  state('hovered', style({
    opacity: 1,
    transform: 'translateY(0)'
  })),
  transition('active <=> inactive', [
    animate('0.5s'),
  ]),
  transition('normal <=> hovered', [
    animate('0.3s')
  ]),

])
