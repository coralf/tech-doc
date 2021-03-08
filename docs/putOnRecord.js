// 备案
var defaultOptions = {
  ICP: "",
  NISMSP: {
    number: "",
    url: "",
  },
}
//<img style="width: 15px; height: 15px;" src="http://www.beian.gov.cn/img/new/gongan.png" alt="全国互联网安全" />${defaultOptions.NISMSP.number}
// Docsify plugin functions
function plugin(hook, vm) {
  hook.afterEach(function (html, next) {
    //add html string
    next(
      html +
      `
        <hr>
        <footer class="beian" style="text-align: center;">
            <a style="text-decoration: none; color: #34495e; font-size: 15px; font-weight: 400;" href="${defaultOptions.NISMSP.url}" target="_blank">${defaultOptions.ICP
      }</a>
            ${defaultOptions.NISMSP &&
        defaultOptions.NISMSP.number.length !== 0 &&
        defaultOptions.NISMSP.url.length !== 0
        ? `
                    &nbsp;&nbsp;
                <a style="text-decoration: none; color: #34495e; font-size: 15px; font-weight: 400;" href="${defaultOptions.NISMSP.url}" target="_blank">
                    
                </a>
                    `
        : ""
      }

        </footer>
        `
    )
  })
}

// Docsify plugin options
window.$docsify["beian"] = Object.assign(
  defaultOptions,
  window.$docsify["beian"]
)
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)