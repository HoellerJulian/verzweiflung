function myDisplay() {
    return new Promise(function(resolve, reject) {
      resolve("Hello there, General Kenobi");
    });

  }
  
  await myDisplay();