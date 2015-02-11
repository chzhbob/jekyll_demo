---
layout: index
title: DEMO
---

<ul class="posts list-unstyled">

	<li class="post-item">
  		<h1 class="post-title">keyframe动画——心跳效果</h1>
  		<section class="demo-item wrap">
  			<section class="code" style="width:350px;">
{% highlight css %}  
@-webkit-keyframes animateHeart {
	0% {
		-webkit-transform: scale(1)
	}
	5% {
		-webkit-transform: scale(1.2)
	}
	10% {
		-webkit-transform: scale(1.1)
	}
	15% {
		-webkit-transform: scale(1.3)
	}
	50% {
		-webkit-transform: scale(1)
	}
	100% {
		-webkit-transform: scale(1)
	}
}
{% endhighlight %} 
  			</section>
  			<section class="view" style="padding-top:75px;">
  				<img id="heart" src="/images/heart.png">	
  			</section>
  		</section>
  	</li>

  	<li class="post-item">
  		<h1 class="post-title">first-child 与 last-child</h1>
  		<section class="demo-item wrap">
  			<section class="code" style="width:350px;">
{% highlight css %}  
.last-child-demo li:last-child{
	color: blue;
}
.last-child-demo li:first-child{
	color: green;
}
{% endhighlight %} 
  			</section>
  			<section class="view">
  				<ul class="last-child-demo">
					<li>这是第一行</li>
					<li>这是第二行</li>
					<li>这是第三行</li>
					<li>这是第四行</li>
					<li>这是第五行</li>
				</ul>
  			</section>
  		</section>
  		<p class="post-desc">文档说<a target="_blank" href="http://www.w3school.com.cn/cssref/selector_first-child.asp"><i>所有主流浏览器都支持 :first-child 选择器</i></a>，但是<a target="_blank" href="http://www.w3school.com.cn/cssref/selector_last-child.asp"><i>所有主流浏览器均支持 :last-child 选择器，<strong>除了IE8及更早的版本</strong>。</i></a>因此last-child与first-child的兼容范围是不一样的，特例是IE8。</p>
  	</li>

  

</ul>

<style type="text/css">
/*******************keyframes*******************/
	.code{
		float: left;
	}
	.view{
		text-align: center;
	}
	.demo-item{
		padding: 10px 0 20px;
	}
	#heart{
		-webkit-animation:animateHeart 3s infinite; 
	}

	@-webkit-keyframes animateHeart {
		0% {
			-webkit-transform: scale(1)
		}

		5% {
			-webkit-transform: scale(1.2)
		}

		10% {
			-webkit-transform: scale(1.1)
		}

		15% {
			-webkit-transform: scale(1.3)
		}

		50% {
			-webkit-transform: scale(1)
		}

		100% {
			-webkit-transform: scale(1)
		}
	}
/*******************end of keyframes*******************/

/*******************last child demo*******************/
.last-child-demo{
	list-style: none;
}
.last-child-demo li:last-child{
	color: blue;
}
.last-child-demo li:first-child{
	color: green;
}

/*******************end of last child demo*******************/
</style>