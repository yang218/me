var XConfig = {
	pl : [ {
		n : '希尔思系列',
		i : 'xesxl',
		c : [ {
			n : '流量与消耗量测量',
			i : 'llxhcl',
			c : [ {
				n : '热式流量计S 400',
				i : 's400'
			}, {
				n : '热式流量计S 420',
				i : 's420'
			}, {
				n : '热式流量计S 450',
				i : 's450'
			}, {
				n : '热式流量计S 452',
				i : 's452'
			}, {
				n : '皮托管流量/消耗量传感器S 430',
				i : 's430'
			}, {
				n : '超声波流量计S 460',
				i : 's460'
			}, {
				n : '压缩空气/气体流量方向检测开关S 409',
				i : 's409'
			} ]
		}, {
			n : '露点测量',
			i : 'ldcl',
			c : [ {
				n : 'S 220 露点传感器 (-100 … 0 ºC)',
				i : 's220'
			}, {
				n : 'S 212 露点传感器(-50…+20°C)',
				i : 's212'
			}, {
				n : 'S 215 露点传感器(-20…+50°C)',
				i : 's215'
			}, {
				n : 'S 201带显示和报警功能的露点传感器(-60…+20°C)',
				i : 's201'
			}, {
				n : 'S 305 露点监控仪',
				i : 's305'
			}, {
				n : 'S 505便携式露点传感器 (-100…+20°C)',
				i : 's505'
			}

			]
		} ]
	} ],
	sl : [ {
		n : '湖北淡雅香生物科技',
		i : 'dyxsw'
	}, {
		n : '海斯坦普金属成型',
		i : 'hstp'
	}, {
		n : '太平爱克电线电缆',
		i : 'tpak'
	}, {
		n : '中百生鲜物流园',
		i : 'zbsxwl'
	} ]
};
var pdConfig = {
	gx45e7 : {
		d : '阿特拉斯•科普柯GX喷油螺杆压缩机是一款功能强大且性能可靠的工业螺杆压缩机，适用于中小型工业。GX压缩机有多种型号（地面安装型、贮气罐安装型、配备或不配备内置干燥机）可满足您的需求。采用高品质构件和材料生产，能提供可靠的高品质压缩空气源，工作环境温度最高可达 46°C/115°F。<br>容量 FAD (l/s)     4 - 27.8 l/s     <br>容量 FAD（m³/h，cfm）     14.4 - 100.1 m³/h     <br>安装的电动机功率     2.2 - 11 kW     <br>工作压力     7.5 - 13 bar(e)',
		pn : 3
	},
	s400 : {
		d : '该传感器有两个量程可供选择，S 400-S（标准量程），S 400-M（扩大量程），并且可带显示或不带显示。<br>带显示的型号会显示实际容积流量和总消耗量。管道直径和消耗量基数可以通过按键来设置。<br>包括气体种类、流量单位和参考标准在内的各种设置可在工厂或通过我们的服务套装来设定。服务套装内包含一个电脑软件已经一个能将传感器连接到电脑的USB端口的服务套装转换器。<br>每一个传感器都提供一个与流量对应的模拟输出（4…20mA）和一个与消耗量基数对应的电气隔离脉冲输出。',
		pn : 4
	}
};

function loadIDData(_tp) {
	var a = [];
	var b = [];
	var obj = pdConfig[_tp];
	if (!obj || obj == 'Undefined') {
		$('#e_desc').html('暂无介绍');
		$('#e_pn').text(_tp);
		return;
	}
	for (var i = 1; i <= obj.pn; i++) {
		a.push('<li><img src="img/product/' + _tp + '_' + i
				+ '.jpg" width="967" height="391" alt=""></li>');
		b.push('<li><a href="#">' + i + '</a></li>');
	}
	$('#e_pdbg').html(a.join(''));
	$('#e_snav').html(b.join(''));
	$('#e_desc').html(obj.d);
	$('#e_pn').text(_tp);
}

function loadData(_nav) {
	var navObj = getObj(_nav, XConfig.pl);
	if (navObj == null) {
		return;
	}
	$('#e_nav').text(navObj.n);
	loadAllItems(navObj.c);

}

