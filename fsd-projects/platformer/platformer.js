$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
   createPlatform(500, 0, 20, 290);
    createPlatform(1350, 400, 50, 50, "red");
  createPlatform(200, 700, 50, 50, "red");
  createPlatform(200, 650, 50, 50, "red");
  createPlatform(500, 700, 50, 50, "blue");
  createPlatform(500, 650, 50, 50, "blue");
  createPlatform(750, 700, 50, 50, "lime");
  createPlatform(750, 650, 50, 50, "lime");
  createPlatform(1000, 650, 50, 50, "yellow");
  createPlatform(1000, 700, 50, 50, "yellow");
  createPlatform(1200, 700, 50, 50, "purple");
  createPlatform(1200, 650, 50, 50, "purple");

    // TODO 3 - Create Collectables
    createCollectable("steve", 1300, 600);
createCollectable("diamond", 200, 170, 0.5, 0.7);
 createCollectable("max", 800,600 );

    
    // TODO 4 - Create Cannons

createCannon("top", 200, 1000);
createCannon("top", 900, 500);
 createCannon("right", 800, 500);   
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
