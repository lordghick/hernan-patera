import 'vuetify/styles'
// import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/lib/util/colors'
// import * as directives from 'vuetify/directives'

const myCustomLightTheme = {
  colors: { 
    primary: "#111C43",
    success: colors.green.lighten1,
    info: colors.blue.darken3,
    warning: '#f79533',
    error: colors.red.darken2,
    offline: colors.red.darken2,
  },
  boxShadow: '0px 0px 1px black',
  anchor: '#f79533',
  dark: false
}

export default createVuetify({
  components,
  directives,
  icons: {
      defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme
    },
  }
})