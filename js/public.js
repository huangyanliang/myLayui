window.onload = function() {
	 var dataShow=[{value:2,name:'已使用'},{value:48, name:'未使用'}]; 
	 var dataShow2=[{value:19, name:'已使用'},{value:7, name:'未使用'}];
	 var dataShow3=[{value:1, name:'内置存储'},{value:1, name:'外置存储'}]; 
	 var dataShow4=[{value:14.56, name:'已使用'},{value:104, name:'总资源'}]; 
	 var dataShow5=[{value:75.42, name:'已使用'},{value:128, name:'总资源'}];
	 pieShow('pie1',dataShow); 
	 pieShow('pie2',dataShow2);
	 pieShow('pie3',dataShow3);
	 pieShow2('pie4',dataShow4);
	 pieShow2('pie5',dataShow5);
};

function pieShow(obj, dataShow) {
	if (obj == 'pie1') {
		var color = [ '#8d94a0','#445576' ];
	} else if (obj == 'pie2') {
		var color = [ '#94addf','#445576' ];
	} else if (obj == 'pie3') {
		var color = [ '#ce831e','#445576' ];
	}
	var myChart = echarts.init(document.getElementById(obj));
	option = {
		tooltip : {
			trigger : 'item',
			formatter : "{b}: {c} ({d}%)"
		},
		series : [ {
			type : 'pie',
			radius : [ '60', '70' ],
			itemStyle : {
				normal : {
					label : {
						show : false
					},
				},
				emphasis : {
					label : {
						show : false
					}
				}
			},
			data : dataShow
		} ],
		color : color
	};
	myChart.setOption(option);
}

function pieShow2(obj, dataShow) {
	if (obj == 'pie4') {
		var color = [ '#dd1b1b','#445576' ];
	} else if (obj == 'pie5') {
		var color = [ '#ffba00','#445576' ];
	}
	var myChart = echarts.init(document.getElementById(obj));
	option = {
		tooltip : {
			trigger : 'item',
			formatter : "{b}: {c} ({d}%)"
		},
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data:['直接访问','邮件营销']
    	},
		series : [ {
			type : 'pie',
			radius : [ '60', '70' ],
			itemStyle : {
				normal : {
					label : {
						show : false
					},
				},
				emphasis : {
					label : {
						show : false
					}
				}
			},
			data : dataShow
		} ],
		color : color
	};
	myChart.setOption(option);
}