let port, reader, writer;

async function setup() {
	createCanvas(windowWidth, windowHeight);
	noLoop();
	({ port, reader, writer } = await getPort());
	loop();

  textSize(72);
  fill(255,255,255);
  text(`Temperature:`, 40, 100);
   text(`Humidity:`, 40, 250);
    text(`StatusTemp:`, 40, 400);
     text(`StatusHumd:`, 40, 550);

}

async function draw() {
	try {
		while (true) {
			const { value, done } = await reader.read();

			if (done) {
				// Allow the serial port to be closed later.
				reader.releaseLock();
				break;
			}
			if (value) {
        clear();
        // random RGB color
				background(36,37,38);
        let data = value.split(";");
        textSize(72);
         fill(255,255,255);
  text(`Temperature: ${data[0]} ℃`, 40, 100);
   text(`Humidity:${data[1]} ℃`, 40, 250);
    text(`StatusTemp:${data[2]} ℃`, 40, 400);
     text(`StatusHumd:${data[3]} ℃`, 40, 550);

				console.log(value);
			}
		}
	} catch (e) { console.error(e) }
}