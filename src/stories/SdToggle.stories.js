// YourComponent.stories.js

import { SdToggle } from '../components/ui'
import { ref } from 'vue'

//๐ This default export determines where your story goes in the story list
export default {
  title: 'SdToggle',
  component: SdToggle,
}

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => ({
  setup() {
    const value = ref(false)
    //๐ The args will now be passed down to the template
    return { args, value }
  },
  components: { SdToggle },
  template: `
    <div class="theme-base">
      <SdToggle v-bind="args" v-model="value" />
    </div>
  `,
})

export const Primary = Template.bind({})
