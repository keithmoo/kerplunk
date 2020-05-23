// import store from "./store";




function start() {
  // render();
  bindEventListeners();
}

// function render() {
//   let html = '';
//   // html += buildMarbles();
//   html += buildSticks();
//   // html += buildFailPile();
//   $('main').html(html);
// }

// function buildMarbles(){
//   let html = '';
//   let marbles = store.marblesTop.map((marbles) => generateItemElement(marbles))
// }

// const deleteStick = function(id) {
  // const index = store.sticks.findIndex(sticks => sticks.id === id);
  // store.sticks.splice(index,1)
  // $(`#${id}`).remove();
// }

const handleDeleteStickClickedRed = function () {
  $('.stickContainer').on('click', '#red', event => {
    event.preventDefault();
    // const id = getItemIdFromElement(event.currentTarget);
    // dropMarbles();
    // deleteStick(id);
    $('#red').remove();
    dropMarbles();
  });
};

const handleDeleteStickClickedOrange = function () {
  $('.stickContainer').on('click', '#orange', event => {
    event.preventDefault();
    // const id = getItemIdFromElement(event.currentTarget);
    // dropMarbles();
    // deleteStick(id);
    $('#orange').remove();
    dropMarbles();
  });
};


const handleDeleteStickClickedYellow = function () {
  $('.stickContainer').on('click', '#yellow', event => {
    event.preventDefault();
    // const id = getItemIdFromElement(event.currentTarget);
    // dropMarbles();
    // deleteStick(id);
    $('#yellow').remove();
    dropMarbles();
  });
};

const handleDeleteStickClickedGreen = function () {
  $('.stickContainer').on('click', '#green', event => {
    event.preventDefault();
    // const id = getItemIdFromElement(event.currentTarget);
    // dropMarbles();
    // deleteStick(id);
    $('#green').remove();
    dropMarbles();
  });
};


const handleDeleteStickClickedBlue = function () {
  $('.stickContainer').on('click', '#blue', event => {
    event.preventDefault();
    // const id = getItemIdFromElement(event.currentTarget);
    // dropMarbles();
    // deleteStick(id);
    $('#blue').remove();
    dropMarbles();
  });
};

const handleDeleteStickClickedIndigo = function () {
  $('.stickContainer').on('click', '#indigo', event => {
    event.preventDefault();
    // const id = getItemIdFromElement(event.currentTarget);
    // dropMarbles();
    // deleteStick(id);
    $('#indigo').remove();
    dropMarbles();
  });
};

const handleDeleteStickClickedViolet = function () {
  $('.stickContainer').on('click', '#violet', event => {
    event.preventDefault();
    // const id = getItemIdFromElement(event.currentTarget);
    // dropMarbles();
    // deleteStick(id);
    $('#violet').remove();
    dropMarbles();
  });
};

const handleDeleteStickClickedBlack = function () {
  $('.stickContainer').on('click', '#black', event => {
    event.preventDefault();
    // const id = getItemIdFromElement(event.currentTarget);
    // dropMarbles();
    // deleteStick(id);
    $('#black').remove();
    dropMarbles();
  });
};

const handleDeleteStickClickedCyan = function () {
  $('.stickContainer').on('click', '#cyan', event => {
    event.preventDefault();
    // const id = getItemIdFromElement(event.currentTarget);
    // dropMarbles();
    // deleteStick(id);
    $('#cyan').remove();
    dropMarbles();
  });
};

const handleDeleteStickClickedPurple = function () {
  $('.stickContainer').on('click', '#purple', event => {
    event.preventDefault();
    // const id = getItemIdFromElement(event.currentTarget);
    // dropMarbles();
    // deleteStick(id);
    $('#purple').remove();
    dropMarbles();
  });
};

const handleDeleteStickClickedPink = function () {
  $('.stickContainer').on('click', '#pink', event => {
    event.preventDefault();
    // const id = getItemIdFromElement(event.currentTarget);
    // dropMarbles();
    // deleteStick(id);
    $('#pink').remove();
    dropMarbles();
  });
};

const dropMarbles = function () {
  // let x = Math.floor(Math.random() * 6);
  // let r = Math.floor(Math.random() * 5);
  // if (x < 3) {
  //   render();
  // }
  // else if (r === 0) {
  //   render();
  // }
  // else {
  //   store.marblesTop.splice(0,r);
  //   store.marblesBottom.push(<div class='marble'></div>)
  // }

  let rand = Math.floor(Math.random() * 14);


  if (rand >= 5 && rand <= 6) {
    // console.log('dropEm');
    dropEm();
  }
  else if (rand > 6 && rand <=8) {
    // console.log('dropEm2');
    dropEm2();
  }
  else if (rand > 8 && rand <=10) {
    // console.log('dropEm3');
    dropEm3();
  }
  else if (rand > 10 && rand <= 12) {
    // console.log('dropEm4');
    dropEm4();
  }
  else if (rand === 13) {
    // console.log('dropEm5');
    dropEm5();
  }
  
};

  


const dropEm = function () {
  let x = document.getElementById('1d');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  }
  let y = document.getElementById('1');
  if (y.style.display === 'block') {
    y.style.display = 'none';
  } else {
    y.style.display = 'none';
  }
  let a = document.getElementById('4d');
  if (a.style.display === 'none') {
    a.style.display = 'block';
  }
  let b = document.getElementById('4');
  if (b.style.display === 'block') {
    b.style.display = 'none';
  } else {
    b.style.display = 'none';
  }
};

