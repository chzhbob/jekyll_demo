---
layout: index
title: Life
---

<canvas id="life" height="1000" width="1000"></canvas>

<script type="text/javascript">
	$(function(){
		var canvas=document.getElementById('life');
		var ctx=canvas.getContext('2d');
		var defaultWidth = 100;
		var defaultHeight = 100;
		var pointWidth = 10;
		var pointMargin = 1;
		var points = {};
		var tmpPoints = {};
		var startPoints = [[1,2],[2,3],[3,1],[3,2],[3,3]];
		

		function init(){
			for(var i = 0 ; i < defaultWidth ; i++){
				points[i] = {};
				tmpPoints[i] = {};
				for(var j = 0 ; j < defaultHeight ; j++){
					points[i][j] = 0;
					tmpPoints[i][j] = 0;
				}
			}

			for(var i in startPoints){
				points[startPoints[i][0]][startPoints[i][1]] = 1;
			}


			canvas.addEventListener('click', function(e){
				console.log(e);
				var x = Math.floor(e.offsetX / pointWidth + pointMargin) - 1;
				var y = Math.floor(e.offsetY / pointWidth + pointMargin) - 1;
				points[x][y] = 1;
				// redraw();
			});
			
			redraw();
		}

		function redraw(){

			for(var i = 0 ; i < defaultWidth ; i++){
				for(var j = 0 ; j < defaultHeight ; j++){
					var leftPx = i * (pointWidth + pointMargin);
					var topPx = j * (pointWidth + pointMargin);
					var arr = [leftPx,topPx,leftPx + pointWidth,topPx + pointWidth];
					if (points[i][j] == 1) {
						ctx.fillStyle="#FF0000";
						ctx.fillRect(leftPx,topPx,pointWidth,pointWidth);
					}else{
						ctx.fillStyle="#FFFFFF";
						ctx.fillRect(leftPx,topPx,pointWidth,pointWidth);
					}
				}
			}

			recount();
			setTimeout(redraw,50);
		}

		function recount(){
			for(var i = 0 ; i < defaultWidth ; i++){
				for(var j = 0 ; j < defaultHeight ; j++){
					status = getStatus(i,j);
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
							tmpPoints[i][j] = points[i][j];
							break;
					}
				}
				// console.log("-");
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
			for(var k in neighbour){
				if(i + neighbour[k][0] >= 0 && i + neighbour[k][0] < defaultWidth){
					if(j + neighbour[k][1] >= 0 && j + neighbour[k][1] < defaultHeight){
						if (points[i + neighbour[k][0]][j + neighbour[k][1]]) {
							count++;
						};
					}
				}
			}

			// console.log("(%d,%d) 's count is %d", i, j , count);
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