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

  

</ul>

<style type="text/css">
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


</style>