function loadAllItems(_list) {
	var a = [];
	var b = [];
	var subNavObj;
	var items;
	var item;

	a
			.push('<li class="active"><a href="#" data-type="all">所有<img src="img/p1.png" width="10" height="9"></a></li>');
	var c = 0;
	for (var idx = 0; idx < _list.length; idx++) {
		subNavObj = _list[idx];
		a
				.push('<li ><a href="#" data-type="'
						+ subNavObj.i
						+ '">'
						+ subNavObj.n
						+ '<img src="img/p1.png" width="10" height="9" alt="p"></a></li>');
		if (!subNavObj.c || subNavObj.c.length == 0) {
			continue;
		}
		items = subNavObj.c;
		for (var j = 0; j < items.length; j++) {
			item = items[j];
			b.push('<li class="small_PicBox trigger" data-type="');
			b.push(subNavObj.i);
			b.push('" id="id-' + (++c) + '"><a href="#"><img src="img/product/'
					+ item.i + '.jpg"/>');
			b
					.push('<div class="boxHover"><a href="single_page_portfolio.html?tp='
							+ item.i
							+ '"><span>'
							+ item.n
							+ '</span></a></div></li>');
		}
	}
	$('#filterOptions').html(a.join(''));
	$('#e_items').html(b.join(''));
}

function getObj(_id, _list) {
	for (var idx = 0; idx < _list.length; idx++) {
		if (_list[idx].i == _id) {
			return _list[idx];
		}
	}
	return null;
}

function getUrl(c, d) {
	var d = d || "?";
	var a;
	if (d == "?") {
		a = location.search.substring(1).split("&");
	} else {
		a = location.hash.substring(1).split("&");
	}
	for (var b = 0; b < a.length; b++) {
		if (c == a[b].split("=")[0]) {
			return a[b].split("=")[1];
		}
	}
	return "";
}

function loadIndexPro() {
	var b = [];
	var obj;
	for (var i = 0; i < XConfig.pl.length; i++) {
		obj = XConfig.pl[i];
		if (i < 4 && obj.c && obj.c.length > 0) {
			var subc = obj.c[0].c;
			b.push('<div class="small_PicBox get_mar2">');
			b.push('<a href="#"><img src="img/product/' + subc[0].i
					+ '.jpg" alt=""></a>');
			b.push('<div class="boxHover">');
			b.push('<a href="portfolio.html?tp=' + obj.i + '"><span>' + obj.n
					+ '</span></a>');
			b.push('</div></div>');
		}
	}
	b.push('<div class="clear"></div>');
	$('#e_pdesc').html(b.join(''));
}

function loadTopNav() {
	var a = [];
	var obj;
	var items = $('#e_top_nav');
	for (var i = 0; i < XConfig.pl.length; i++) {
		obj = XConfig.pl[i];
		if (i == 0) {
			items.prev().attr('href', 'portfolio.html?tp=' + obj.i);
		}
		a.push('<li><a href="portfolio.html?tp=' + obj.i + '">' + obj.n
				+ '</a></li>');
	}
	items.html(a.join(''));
}

function loadFooter() {
	var a = [];
	a.push('<section class="footer_main">');
	a.push('	<section class="footer_top">');
	a.push('<div class="box2">公司简介</div>');
	a.push('<div class="box2">联系方式</div>');
	a.push('<div class="box2">品牌代理</div>');
	a.push('<div class="clear"></div>');
	a.push('</section>');
	a.push('<section class="footer_mid">');
	a.push('<div class="box2_text">');
	a.push('<p>上海恒服机电设备有限公司是压缩空气动力系统设备的销售安装维修保养服务于一体的专业公司。</p>');
	a.push('<p>是瑞典(阿特拉斯.科普柯) 授权的“湖北授权代理商授权服务商”、“阿特拉斯空压机、零部件及消耗品销售、维修服务中心”</p>');
	a.push('</div>');

	a.push('<div class="box2_text">');
	a
			.push('<em><strong>邮箱：</strong></em>hengfushanghai@126.com<br> <em><strong>QQ：</strong></em>89736809<br>');
	a
			.push('<em><strong>座机：</strong></em>021-51619639<br> <em><strong>电话：</strong></em>15926460797<br>');
	a
			.push('<em><strong>联系人：</strong></em>彭娟<br> <em><strong>公司地址：</strong></em>上海浦东新区南汇新城镇东大公路5388弄5号104室');
	a.push('</div>');

	a.push('<div class="box2_text">');
	a.push('<ul>');
	a.push('<li><em><strong>阿特拉斯</strong></em></li>');
	a.push('<li><em><strong>希尔思</strong></em></li>');
	a.push('</ul>');
	a.push('</div>');
	a.push('<div class="clear"></div>');
	a.push('</section>');
	a.push('<section class="footer_bottom">');
	a
			.push('沪ICP备16034307号&copy; 版权所有 <a href="http://hf021.cn" target="_blank">上海恒服机电设备有限公司</a>');
	a.push('<div class="clear"></div>');

	a.push('</section></section>');

	$('.footerwrapper1').html(a.join(''));
}

$(document).ready(function() {
	loadTopNav();
	loadFooter();
});