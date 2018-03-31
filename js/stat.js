'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TITLE_GAP = 35;
var FONT_GAP = 15;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + TITLE_GAP, CLOUD_Y + TITLE_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + TITLE_GAP, CLOUD_Y + TITLE_GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var currentX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var currentY = CLOUD_Y + CLOUD_HEIGHT - GAP;
    var currentBarHeigth = (BAR_HEIGHT * times[i]) / maxTime;
    var randomOpacity = Math.random() * 0.9 + 0.1;

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], currentX, currentY);

    ctx.fillStyle = 'rgba(0, 0, 255, ' + randomOpacity + ')';

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(currentX, currentY - GAP - FONT_GAP - currentBarHeigth, BAR_WIDTH, currentBarHeigth);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), currentX, currentY - 2 * GAP - FONT_GAP - currentBarHeigth);
  }
};
