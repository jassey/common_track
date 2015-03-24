# common_track
common track function for GA & Piwik。

各个页面在提交数据时，调用统一的封装函数，而不用管具体的：GA，UA，Piwik跟踪代码。

例如：

	function wa_track_event(cate, action, label, value) {
	}

页面代码：

	wa_track_event("分享", "facebook");

封装的函数包括：

* 事件
* 自定义变量
* 电子商务
