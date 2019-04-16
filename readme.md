# Snake game

[Demo](https://whtalx.github.io/react-snek/)

The game simulate 90s «Brick Game» version of [Snake](https://en.wikipedia.org/wiki/Snake_(video_game_genre)).

## Instructions

### Display

Display indicators:
1) Total score of current game.
2) Highest score of all games. It stored in `localStorage`.
3) Current level. There is 7 levels, started with zero («00»). On each level there is obstacles, which amount equals level value.
4) Current speed, also started with zero. Speed increasing with every third food eaten. On seventh speed current level completing.
5) Lives amount. First level starting with three lives, on every next level this amount increases by one. This picture showing 5 lives out of 9:
<div align="center" style="background-image: url('./images/lives.svg')"></div>
6) Pause indicator.
7) Sound indicator. Sound is enabled by default, but it will start with game starts. So, you can disable it before.

### Controls

All buttons can be pressed by mouse/touch on screen or with keys on keyboard.
Key bindings:
* <kbd>Enter</kbd> — start;
* <kbd>Space</kbd> — pause;
* <kbd> M </kbd> — sound;
* <kbd> W </kbd> or <kbd> ▲ </kbd> — up
* <kbd> S </kbd> or <kbd> ▼ </kbd> — down
* <kbd> A </kbd> or <kbd> ◀ </kbd> — left
* <kbd> D </kbd> or <kbd> ▶ </kbd> — right

### Gameplay

Every level starts with snake length of three. Head of snake and food are marked blinking.
Changing direction cause snake move instantly to new direction.
Moving along screen border, game prevent you for turn out of screen.
Get off screen or bump an obstacle cause death.
Death decreasing lives amount while above zero, then game over.
Snake can reverse if you turn to opposite direction. Reversed direction is direction which snake tail pointing. As shown on picture below, if current direction is «right» and you turn to left, snake will move up.
<div align="center" style="background-image: url('./images/reverse.svg')"></div>

## Built With

* [ReactJS](https://reactjs.org/) – A JavaScript library for building user interfaces.
* [Mocha](https://mochajs.org/) – Simple, flexible JavaScript test framework.
* [Chai](https://www.chaijs.com/) – BDD / TDD assertion library.
* [Enzyme](https://airbnb.io/enzyme/) – Testing utility for React.
* [SASS](https://sass-lang.com/) – CSS extension language.

## Acknowledgments

* [Philipp](https://github.com/psr1919plus21) for help & support
* [Jonathan Neal](https://gist.github.com/jonathantneal) for @font-face [mixin](https://gist.github.com/jonathantneal/d0460e5c2d5d7f9bc5e6)