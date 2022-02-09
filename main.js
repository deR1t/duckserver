class Ducky
{
	constructor(x, y, vx, vy)
	{
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.grav = 0.1;
		this.shouldDelete = false;

		this.duckimg = document.createElement("img");
		this.duckimg.src = "duck.png"
		this.duckimg.style.display = "inline"
		this.duckimg.style.position = "absolute"
		this.duckimg.style.transform = "translate(-50%,-50%)"
		document.body.appendChild(this.duckimg)

	}

	update()
	{
		this.vy += this.grav;
		this.x += this.vx;
		this.y += this.vy;

		this.duckimg.style.width = 8 + "vw"
		this.duckimg.style.height = 8 + "vw"
		this.duckimg.style.left = this.x + "vw";
		this.duckimg.style.top = this.y + "vh";

	}

	delete()
	{
		document.body.removeChild(this.duckimg)
		this.duckimg.remove()
		
		this.shouldDelete = true;
	}

}


duckies = []
duckiesToDelete = []
document.body.style.overflow = "hidden"

function rnd(min, max)
{
	return Math.random() * (max - min) + min;
}

document.body.style.backgroundImage = "url(duckimages/" + Math.round( rnd(1, 21) ) + ".jpg)"
console.log(document.body.style.backgroundImage)

setInterval(() => {

	var x = rnd(-10, 110);
	var y = -8;
	var vx = rnd(-1, 1)
	var vy = 0
	duckies.push(new Ducky(x, y, vx, vy))

	for (let di = 0; di < duckies.length; di++) {
		const duck = duckies[di];
		duck.update()
		if(duck.y > 108)
		{
			duckiesToDelete.push(di)
		}
	}

	duckiesToDelete.forEach(duckToDelete => {
		duckies[duckToDelete].delete()
		duckies.splice(duckToDelete, 1)
	});

	duckiesToDelete = []

}, 40);
