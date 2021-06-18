class dustbin extends base{
	constructor(x, y, width, height){
		super(x, y, width, height, options);
		this.image=loadImage("dustbingreen.png");

		var options={
			friction:3.5
		}
	}

	display(){
		super.display();
	}
}