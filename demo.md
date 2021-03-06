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
  		<p style="padding-bottom:20px;" class="post-desc">文档说<a target="_blank" href="http://www.w3school.com.cn/cssref/selector_first-child.asp"><i>所有主流浏览器都支持 :first-child 选择器</i></a>，但是<a target="_blank" href="http://www.w3school.com.cn/cssref/selector_last-child.asp"><i>所有主流浏览器均支持 :last-child 选择器，<strong>除了IE8及更早的版本</strong>。</i></a>因此last-child与first-child的兼容范围是不一样的，特例是IE8。</p>
  	</li>



	<li class="post-item">
  		<h1 class="post-title">自带字体速查</h1>
  		<section class="demo-item wrap">
  			<section class="code" style="width:350px;">
{% highlight css %}
/* 网页字体通常分为5类 */
sans-serif /* (无衬线)  */
serif /* (衬线)  */
monospace /* (等宽)  */
fantasy /* (梦幻)  */
cuisive /* (草体)  */
/* 无衬线类 */
Helvetica, sans-serif
Arial, sans-serif
Lucida Grande, sans-serif
Verdana,sans-serif
Tahoma, sans-serif
Trebuchet MS, sans-serif
/* 衬线类 */
Georgia, serif
Times, serif
/* 中文字体 */
'宋体'
'微软雅黑'
'华文细黑'
'黑体'
{% endhighlight %} 
  			</section>
  			<section class="view" style="padding-top:25px;float:left;">
  				<ul class="font-family-demo">
					<li style="font-family: sans-serif;"><span class="test-font">你好 hello world</span> sans-serif</li>
					<li style="font-family: serif;"><span class="test-font">你好 hello world</span>  serif </li>
					<li style="font-family: monospace;"><span class="test-font">你好 hello world</span>   monospace </li>
					<li style="font-family: fantasy;"><span class="test-font">你好 hello world</span>    fantasy </li> 
					<li style="font-family: cuisive;"><span class="test-font">你好 hello world</span>   cuisive </li>
					<li>&nbsp;</li>
					<li style="font-family: Helvetica, sans-serif;"><span class="test-font">你好 hello world</span>   Helvetica </li>
					<li style="font-family: Arial, sans-serif;"><span class="test-font">你好 hello world</span>   Arial </li>
					<li style="font-family: 'Lucida Grande', sans-serif;"><span class="test-font">你好 hello world</span>   Lucida Grande </li>
					<li style="font-family: Verdana,sans-serif;"><span class="test-font">你好 hello world</span> Verdana </li> 
					<li style="font-family: Tahoma, sans-serif;"><span class="test-font">你好 hello world</span> Tahoma </li>
					<li style="font-family: 'Trebuchet MS', sans-serif;"><span class="test-font">你好 hello world</span> Trebuchet MS </li>
					<li>&nbsp;</li>
					<li style="font-family: Georgia, serif;"><span class="test-font">你好 hello world</span> Georgia </li>
					<li style="font-family: Times, serif;"><span class="test-font">你好 hello world</span> Times </li>
					<li>&nbsp;</li>
					<li style="font-family: 宋体"><span class="test-font">你好 hello world</span> 宋体 </li>
					<li style="font-family: 微软雅黑"><span class="test-font">你好 hello world</span> 微软雅黑 </li>
					<li style="font-family: 华文细黑"><span class="test-font">你好 hello world</span> 华文细黑 </li>
					<li style="font-family: 黑体"><span class="test-font">你好 hello world</span> 黑体 </li>
				</ul>
  			</section>
  		</section>
  		<section class="font-family-input-wrapper" style="margin-bottom:20px;">
  			<input id="font_family_input" class="font-family-input" type="text" value="" placeholder="输入内容查看效果..." />	
  		</section>
  	</li>

  	<li class="post-item">
  		<h1 class="post-title">无刷新页面更改URL</h1>
  		<section class="demo-item wrap">
  			<section class="code" style="width:350px;">
{% highlight js %}
history.pushState('','','/about/');
{% endhighlight %} 
  			</section>
  			<section class="view" style="">
  				<a href="javascript:void(0)" onclick="history.pushState('','','/about/');">点击 (注意URL栏的变化)</a>
  			</section>
  		</section>
  		<p style="padding-bottom:20px;">HTML5为history对象添加了两个新方法，history.pushState() 和 history.replaceState()，用来在浏览历史中添加和修改记录。所有主流浏览器都支持该方法。</p>
  	</li>

  	<li class="post-item">
  		<script type="text/javascript" src="/js/zepto.blink.js"></script>
  		<h1 class="post-title">MONO闪闪的文字效果</h1>
  		<section class="demo-item wrap">
  			<section style="width:350px;">
			{% highlight js %}
