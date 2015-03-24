
//
// 通用统计代码数据提交
//

//
// 事件提交 （事件类别，事件动作，事件标签，事件值）
//
function wa_track_event(cate, action, label, value) {
	cate = cate || "";
	action = action || "";
	label = label || "";
	value = value || 0;

	_gaq.push([cate, action, label]);
	_paq.push(cate, action, label, value);
}

//
// 自定义变量
//
function wa_set_custom_var(key, value) {

}