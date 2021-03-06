class zawR {
  constructor() {
    this.shapeCode = 0;
    this.positionsOnBoard = [[0, 4], [0, 5], [1, 3], [1, 4]];
  }

  rotate() {
    this.shapeCode++;
    this.updateShape(this.shapeCode);
  }

  updateShape(shapeCode) {
    let currentPositions = this.positionsOnBoard;
    shapeCode = shapeCode % 2;

    let shapes = {
      1: () => {
        // 0
        let toUpdate = currentPositions[0];
        let newX = toUpdate[0] - 1;
        let newY = toUpdate[1];
        currentPositions[0] = [newX, newY];
        // 1
        toUpdate = currentPositions[1];
        newX = toUpdate[0];
        newY = toUpdate[1] - 1;
        currentPositions[1] = [newX, newY];
        // 2
        toUpdate = currentPositions[2];
        newX = toUpdate[0] - 1;
        newY = toUpdate[1] + 2;
        currentPositions[2] = [newX, newY];
        // 3
        toUpdate = currentPositions[3];
        newX = toUpdate[0];
        newY = toUpdate[1] + 1;
        currentPositions[3] = [newX, newY];
        this.positionsOnBoard = currentPositions;
      },
      0: () => {
        // 0
        let toUpdate = currentPositions[0];
        let newX = toUpdate[0] + 1;
        let newY = toUpdate[1];
        currentPositions[0] = [newX, newY];
        // 1
        toUpdate = currentPositions[1];
        newX = toUpdate[0];
        newY = toUpdate[1] + 1;
        currentPositions[1] = [newX, newY];
        // 2
        toUpdate = currentPositions[2];
        newX = toUpdate[0] + 1;
        newY = toUpdate[1] - 2;
        currentPositions[2] = [newX, newY];
        // 3
        toUpdate = currentPositions[3];
        newX = toUpdate[0];
        newY = toUpdate[1] - 1;
        currentPositions[3] = [newX, newY];
        this.positionsOnBoard = currentPositions;
      }
    };
    shapes[shapeCode]();
  }
}

module.exports = zawR;
