import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { IssuePanel } from './IssuePanel'

const meta = {
  title: 'Components/IssuePanel',
  component: IssuePanel,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof IssuePanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-8 flex items-center justify-center">
      <IssuePanel />
    </div>
  ),
}

export const WithReply: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-8 flex items-center justify-center">
      <IssuePanel />
    </div>
  ),
}
