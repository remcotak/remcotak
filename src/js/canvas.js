const canvas = () => {
  const canvas = document.querySelector('[data-component="canvas"');

  if (!canvas) {
    return;
  }

  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return;
  }

  console.log(canvas.parentElement.offsetWidth);
  canvas.height = canvas.parentElement.offsetHeight;
  canvas.width = canvas.parentElement.offsetWidth;

  const Droplet = function(dropletSize, spawn) {
    this.size = dropletSize;
    this.alpha = 0.01;
    this.alphaIncrease = 0.02;
    this.colors = ['#E58154', '#F8D259', '#5F39E8', '#CBA2E8'];
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];


    this.spawn = {
      x: spawn.x,
      y: spawn.y
    }

    this.pos = {
      x: this.spawn.x,
      y: this.spawn.y
    };

    this.vel = {
      y: 5
    };

    this.distance = {
      y: 0
    };

  }

  Droplet.prototype.move = function() {
    this.pos.y += this.vel.y;
    this.distance.y = this.pos.y - this.spawn.y;
  }

  Droplet.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.arc(this.pos.x, this.pos.y, this.size/2, 0, 2 * Math.PI, false);
    ctx.fill();

    this.alpha += this.alphaIncrease;
  }

  const Model = function() {
    this.dropletSize = 15;
    this.maxDistance = 300;
    this.maxDroplets = canvas.width/this.dropletSize;
  }

  const Render = function() {
  }

  Render.prototype.draw = function() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
  }

  const Controller = function() {
    this.droplets = [];
    this.render = new Render();
    this.model = new Model();
    this.update();
  }

  Controller.prototype.update = function() {
    if ( this.droplets.length < this.model.maxDroplets ) {
      this.droplets.push(
        new Droplet(
          this.model.dropletSize,
          { x: this.model.dropletSize*this.droplets.length,
            y: Math.floor(Math.random() * 100)
          }
        ));
    }

    this.droplets.forEach((droplet) => {
      if (droplet.distance.y >= this.model.maxDistance ) {
        return;
      }
      droplet.move();
      droplet.draw();
    });


    window.requestAnimationFrame(() => {
      this.update();
    })
  }

  const controller = new Controller();
}

export default canvas;
