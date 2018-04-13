var n1;	
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=吕梁",
	// dataType:"jsonp",防止跨域
	dataType:"jsonp",
	type:"get",
	// 类型
	success:function(obj){
		// console.log(obj);
		// console.log(obj.data);
		// console.log(obj.data.weather);
		// 赋值要在这里面；
		n1=obj.data.weather;
		// console.log(n1);
	}
})
var city;
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	dataType:"jsonp",
	type:"get",
	success:function(m){
		city=m.data;
		// console.log(obj);
		console.log(city);
	}
})
// 进行页面渲染
function updata(){
	// 先获取html中的类名
	var city_name=document.querySelector(".hengpi");
	// 进行修改
	city_name.innerHTML=n1.city_name;
	var city_tem=document.querySelector(".tempature");
	city_tem.innerHTML=n1.current_temperature+"°";
	// console.log(city_tem);
	// 最高温
	var dat_high_temperature=document.querySelector("#dat_high_temperature");
	dat_high_temperature.innerHTML=n1.dat_high_temperature;
	// 最低温
	var dat_low_temperature=document.querySelector("#dat_low_temperature");
	// 在进行温度改变时没有度，用加号加度，还得用引号引起来
	dat_low_temperature.innerHTML=n1.dat_low_temperature+'°';
	// 天气情况
	var day_condition=document.querySelector("#day_condition");
	day_condition.innerHTML=n1.day_condition;
		// 引入图片符号`用在backgroud前后，$和{}用在img/后 }是在.png前面的
	var dat_weather_icon_id=document.querySelector("#dat_weather_icon_id");
	// console.log(dat_weather_icon_id);
	dat_weather_icon_id.style=`background-image:url(img/${n1.dat_weather_icon_id}.png)`;
	// 明天图片引入
	var tomorrow_weather_icon_id=document.querySelector(".tu");
	// console.log(tomorrow_weather_icon_id);
	tomorrow_weather_icon_id.style=`background-image:url(img/${n1.tomorrow_weather_icon_id}.png)`;
	// 数组类型的对象
	for(var i in n1.hourly_forecast){
		// console.log(i);
		// console.log(n1.hourly_forecast[i]);
		// 创建now元素
		// 1.创建元素.div指的是xianzai的标签名;
		// var xianzai=document.createElement("div");
		var now=document.createElement("div");
		// 2.创建类名.wrap可有可无
		// xianzai.className="now";
		now.className="now";
		// 3.把元素插入到页面 父元素中
		// var huodong=document.querySelector(".wrap");
		var wrap=document.querySelector(".wrap");
		wrap.appendChild(now);
		// wrap.appendChild(xianzai);
		// var now=document.createElement("li");
		
		// 进行时间渲染
		var h2=document.createElement("h2");
		h2.className="now-time";
		h2.innerHTML=n1.hourly_forecast[i].hour+":00";
		now.appendChild(h2);
		// 插入图片
		var yueliang=document.createElement("div");
		yueliang.className="yueliang";
		// now.appendChild(yueliang);
		
		yueliang.style=`background-image:url(img/${n1.hourly_forecast[i].weather_icon_id}.png)`;
		now.appendChild(yueliang);
		// 温度渲染
		var wendu=document.createElement("h2");
		wendu.className="now-wendu";
		wendu.innerHTML=n1.hourly_forecast[i].temperature+"°";
		now.appendChild(wendu);
	}
	// 最近天气渲染
	for(var j in n1.forecast_list){
		// console.log(j);
		console.log(n1.forecast_list[j]);
	var con=document.createElement("div");
	con.className="con";
	var wrap1=document.querySelector(".wrap1");
	wrap1.appendChild(con);
	// slice引入日期
	var con_date=document.createElement("div");
	con_date.className="con_date";
	con_date.innerHTML=n1.forecast_list[j].date.slice(5, 7)+"/"+n1.forecast_list[j].date.slice(8);
	con.appendChild(con_date);
	// 天气情况
	var con_wea=document.createElement("div");
	con_wea.className="con_wea";
	con_wea.innerHTML=n1.forecast_list[j].condition;
	con.appendChild(con_wea);

	var picH=document.createElement("div");
	picH.className="picH";
	// picH.innerHTML=n1.forecast_list[j].weather_icon_id;
	picH.style=`background-image:url(img/${n1.forecast_list[j].weather_icon_id}.png)`;
	con.appendChild(picH);

	//
	var high=document.createElement("div");
	high.className="high";
	high.innerHTML=n1.forecast_list[j].high_temperature+"°";
	con.appendChild(high);
	//
	
	var level=document.createElement("div");
	level.className="level";
	level.innerHTML=n1.forecast_list[j].wind_level+"级";
	con.appendChild(level);

	var fengxiang=document.createElement("div");
	fengxiang.className="fengxiang";
	fengxiang.innerHTML=n1.forecast_list[j].wind_direction;
	con.appendChild(fengxiang);
	



	// var a="2014-03-14";
	// console.log(a);
	// var b=a.slice(5,7);
	// console.log(b);
	// var c=a.slice(8);
	// console.log(c);
	// var d=b+"/"+c;
	// console.log(d);
	 
	 }
	 // 创建省份
	 for(var n in city){
	 	console.log(n);
	 	console.log(city[n]);
	 	var h1=document.createElement("h1");
	 	// h1.className="title1";
	 	h1.innerHTML=n;
	 	var city_box=document.querySelector(".city_box");
	 	// h1.innerHTML=city;
	 	city_box.appendChild(h1);
	 	// 市区
	 	// for(var )
	 	var ul=document.createElement("ul");
	 	var city_box=document.querySelector(".city_box");
	 	// ul.innerHTML=city[n];
	 	city_box.appendChild(ul);
	 	for(var h in city[n]){
	 	var son=document.createElement("li");
	 	son.className="son";
	 	son.innerHTML=h;
	 	ul.appendChild(son);
	 	}
	 	
	 }
}
function AJAX(str){
	let url=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`;
	$.ajax({
		url:url,
		dataType:"jsonp",
		type:"get",
		success:function(obj){
			// weather=obj.data.weather;
			n1=obj.data.weather;
			updata()
			$(".location").css({"display":"none"});
			 // $(".location").hide();
			  // $(".location").css({"display":"block"});
		}

	})
}


window.onload=function(){
	updata();
	$(".son").on("click",function(){
		// var cityh=$(".son").innerHTML;
		var cityh=this.innerHTML;
		AJAX(cityh);
		})
		$(".hengpi").on("click",function(){
		// var cityh=$(".son").innerHTML;
		var cityv=this.innerHTML;
		$(".location").css({"display":"block"});
	})
		// 输入框获取焦点，按钮内容变为搜索
		$("input").on("focus",function(){
			$(".right_box").html("搜索");
		})
		var right_box=document.querySelector(".right_box");
		console.log(right_box);

		right_box.onclick=function(){
			var text=right_box.innerText;
			if(text=="取消"){
				$(".location").css({"display":"none"});
			}
			else{
				var str1=document.querySelector("input").value;

				for(var i in city){
					for(var j in city[i]){
					if(str1==j){
							AJAX(str1);
						return;
					}
					
				}
			}
			alert("没有该城市");
			}
}
}


