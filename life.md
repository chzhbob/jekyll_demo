---
layout: index
title: Life
---

<canvas id="life" height="800" width="800"></canvas>

<script type="text/javascript">
	$(function(){
		var canvas=document.getElementById('life');
		var ctx=canvas.getContext('2d');
		ctx.fillStyle="#FF0000";
		var defaultWidth = 80;
		var defaultHeight = 80;
		var pointWidth = 10;
		var pointMargin = 1;
		var points = [];
		var tmpPoints = [];
		var startPoints = [[0,1],[1,2],[2,0],[2,1],[2,2]];
		

		function init(){

			for(var i = 0 ; i < defaultWidth ; i++){
				points[i] = [];
				tmpPoints[i] = [];
				for(var j = 0 ; j < defaultHeight ; j++){
					points[i][j] = 0;
					tmpPoints[i][j] = 0;
				}
			}

			for(var i in startPoints){
				points[startPoints[i][0]][startPoints[i][1]] = 1;
			}

			redraw();
		}

		function redraw(){

			for(var i = 0 ; i < defaultWidth ; i++){
				for(var j = 0 ; j < defaultHeight ; j++){
					if (points[i][j] == 1) {
						var leftPx = i * (pointWidth + pointMargin);
						var topPx = j * (pointWidth + pointMargin);
						var arr = [leftPx,topPx,leftPx + pointWidth,topPx + pointWidth];
						ctx.fillRect(leftPx,topPx,pointWidth,pointWidth);
					}
				}
			}

			recount();
			//setTimeout(redraw,500);
		}

		function recount(){
			for(var i = 0 ; i < defaultWidth ; i++){
				for(var j = 0 ; j < defaultHeight ; j++){
					status = getStatus(i,j);
					console.log(status);
					switch (status){
						case 'tooLittle':
							tmpPoints[i][j] = 0;
							break;
						case 'tooMuch':
							tmpPoints[i][j] = 0;
							break;
						case 'born':
							tmpPoints[i][j] = 1;
							break;
						case 'normal':
							// tmpPoints[i][j] = 1;
							break;
					}
				}
			}

			for(var i = 0 ; i < defaultWidth ; i++){
				for(var j = 0 ; j < defaultHeight ; j++){
					points[i][j] = tmpPoints[i][j];
				}
			}
		}

		function getStatus(i,j){
			var count = 0;
			var neighbour = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
			console.log(count);
			for(var k in neighbour){
				if(i + neighbour[k][0] >= 0 && i + neighbour[k][0] < defaultWidth){
					if(j + neighbour[k][1] >= 0 && j + neighbour[k][1] < defaultHeight){
						if (points[i + neighbour[k][0][j + neighbour[k][1]]]) {
							count++;
						};
					}
				}
			}

			if(count < 2){
				return 'tooLittle';
			}else if(count > 3){
				return 'tooMuch';
			}else if(count == 3){
				return 'born';
			}else if(count == 2){
				return 'normal';
			}
		}

		init();
	});
</script>