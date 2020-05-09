(function(){
	var myChart = echarts.init(document.querySelector(".gongzi"))
	var xAxisData = [];
	var data1 = [];
	var data2 = [];
	for (var i = 0; i < 100; i++) {
	    xAxisData.push('类目' + i);
	    data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
	    data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
	}
	
	option = {
	    title: {
	        text: ''
	    },
	    legend: {
	        data: ['bar', 'bar2']
	    },
	    toolbox: {
	        // y: 'bottom',
	//      feature: {
	//          magicType: {
	//              type: ['stack', 'tiled']
	//          },
	//          dataView: {},
	//          saveAsImage: {
	//              pixelRatio: 2
	//          }
	//      }
	    },
	    tooltip: {},
	    xAxis: {
	        data: xAxisData,
	        splitLine: {
	            show: false
	        },
	        axisLabel: {
	        	color: '#ffffff'
	        }
	    },
	    yAxis: {
	    	axisLabel: {
	        	color: '#ffffff'
	        }
	    },
	    series: [{
	        name: 'bar',
	        type: 'bar',
	        data: data1,
	        animationDelay: function (idx) {
	            return idx * 10;
	        }
	    }, {
	        name: 'bar2',
	        type: 'bar',
	        data: data2,
	        animationDelay: function (idx) {
	            return idx * 10 + 100;
	        }
	    }],
	    animationEasing: 'elasticOut',
	    animationDelayUpdate: function (idx) {
	        return idx * 5;
	    }
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	window.addEventListener('resize',function(){
		myChart.resize()
	})
})()
