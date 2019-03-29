const mixin = (() => ({
  makeChoice(game, level, intelligentFn) {
    return level === "easy" ? this.board.emptySquares()[0] : intelligentFn(game, this).index;
  },
}))();

export default mixin;