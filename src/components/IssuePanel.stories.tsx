import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React, { useState } from 'react'
import { IssuePanel } from './IssuePanel'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const meta = {
  title: 'Components/IssuePanel',
  component: IssuePanel,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof IssuePanel>

export default meta
type Story = StoryObj<typeof meta>

// Helper function to get initials from name
const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

// Helper function to get avatar color
const getAvatarColor = (name: string): string => {
  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-green-500',
    'bg-orange-500',
    'bg-red-500',
    'bg-cyan-500',
    'bg-indigo-500',
  ]
  const hash = name.charCodeAt(0) + name.charCodeAt(name.length - 1)
  return colors[hash % colors.length]
}

const Avatar: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div
      className={cn(
        'w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0',
        getAvatarColor(name)
      )}
    >
      {getInitials(name)}
    </div>
  )
}

// Story 1: Default view with Reply/Edit buttons on comments
export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-8 flex items-center justify-center">
      <IssuePanel />
    </div>
  ),
}

// Story 2: Editing a top-level comment (inline textarea + Save/Cancel buttons)
export const EditingComment: Story = {
  render: () => {
    const [editText, setEditText] = useState(
      "The navigation links aren't responding on iOS Safari. Tested on iPhone 13."
    )

    return (
      <div className="min-h-screen bg-background p-8 flex items-center justify-center">
        <Card className="w-full max-w-2xl mx-auto bg-card border border-border">
          <CardHeader className="border-b border-border">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block px-2 py-1 rounded-md bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs font-semibold">
                    Open
                  </span>
                  <span className="text-sm text-muted-foreground">#42</span>
                </div>
                <CardTitle className="text-xl font-semibold">
                  Fix navigation menu on mobile
                </CardTitle>
                <p className="text-xs text-muted-foreground mt-2">
                  opened by Alex Chen · 4 hours ago
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="max-h-96 overflow-y-auto">
              <div className="divide-y divide-border">
                {/* Editing comment example */}
                <div className="p-4">
                  <div className="flex gap-3 mb-4">
                    <Avatar name="Sarah Johnson" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">Sarah Johnson</span>
                        <span className="text-xs text-muted-foreground">2 hours ago</span>
                      </div>
                      {/* Inline edit mode */}
                      <div className="mt-2 space-y-2">
                        <textarea
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="w-full rounded-md border border-border bg-background dark:bg-indigo-100 px-3 py-2 text-sm text-foreground resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          rows={3}
                        />
                        <div className="flex gap-2">
                          <Button size="sm" variant="default">
                            Save
                          </Button>
                          <Button size="sm" variant="outline">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
}

// Story 3: Comment with reply showing Edit button on the reply (authored by 'You')
export const WithReply: Story = {
  render: () => {
    return (
      <div className="min-h-screen bg-background p-8 flex items-center justify-center">
        <Card className="w-full max-w-2xl mx-auto bg-card border border-border">
          <CardHeader className="border-b border-border">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block px-2 py-1 rounded-md bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs font-semibold">
                    Open
                  </span>
                  <span className="text-sm text-muted-foreground">#42</span>
                </div>
                <CardTitle className="text-xl font-semibold">
                  Fix navigation menu on mobile
                </CardTitle>
                <p className="text-xs text-muted-foreground mt-2">
                  opened by Alex Chen · 4 hours ago
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="max-h-96 overflow-y-auto">
              <div className="divide-y divide-border">
                {/* Main comment */}
                <div className="p-4">
                  <div className="flex gap-3 mb-4">
                    <Avatar name="Sarah Johnson" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">Sarah Johnson</span>
                        <span className="text-xs text-muted-foreground">2 hours ago</span>
                      </div>
                      <p className="text-sm text-foreground mt-2 leading-relaxed">
                        The navigation links aren&apos;t responding on iOS Safari. Tested on iPhone 13.
                      </p>
                      <div className="flex gap-3 mt-2">
                        <button className="text-xs text-primary hover:underline">Reply</button>
                      </div>
                    </div>
                  </div>

                  {/* Reply section */}
                  <div className="ml-11 space-y-4 pt-3 border-l-2 border-border pl-4">
                    <div className="flex gap-3">
                      <Avatar name="You" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">You</span>
                          <span className="text-xs text-muted-foreground">1 hour ago</span>
                        </div>
                        <p className="text-sm text-foreground mt-2 leading-relaxed">
                          Thanks for reporting! I&apos;ve started investigating the event handling on mobile browsers.
                        </p>
                        <button className="text-xs text-primary hover:underline mt-2">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
}
