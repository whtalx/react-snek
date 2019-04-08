export default function victory() {
  if (!this.state.isCelebrating) {
    return;
  };
  
  let text = [{"x":10,"y":16},{"x":10,"y":17},{"x":11,"y":18},{"x":11,"y":19},{"x":12,"y":16},{"x":12,"y":17},{"x":14,"y":16},{"x":14,"y":17},{"x":14,"y":18},{"x":14,"y":19},{"x":15,"y":16},{"x":15,"y":19},{"x":16,"y":16},{"x":16,"y":17},{"x":16,"y":18},{"x":16,"y":19},{"x":18,"y":16},{"x":18,"y":17},{"x":18,"y":18},{"x":18,"y":19},{"x":19,"y":19},{"x":20,"y":16},{"x":20,"y":17},{"x":20,"y":18},{"x":20,"y":19},{"x":23,"y":16},{"x":23,"y":17},{"x":23,"y":18},{"x":24,"y":19},{"x":25,"y":17},{"x":25,"y":18},{"x":26,"y":19},{"x":27,"y":16},{"x":27,"y":17},{"x":27,"y":18},{"x":29,"y":16},{"x":29,"y":17},{"x":29,"y":18},{"x":29,"y":19},{"x":30,"y":16},{"x":30,"y":19},{"x":31,"y":16},{"x":31,"y":17},{"x":31,"y":18},{"x":31,"y":19},{"x":33,"y":16},{"x":33,"y":17},{"x":33,"y":18},{"x":33,"y":19},{"x":34,"y":17},{"x":35,"y":18},{"x":36,"y":16},{"x":36,"y":17},{"x":36,"y":18},{"x":36,"y":19},
  {"x":38,"y":16},{"x":38,"y":17},{"x":38,"y":19}];
  let frame = 0;
  let fireworkFrame = 0;
  let startX = 0;
  let startY = 0;
  let renderableText = []

  let firework = shot => {
    let renderableFirework = [];

    let frame1 = (sstatus = 'on') => {
      renderableFirework = [{x: startX, y: startY, status: sstatus}];
      this.switchPixels(renderableFirework);
    }

    let frame2 = (sstatus = 'on') => {
      renderableFirework = [];
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (Math.abs(x) !== Math.abs(y)) {
            renderableFirework = renderableFirework.concat({x: (startX + x), y: (startY + y), status: sstatus});
          }
        }
      }
      this.switchPixels(renderableFirework);
    }

    let frame3 = (sstatus = 'on') => {
      renderableFirework = [];
      for (let x = -2; x <= 2; x++) {
        for (let y = -2; y <= 2; y++) {
          if (Math.abs(x) + Math.abs(y) === 2) {
            renderableFirework = renderableFirework.concat({x: (startX + x), y: (startY + y), status: sstatus});
          }
        }
      }
      this.switchPixels(renderableFirework);
    }

    let frame4 = (sstatus = 'on') => {
      renderableFirework = [];
      for (let x = -3; x <= 3; x++) {
        for (let y = -3; y <= 3; y++) {
          if (Math.abs(x) + Math.abs(y) === 3) {
            renderableFirework = renderableFirework.concat({x: (startX + x), y: (startY + y), status: sstatus});
          }
        }
      }
      this.switchPixels(renderableFirework);
    }

    let frame5 = (sstatus = 'on') => {
      renderableFirework = [];
      for (let x = -3; x <= 3; x++) {
        for (let y = -3; y <= 3; y++) {
          if (Math.abs(x) + Math.abs(y) === 4 || (x === 0 && Math.abs(y) === 3) || (y === 0 && Math.abs(x) === 3)) {
            renderableFirework = renderableFirework.concat({x: (startX + x), y: (startY + y), status: sstatus});
          }
        }
      }
      this.switchPixels(renderableFirework);
    }

    let frame6 = (sstatus = 'on') => {
      renderableFirework = [];
      for (let x = -4; x <= 4; x++) {
        for (let y = -4; y <= 4; y++) {
          if ((Math.abs(x) === 0 && Math.abs(y) === 4) || (Math.abs(x) === 4 && Math.abs(y) === 0) || (Math.abs(x) === 3 && Math.abs(y) === 3)) {
            renderableFirework = renderableFirework.concat({x: (startX + x), y: (startY + y), status: sstatus});
          }
        }
      }
      this.switchPixels(renderableFirework);
    }

    fireworkFrame++;

    if (shot % 6 === 0) {
      frame6('off');
      fireworkFrame = 1;
      startX = Math.floor(Math.random() * 6) + 2;
      startY = Math.floor(Math.random() * 8) + 2;
    }

    switch (fireworkFrame) {
      case 1:
        frame1();
        break;
      case 2:
        frame1('off');
        frame2();
        break;
      case 3:
        frame2('off');
        frame3();
        break;
      case 4:
        frame3('off');
        frame4();
        break;
      case 5:
        frame4('off');
        frame5();
        break;
      case 6:
        frame5('off');
        frame6();
        break;
      default:
        return;
    }
  }
  
  let tick = () => {
    if (!this.state.isCelebrating) {
      return;
    };

    if (renderableText.length > 0) {
      renderableText.forEach(item => {
        item.status = 'off';
      });

      this.switchPixels(renderableText);
    }

    text.forEach(item => {
      item.x--;
    });

    renderableText = text.map(item => {
      if (item.x < 10) {
        item.status = 'on';
      }
      return item;
    });

    this.switchPixels(renderableText);
    firework(frame);

    frame++;

    if (frame < 42) {
      setTimeout(tick, 100);
    } else {
      text.forEach(item => {
        item.x += frame;
      });
      frame = 0;
      requestAnimationFrame(tick);
    }
  }

  this.playSound('victory');
  tick();
}