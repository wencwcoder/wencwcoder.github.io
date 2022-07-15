<template>

</template>

<script>
export default {
  props: {
    // 线条数量
    count: {
      type: String,
      default: '99'
    },
    // 线条透明度
    opacity: {
      type: String,
      default: '0.7'
    },
    // 线条颜色
    color: {
      type: String,
      default: ''
    },
    // 画面层级
    zIndex: {
      type: String,
      default: ''
    },
    // 是否全局引入
    global: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      
    }
  },
  created () {
    
  },
  mounted () {
    this.showCanvas();
  },
  methods: {
    check () {
      let flag = navigator.userAgent.match(/(phone|pod|iPhone|iPad|iPod|ios|Android|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return !flag;
    },
    showCanvas () {
      if (!this.check()) { return };
      let element = document.createElement("script");
      element.setAttribute("count", this.count);
      element.setAttribute("color", this.color);
      element.setAttribute("name","canvas-nest-name");
      element.setAttribute("opacity", this.opacity);
      element.setAttribute("zIndex", this.zIndex);
      element.src = "https://cdn.bootcss.com/canvas-nest.js/2.0.4/canvas-nest.js";
      document.body.appendChild(element);
    }
  },
  beforeDestroy () {
    if (!this.global) {
      let canvas = document.getElementsByTagName("canvas");
      for (let i = 0; i < canvas.length; i++) {
        canvas[i].style.display = 'none';
        canvas[i].remove();
      }
      let scripts = document.getElementsByTagName("script");
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i] && scripts[i].getAttribute("name") == "canvas-nest-name") {
          scripts[i].parentNode.removeChild(scripts[i]);
        }
      }
    }
  }
}
</script>