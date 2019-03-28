function addBoxListeners(listenerArgs) {
  const {
    game,
    cells,
    level,
    callBack
  } = listenerArgs;

  cells.forEach(cell => cell.addEventListener('click', callBack({
    game,
    cells,
    level,
  }), {
    once: true,
  }));
}

function removeListeners(listenerArgs) {
  const {
    game,
    cells,
    level,
    callBack,
  } = listenerArgs;

  cells.forEach(cell => cell.removeEventListener('click', callBack({
    game,
    cells,
    level,
  }), {
    once: true,
  }));

}

function boxCallBack(callBackArgs, e) {
  const {
    game,
    cells,
    level,
  } = callBackArgs;
  return innerCallBack
}

function innerCallBack(e) {
  e.stopPropagation();
  console.log(e);
}

export {
  addBoxListeners,
  removeListeners,
  boxCallBack,
};