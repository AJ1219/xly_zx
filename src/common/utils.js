/* eslint-disable */
Date.prototype.format = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours() % 12 == 0
      ? 12
      : this.getHours() % 12, //小时
    "H+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  var week = {
    "0": "/u65e5",
    "1": "/u4e00",
    "2": "/u4e8c",
    "3": "/u4e09",
    "4": "/u56db",
    "5": "/u4e94",
    "6": "/u516d"
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1)
      ? (RegExp.$1.length > 2
        ? "/u661f/u671f"
        : "/u5468")
      : "") + week[this.getDay() + ""]);
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1)
        ? (o[k])
        : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
};
module.exports = {
  queryToJson: function (url) {
    url = url || location.search || location.hash;
    var query = url.substr(url.lastIndexOf('?') + 1),
      params = query.split('&'),
      len = params.length,
      result = {},
      i = 0,
      key, value, item, param;

    for (; i < len; i++) {
      if (!params[i]) {
        continue;
      }
      param = params[i].split('=');
      key = param[0];
      value = param[1];

      item = result[key];
      if ('undefined' == typeof item) {
        result[key] = value;
      } else if (item instanceof Array) {
        item.push(value);
      } else {
        result[key] = [item, value];
      }
    }
    return result;
  },//把url里的query转成对象输出

  getImgQS: function(width, height) {
    return "imageMogr2/gravity/center/rotate/$/thumbnail/!" + width + "x" + height + "r/crop/" + width + "x" + height + "/interlace/1/format/jpg";
  },//获取到正常请求图片字段

  formatUnixTime: function (timestamp) {
    var time = void 0,
      years = void 0,
      months = void 0,
      days = void 0,
      hours = void 0,
      minutes = void 0,
      seconds = void 0;
    time = new Date(timestamp);
    years = time.getFullYear();
    months = time.getMonth() + 1;
    days = time.getDate();
    hours = time.getHours();
    minutes = time.getMinutes();
    return years + '年' + months + '月' + days + '日' + ' ' + hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
  },//格式化时间完整版

  getMusicPlayerTime: function (time) {
    var minutes = void 0,
      seconds = void 0;
    minutes = Math.floor(time / 60);
    seconds = Math.floor(time % 60);
    return (minutes < 10 ? '0' + minutes : minutes) + ' ' + ':' + ' ' + (seconds < 10 ? '0' + seconds : seconds);
  },//获取到音乐播放时长的显示

  formatUnixTime2YMD: function (timestamp, separator) {
    var time = void 0,
      years = void 0,
      months = void 0,
      days = void 0;
    time = new Date(timestamp);
    years = time.getFullYear();
    months = time.getMonth() + 1;
    days = time.getDate();
    return !separator ? (years + '年' + months + '月' + days + '日') : (years + separator + months + separator + days);
  },//格式化时间年月日

  formatUnixTime2YMDs: function (timestamp) {
    var time = void 0,
      years = void 0,
      months = void 0,
      days = void 0;
    time = new Date(timestamp);
    years = time.getFullYear();
    months = time.getMonth() + 1;
    days = time.getDate();
    return years + '/' + months + '/' + days;
  },//格式化时间分割/

  getBeforeTime: function (time) {
    if (time) {
      var before = +new Date() - time;
      var tm = Math.floor(before / (365 * 24 * 60 * 60 * 1000));
      if (tm > 0) {
        return tm + '年前';
      }
      tm = Math.floor(before / (24 * 60 * 60 * 1000));
      if (tm > 0) {
        return tm + '天前';
      }
      tm = Math.floor(before / (60 * 60 * 1000));
      if (tm > 0) {
        return tm + '小时前';
      }
      tm = Math.floor(before / (60 * 1000));
      if (tm > 0) {
        return tm + '分钟前';
      }
      return '刚刚';
    }
    return '未知';
  },

  formatTimeOfAlbum: function (timestamp) {
    var time, years, months, days, hours, minutes, seconds;
    time = new Date(timestamp);
    years = time.getFullYear();
    months = time.getMonth() + 1;
    days = time.getDate();
    hours = time.getHours();
    minutes = time.getMinutes();
    return years + '-' + (months < 10 ? '0' + months : months) + '-' + (days < 10 ? '0' + days : days) + ' ' + hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
  },

  formatUnixTime4YMDHM: function(timestamp) {
    var time, years, months, days, hours, minutes, seconds;
    time = new Date(timestamp);
    years = time.getFullYear();
    months = time.getMonth() + 1;
    days = time.getDate();
    hours = time.getHours();
    minutes = time.getMinutes();
    var nowDate = new Date();
    if (nowDate.getFullYear() > years) {
      return years + '年' + months + '月' + days + '日' + ' ' + hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
    } else {
      return months + '月' + days + '日' + ' ' + hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
    }
  },

  checkAlbumTitleAvailable: function (albumTitle) {
    var val = albumTitle.trim();
    if (!val) {
      return '影集标题必须要填哦！';
    }
    var len = countCharNum(val);
    if (len > 128) {
      // var albumTitle = subByte(val, 128);
      // inputVal = albumTitle;
      return '长度不能超过64个字！';
    } else {
      return true;
    }
  },

  checkMusicNameAvailable: function (musicName) {
    var val = musicName.trim();
    if (!val) {
      return '音乐名称必须要填哦！';
    }
    var len = countCharNum(val);
    if (len > 52) {
      return '长度不能超过26个字！';
    } else {
      return true;
    }
  },

  checkEmail: function (email) {
    var re = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (!re.test(email.trim())) {
      if (email.trim().length) {
        return '请输入正确格式的邮箱';
      } else {
        return '请输入邮箱';
      }
    } else {
      return true;
    }
  },//校验邮箱格式

  countCharNum: function (str) {
    var realLength = 0;
    var len = str.length;
    var charCode = -1;
    for (var i = 0; i < len; i++) {
      charCode = str.charCodeAt(i);
      if (charCode >= 0 && charCode <= 128) {
        realLength += 1;
      } else {
        // 如果是中文则长度加2
        realLength += 2;
      }
    }
    return realLength;//统计字节数,汉字两字节
  },

  getByteLength: function (source) {
    return String(source).replace(/[^\x00-\xff]/g, "ci").length;
  },

  subByte: function (source, length, tail) {
    source = String(source);
    tail = tail || '';
    if (length < 0 || getByteLength(source) <= length) {
      return source + tail;
    }
    source = source.substr(0, length).replace(/([^\x00-\xff])/g, "\x241 ") //双字节字符替换成两个
      .substr(0, length) //截取长度
      .replace(/[^\x00-\xff]$/, "") //去掉临界双字节字符
      .replace(/([^\x00-\xff]) /g, "\x241"); //还原
    return source + tail;
  },

  getScreenSize: function () {
    return { width: window.innerWidth, height: window.innerHeight };
  },//获取到窗口宽高对象

  filterEmoji: function (string) {
    if (!string || typeof string != 'string') return '';
    return string.replace(/\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/g, '');
  },

  textLength: function (str) {
    var realLength = 0;
    var len = str.length;
    var charCode = -1;
    for (var i = 0; i < len; i++) {
      charCode = str.charCodeAt(i);
      if (charCode >= 0 && charCode <= 128) {
        realLength += 1;
      } else {
        // 如果是中文则长度加2
        realLength += 2;
      }
    }
    return realLength;
  },

  subText: function (str, len) {
    var realLength = 0;
    var charCode = -1;
    for (var i = 0; i < str.length; i++) {
      charCode = str.charCodeAt(i);
      if (charCode >= 0 && charCode <= 128) {
        realLength += 1;
      } else {
        // 如果是中文则长度加2
        realLength += 2;
      }
      if (realLength == len) return str.substring(0, i + 1); else if (realLength > len) return str.substring(0, i);
    }
    return str;
  },

  getSliderPosition: function (progress, bmt, emt, du) {
    var beginProgress = bmt * 100 / du;
    var endProgress = emt * 100 / du;
    if (!emt) {
      if (progress >= 100) {
        return 98;
      } else if (progress < beginProgress) {
        return beginProgress;
      } else {
        return progress;
      }
    } else {
      if (progress > endProgress) {
        return endProgress;
      } else if (progress < beginProgress) {
        return beginProgress;
      } else {
        return progress;
      }
    }
  },

  isValidIpv4Addr: function (ip) {
    return (/^(?=\d+\.\d+\.\d+\.\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$/.test(ip)
    )
  },

  findArrayItem: function (array, predicate, context) {
    if (typeof Array.prototype.find === 'function') {
      return array.find(predicate, context);
    }

    context = context || this;
    var length = array.length;
    var i;

    if (typeof predicate !== 'function') {
      throw new TypeError(predicate + ' is not a function');
    }

    for (i = 0; i < length; i++) {
      if (predicate.call(context, array[i], i, array)) {
        return array[i];
      }
    }
  },

  formartHLKeyWordsByEM: function (string) {
    var reg = /(<em>.*?<\/em>)/g;
    var tmpArr = string.split(reg);
    return tmpArr.map(function(item) {
      if (reg.test(item)) {
        return {
          text: item.replace(/(<em>|<\/em>)/g, ""),
          type: 'highLi'
        }
      } else {
        return {
          text: item,
          type: 'normal'
        }
      }
    });
  },

  uniqueOBJ: function(array,attr){ 
    var n = []; //一个新的临时数组 
    //遍历当前数组 
    for(var i = 0; i < array.length; i++){ 
    //如果当前数组的第i已经保存进了临时数组，那么跳过， 
    //否则把当前项push到临时数组里面 
    if (n.indexOf(array[i][attr]) == -1) n.push(array[i]); 
    } 
    return n; 
  },

  checkDoesArrHaveContent: function(target) {
    return (Array.isArray(arr) && arr.length > 0);
  },

  isios: function() {
    return navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1
  }
};
