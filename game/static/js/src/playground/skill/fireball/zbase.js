class FireBall extends AcGameObject{
    constructor(playground, player, x, y, radius, vx, vy, color, speed, move_length, damage){
        super();
        this.playground = playground;
        this.player = player;
        this.ctx = this.playground.game_map.ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.speed = speed;
        this.move_length = move_length;
        this.damage = damage;
        this.eps = 0.1;
    }

    start(){

    }

    update(){
        if(this.move_length < this.eps){
            this.destroy();
            return false;
        }else{
            let moved = Math.min(this.move_length, this.speed * this.timedelta / 1000);
            this.x += this.vx * moved;
            this.y += this.vy * moved;
            this.move_length -= moved;
        }

        for(let i = 0; i < this.playground.players.length; i ++) {
            let other_player = this.playground.players[i];
            if(this.player !== other_player && this.is_collision(other_player)) {
                this.attack(other_player);
            }
        }

        this.render();
    }

    get_dist(x1, y1, x2, y2) {
        let dx = x2 - x1;
        let dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }

    is_collision(other_player) {
        let distance = this.get_dist(this.x, this.y, other_player.x, other_player.y);
        if(distance < this.radius + other_player.radius) {
            return true;
        }else {
            return false;
        }
    }

    attack(other_player) {
        let angle = Math.atan2(other_player.y - this.y, other_player.x - this.x);
        other_player.is_attacked(angle, this.damage);
        this.destroy();
        // console.log("radius:", other_player.radius);
        // console.log("fireball has been destroied !");
    }

    render(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}