$(".blink-text").blink({'duration':3});
			{% endhighlight %} 
  			</section>
  			<section class="view" style="width:350px;margin-top:10px;">
  				<section class="blink-wrapper">
					<h1 class="blink-text">世间也需要没用的东西，如果一切事物都必须有其意义，会让人喘不过气来</h1>
					<p class="blink-text-author">——是枝裕和</p>
					<a href="javascript:void(0)" id="blink_reply" class="invalid" title="再看一遍"><i class="icon-cw-circle"></i></a>
				</section>
  			</section>
  		</section>
  		<script type="text/javascript">
  			$(function(){
  				var blinkReply = function(){
  					$(".blink-text").blink({'duration':3});
					setTimeout(function(){
						$(".blink-text-author").show().blink({'duration':3});
						setTimeout(function(){
							$("#blink_reply").removeClass('invalid');
						},3000);
					},1500);
  				}
  				$("#blink_reply").click(function(){
  					if(!$(this).hasClass('invalid')){
  						$("#blink_reply").addClass('invalid');
	  					$(".blink-text-author").hide();
	  					blinkReply();
  					}
  				});
				blinkReply();
			});
  		</script>
  		<p style="padding-bottom:20px;">最近下载了叫MONO的APP来用，被清新了一脸啊好像回到了16岁，尤其是里面那个文字闪闪效果让人忍不住要舔屏幕了= =|||<br />于是乎用JS模拟实现了个，<a href="https://github.com/chzhbob/blink" target="_blank">源码在这里</a>，jQuery zepto通用，唯一的参数duration用于控制闪出时间的长短，单位是s(秒)</p>
  	</li>

  	<li class="post-item">
  		<h1 class="post-title">keyframe动画——loading</h1>
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
  				<section id="loading" class="running">
				</section>
  			</section>
  		</section>
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

/*******************font family demo*******************/
.font-family-demo{
	list-style: none;
	text-align: left;
	padding-left: 20px;
}
.font-family-demo li{
	font-size: 13px;
	letter-spacing: 0.015em;
	line-height: 120%;
}
.font-family-input-wrapper{
	border: 1px solid #ddd;
	border-radius: 5px;
	padding: 5px;
}
.font-family-input{
	width: 100%;
	border: 0px;
	font-size: 14px;
	outline: 0px;
}

/*******************end of font family demo*******************/

/*******************blink demo*******************/
.blink-text{
	font-size: 20px;
	line-height: 1.8;
	font-weight: normal;
	color: white;
	padding: 50px 50px 20px;
	text-align: left;
}
.blink-text-author{
	font-size: 14px;
	color: white;
	display: none;
	padding-bottom: 40px;
	text-align: right;
	padding-right: 50px;
}
.blink-wrapper{
	background: url("/img/blink-bg.jpg") center center;
	background-size: cover;
	height: 240px;
	position: relative;
}
#blink_reply{
	position: absolute;
	right: 0px;
	top: 0px;
	color: white;
	font-size: 18px;
	-webkit-transition: color 1s;
	-moz-transition: color 1s;
	transition: color 1s;
}
#blink_reply.invalid{
	color:#9b9b9b;
}

/*******************end of blink demo*******************/

/*******************loading demo*******************/
.loading-wrapper{

}
#loading{
	width: 50px;
	height: 50px;
	background: #FFF;
	
	border-right: 2px solid #43bf89;
	border-bottom: 2px solid #ffffff;
	
	
	border-radius: 50%;
}
#loading.running{
	-webkit-animation:animateLoading linear 1s infinite;
	-moz-animation:animateLoading linear 1s infinite;
}

@-webkit-keyframes animateLoading {
	0% {
		-webkit-transform: rotate(-135deg);
	}
	
	100% {
		-webkit-transform: rotate(225deg);
	}
}

@-moz-keyframes animateLoading {
	0% {
		-moz-transform: rotate(-135deg);
	}
	
	100% {
		-moz-transform: rotate(225deg);
	}
}
/*******************end of loading demo*******************/

</style>


<script type="text/javascript">
	
	$(function(){
		$("#font_family_input").keyup(function(){
			$(".font-family-demo .test-font").html(htmlspecialchars($(this).val()));
		});

		function htmlspecialchars(str)  {  
		    str = str.replace(/&/g, '&amp;');
		    str = str.replace(/</g, '&lt;');
		    str = str.replace(/>/g, '&gt;');
		    str = str.replace(/"/g, '&quot;');
		    str = str.replace(/'/g, '&#x27;');
		    str = str.replace(/\//g, '&#x2F;');

		    return str;
		}

	});

</script>