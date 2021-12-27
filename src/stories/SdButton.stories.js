// YourComponent.stories.js

import { SdButton } from '../components/ui'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Base/Button',
  component: SdButton,
  argTypes: {
    status: {
      control: 'select',
      options: ['primary', 'success', 'danger', 'warning'],
    },
  },
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { SdButton },

  setup() {
    //👇 The args will now be passed down to the template
    return { args }
  },
  template: `
    <div class="theme-base">
      <SdButton v-bind="args">Button</SdButton>
    </div>
  `,
})

export const Button = Template.bind({})

export const Status = () => ({
  components: { SdButton },
  template: `
    <div class="theme-base">
      <SdButton status="primary">Primary</SdButton>
      <SdButton status="success">Success</SdButton>
      <SdButton status="warning">Warning</SdButton>
      <SdButton status="danger">Danger</SdButton>
    </div>
  `,
})
Status.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    source: {
      code: '<SdButton status="primary">Primary</SdButton>',
    },
  },
}

export const Size = Template.bind({})
Size.args = { size: 'sm' }
Size.parameters = {
  docs: {
    source: {
      code: '<SdButton size="sm">button</SdButton>',
    },
  },
}

export const Loading = Template.bind({})
Loading.args = { loading: true }
Loading.parameters = {
  docs: {
    source: {
      code: '<SdButton loading="true">button</SdButton>',
    },
  },
}
