/* =============================================================================
	jQuery Calendar ver1.02
	Copyright(c) 2013, ShanaBrian
	Dual licensed under the MIT and GPL licenses.
============================================================================= */
(function($) {
	
	$.fn.calendar = function(settings) {
		var toDate		= new Date();
		var toYear		= toDate.getFullYear();
		var toMonth		= toDate.getMonth() + 1;
		var toDays		= toDate.getDate();

		settings = jQuery.extend({
			dateYear	: toYear,
			dateMonth	: toMonth,
			weekValue	: ["日", "月", "火", "水", "木", "金", "土"],
			changeButton: true,
			tableClass	: 'calendar',
			sunClass	: 'sun',
			satClass	: 'sat',
			todayClass	: 'today',
			prevValue	: '&lt;',
			nextValue	: '&gt;'
		}, settings);

		_this = $(this);

		var str = '';
		str += '\n<table class="' + settings.tableClass + '">\n';
		str += '<thead>\n';
		str += '<tr>\n';
		if (settings.changeButton == true) {
			str += '<td colspan="1"><a href="#prev">' + settings.prevValue + '</a></td>\n';
			str += '<th colspan="5">' + thisDate() + '</th>\n';
			str += '<td colspan="1"><a href="#next">' + settings.nextValue + '</a></td>\n';
		} else {
			str += '<th colspan="7">' + thisDate() + '</th>\n';
		}
		str += '</tr>\n';
		str += '</thead>\n';
		str += '<tbody>\n';
		str += printBody();
		str += '</tbody>\n';
		str += '</table>\n';
		$(this).html(str);

		function thisDate() {
			return settings.dateYear + '年' + settings.dateMonth + '月';
		}

		if (settings.changeButton == true) {
			$(this).find("thead td a").click(function() {
				var mode = $(this).attr("href");
				if(mode == "#prev") {
					if (settings.dateMonth == 1) {
						settings.dateYear--;
						settings.dateMonth = 12;
					} else {
						settings.dateMonth--;
					}
				} else {
					if (settings.dateMonth == 12) {
						settings.dateYear++;
						settings.dateMonth = 1;
					} else {
						settings.dateMonth++;
					}
				}
				_this.find("thead th").html(thisDate());
				_this.find("tbody").html(printBody());
				return false;
			});
		}

		function printBody() {
			var lastdays = new Date(settings.dateYear, settings.dateMonth, 0);
			var forDate;
			var rowCount = 1;
			var pbstr = '<tr>\n';
			for(var k in settings.weekValue) {
				pbstr += '<th' + weekClass(k) + '>' + settings.weekValue[k] + '</th>\n';
			}
			pbstr += '</tr>\n';
			pbstr += '<tr>\n';
			for(var i = 1;i <= lastdays.getDate();i++) {
				forDate = new Date(settings.dateYear, settings.dateMonth - 1, i);
				if(i == 1 && forDate.getDay() > 0) {
					for(var j = 0;j < forDate.getDay();j++) {
						pbstr += '<td>&nbsp;</td>\n';
					}
				}

				pbstr += '<td' + weekClass(forDate.getDay(), ("" + settings.dateYear + settings.dateMonth + i)) + '>' + i + '</td>\n';

				if(forDate.getDay() == 6 && i != lastdays.getDate()) {
					pbstr += '</tr>\n';
					pbstr += '<tr>\n';
					rowCount++;
				}

				if(i == lastdays.getDate() && forDate.getDay() < 6) {
					for(var j = 0;j < (6 - forDate.getDay());j++) {
						pbstr += '<td>&nbsp;</td>\n';
					}
				}
			}
			pbstr += '</tr>\n';
			if(rowCount < 6) {
				for(var i = 0;i < (6 - rowCount);i++) {
					pbstr += '<tr>\n';
					for(var j = 0;j < 7;j++) {
						pbstr += '<td>&nbsp;</td>\n';
					}
					pbstr += '</tr>\n';
				}
			}
			return pbstr;
		}

		function weekClass(w, d) {
			var classArr = [];
			var classStr = '';
			if (w == 0) {
				classArr.push(settings.sunClass);
			} else if (w == 6) {
				classArr.push(settings.satClass);
			}
			if(d != null && d != undefined && d == ("" + toYear + toMonth + toDays)) {
				classArr.push(settings.todayClass);
			}
			if (classArr.length >= 1) {
				classStr = ' class="' + classArr.join(' ') + '"';
			}
			return classStr;
		}
		return this;
	}
})(jQuery);