const dropEm2 = function () {
  let x = document.getElementById('2d');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  }
  let y = document.getElementById('2');
  if (y.style.display === 'block') {
    y.style.display = 'none';
  } else {
    y.style.display = 'none';
  }
  let z = document.getElementById('3d');
  if (z.style.display === 'none') {
    z.style.display = 'block';
  }
  let a = document.getElementById('3');
  if (a.style.display === 'block') {
    a.style.display = 'none';
  } else {
    a.style.display = 'none';
  }
  let b = document.getElementById('5d');
  if (b.style.display === 'none') {
    b.style.display = 'block';
  }
  let c = document.getElementById('5');
  if (c.style.display === 'block') {
    c.style.display = 'none';
  } else {
    c.style.display = 'none';
  }
  let d = document.getElementById('6d');
  if (d.style.display === 'none') {
    d.style.display = 'block';
  }
  let f = document.getElementById('6');
  if (f.style.display === 'block') {
    f.style.display = 'none';
  } else {
    f.style.display = 'none';
  }
};

const dropEm3 = function () {
  let x = document.getElementById('7d');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  }
  let y = document.getElementById('7');
  if (y.style.display === 'block') {
    y.style.display = 'none';
  } else {
    y.style.display = 'none';
  }
  let a = document.getElementById('8d');
  if (a.style.display === 'none') {
    a.style.display = 'block';
  }
  let b = document.getElementById('8');
  if (b.style.display === 'block') {
    b.style.display = 'none';
  } else {
    b.style.display = 'none';
  }
  let c = document.getElementById('9d');
  if (c.style.display === 'none') {
    c.style.display = 'block';
  }
  let d = document.getElementById('9');
  if (d.style.display === 'block') {
    d.style.display = 'none';
  } else {
    d.style.display = 'none';
  }
  
};


const dropEm4 = function () {
  let x = document.getElementById('10d');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  }
  let y = document.getElementById('10');
  if (y.style.display === 'block') {
    y.style.display = 'none';
  } else {
    y.style.display = 'none';
  }
  let z = document.getElementById('11d');
  if (z.style.display === 'none') {
    z.style.display = 'block';
  }
  let a = document.getElementById('11');
  if (a.style.display === 'block') {
    a.style.display = 'none';
  } else {
    a.style.display = 'none';
  }
  let b = document.getElementById('12d');
  if (b.style.display === 'none') {
    b.style.display = 'block';
  }
  let c = document.getElementById('12');
  if (c.style.display === 'block') {
    c.style.display = 'none';
  } else {
    c.style.display = 'none';
  }
  let d = document.getElementById('13d');
  if (d.style.display === 'none') {
    d.style.display = 'block';
  }
  let f = document.getElementById('13');
  if (f.style.display === 'block') {
    f.style.display = 'none';
  } else {
    f.style.display = 'none';
  }
  let g = document.getElementById('14d');
  if (g.style.display === 'none') {
    g.style.display = 'block';
  }
  let h = document.getElementById('14');
  if (h.style.display === 'block') {
    h.style.display = 'none';
  } else {
    h.style.display = 'none';
  }
};

const dropEm5 = function () {
  let x = document.getElementById('1d');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  }
  let y = document.getElementById('1');
  if (y.style.display === 'block') {
    y.style.display = 'none';
  } else {
    y.style.display = 'none';
  }
  let a = document.getElementById('2d');
  if (a.style.display === 'none') {
    a.style.display = 'block';
  }
  let b = document.getElementById('2');
  if (b.style.display === 'block') {
    b.style.display = 'none';
  } else {
    b.style.display = 'none';
  }
  let j = document.getElementById('8d');
  if (j.style.display === 'none') {
    j.style.display = 'block';
  }
  let p = document.getElementById('8');
  if (p.style.display === 'block') {
    p.style.display = 'none';
  } else {
    p.style.display = 'none';
  }
  let z = document.getElementById('11d');
  if (z.style.display === 'none') {
    z.style.display = 'block';
  }
  let m = document.getElementById('11');
  if (m.style.display === 'block') {
    m.style.display = 'none';
  } else {
    m.style.display = 'none';
  }
  let t = document.getElementById('15d');
  if (t.style.display === 'none') {
    t.style.display = 'block';
  }
  let c = document.getElementById('15');
  if (c.style.display === 'block') {
    c.style.display = 'none';
  } else {
    c.style.display = 'none';
  }
  let d = document.getElementById('13d');
  if (d.style.display === 'none') {
    d.style.display = 'block';
  }
  let f = document.getElementById('13');
  if (f.style.display === 'block') {
    f.style.display = 'none';
  } else {
    f.style.display = 'none';
  }
  let g = document.getElementById('6d');
  if (g.style.display === 'none') {
    g.style.display = 'block';
  }
  let h = document.getElementById('6');
  if (h.style.display === 'block') {
    h.style.display = 'none';
  } else {
    h.style.display = 'none';
  }
  let o = document.getElementById('9d');
  if (o.style.display === 'none') {
    o.style.display = 'block';
  }
  let q = document.getElementById('9');
  if (q.style.display === 'block') {
    q.style.display = 'none';
  } else {
    q.style.display = 'none';
  }
};

const bindEventListeners = function () {
  handleDeleteStickClickedRed();
  handleDeleteStickClickedOrange();
  handleDeleteStickClickedYellow();
  handleDeleteStickClickedGreen();
  handleDeleteStickClickedBlue();
  handleDeleteStickClickedIndigo();
  handleDeleteStickClickedViolet();
  handleDeleteStickClickedPink();
  handleDeleteStickClickedPurple();
  handleDeleteStickClickedCyan();
  handleDeleteStickClickedBlack();
};

$(start);