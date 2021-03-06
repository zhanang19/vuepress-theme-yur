import store from '@theme/store'
import Translation from '@theme/plugins/Translation'
import Blog from '@theme/plugins/Blog'
import routes from '@theme/utils/route'
import Mixin from '@theme/utils/mixin'
import Ant from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.less'
import '@theme/styles/index.less'

export default ({ Vue, options, router, siteData }) => {
  Vue.mixin({ store })
  Vue.use(Translation)
  Vue.use(Blog)
  Vue.use(routes, { router })
  Vue.use(Mixin)
  Vue.use(Ant)
}

if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
  console.log('\n%c(づ￣ ³￣)づヾ Author：cnguu%c VuePress Theme - Yur \n', 'color: #fadfa3; background: #030307; padding:5px;', 'background: #fadfa3; padding:5px 0;')
}
