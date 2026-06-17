import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ContactCTA } from './ContactCTA'

const meta: Meta<typeof ContactCTA> = {
  title: 'Components/ContactCTA',
  component: ContactCTA,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center pt-8">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ContactCTA>

export const Default: Story = {
  render: () => <ContactCTA />,
}
