"use client"

import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Reply {
  id: string
  author: string
  timestamp: string
  text: string
  isEditing?: boolean
  originalText?: string
}

interface Comment {
  id: string
  author: string
  timestamp: string
  text: string
  replies: Reply[]
  isEditing?: boolean
  originalText?: string
}

// Mock data for initial comments
const mockComments: Comment[] = [
  {
    id: "1",
    author: "Sarah Johnson",
    timestamp: "2 hours ago",
    text: "The navigation links aren't responding on iOS Safari. Tested on iPhone 13.",
    replies: [
      {
        id: "reply-1",
        author: "You",
        timestamp: "1 hour ago",
        text: "Thanks for reporting! I've started investigating the event handling on mobile browsers.",
      },
    ],
  },
  {
    id: "2",
    author: "Marcus Webb",
    timestamp: "1 hour ago",
    text: "Can confirm this on Android Chrome too. The hamburger menu opens but tapping links does nothing.",
    replies: [],
  },
  {
    id: "3",
    author: "Priya Sharma",
    timestamp: "45 minutes ago",
    text: "I think this might be related to the z-index layering on the overlay. The click events are being swallowed.",
    replies: [],
  },
]

// Get initials from name for avatar
const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

// Deterministic color assignment for avatars based on name - same name always gets same color
const getAvatarColor = (name: string): string => {
  const colors = [
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-green-500",
    "bg-orange-500",
    "bg-red-500",
    "bg-cyan-500",
    "bg-indigo-500",
  ]
  // Use first and last character codes for a simple hash function
  const hash = name.charCodeAt(0) + name.charCodeAt(name.length - 1)
  return colors[hash % colors.length]
}

// Avatar component displaying user initials with a deterministic color
const Avatar: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div
      className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0",
        getAvatarColor(name)
      )}
      aria-label={`Avatar for ${name}`}
    >
      {getInitials(name)}
    </div>
  )
}

export function IssuePanel() {
  const [comments, setComments] = useState<Comment[]>(mockComments)
  const [inputValue, setInputValue] = useState("")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Simulate loading comments on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  // Initiate reply to a comment - focus input and scroll into view
  const handleReply = (commentId: string, authorFirstName: string) => {
    const firstName = authorFirstName.split(" ")[0]
    setInputValue(`@${firstName} `)
    setReplyingTo(commentId)
    // Use setTimeout to ensure state updates before focusing
    setTimeout(() => {
      inputRef.current?.focus()
      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }, 0)
  }

  // Submit a new comment or reply. Replies strip the @mention prefix before saving.
  const handleSubmit = () => {
    if (!inputValue.trim()) return

    if (replyingTo) {
      // Add as reply to existing comment, removing the @mention prefix
      const replyText = inputValue.replace(/^@\w+\s/, "").trim()
      setComments((prevComments) =>
        prevComments.map((comment) => {
          if (comment.id === replyingTo) {
            return {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: `reply-${Date.now()}`,
                  author: "You",
                  timestamp: "just now",
                  text: replyText,
                },
              ],
            }
          }
          return comment
        })
      )
    } else {
      // Add as new top-level comment
      setComments((prevComments) => [
        ...prevComments,
        {
          id: `comment-${Date.now()}`,
          author: "You",
          timestamp: "just now",
          text: inputValue,
          replies: [],
        },
      ])
    }

    setInputValue("")
    setReplyingTo(null)
  }

  // Toggle edit mode on a reply - entering edit mode saves original text, exiting discards it
  const handleEditReply = (
    commentId: string,
    replyId: string,
    isEditing: boolean
  ) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: comment.replies.map((reply) => {
              if (reply.id === replyId) {
                return {
                  ...reply,
                  isEditing,
                  originalText: isEditing ? reply.text : undefined,
                }
              }
              return reply
            }),
          }
        }
        return comment
      })
    )
  }

  // Handle save edited reply
  const handleSaveReply = (
    commentId: string,
    replyId: string,
    newText: string
  ) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: comment.replies.map((reply) => {
              if (reply.id === replyId) {
                return {
                  ...reply,
                  text: newText,
                  isEditing: false,
                  originalText: undefined,
                }
              }
              return reply
            }),
          }
        }
        return comment
      })
    )
  }

  // Handle cancel edit
  const handleCancelEdit = (commentId: string, replyId: string) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: comment.replies.map((reply) => {
              if (reply.id === replyId) {
                return {
                  ...reply,
                  isEditing: false,
                  originalText: undefined,
                }
              }
              return reply
            }),
          }
        }
        return comment
      })
    )
  }

  // Toggle edit mode on a top-level comment - entering edit mode saves original text, exiting discards it
  const handleEditComment = (commentId: string, isEditing: boolean) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            isEditing,
            originalText: isEditing ? comment.text : undefined,
          }
        }
        return comment
      })
    )
  }

  // Handle save edited top-level comment
  const handleSaveComment = (commentId: string, newText: string) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            text: newText,
            isEditing: false,
            originalText: undefined,
          }
        }
        return comment
      })
    )
  }

  // Handle cancel edit top-level comment
  const handleCancelEditComment = (commentId: string) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            isEditing: false,
            originalText: undefined,
          }
        }
        return comment
      })
    )
  }

  return (
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
        {/* Comments section */}
        <div ref={containerRef} className="max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center gap-3 py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-200 border-t-blue-500" />
              <p className="text-sm text-muted-foreground">Loading comments...</p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {comments.map((comment) => (
              <div key={comment.id} className="p-4">
                {/* Main comment */}
                <div className="flex gap-3 mb-4">
                  <Avatar name={comment.author} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        {comment.author}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {comment.timestamp}
                      </span>
                    </div>
                    {comment.isEditing ? (
                      <div className="mt-2 space-y-2">
                        <textarea
                          defaultValue={comment.originalText || comment.text}
                          className="w-full rounded-md border border-border bg-background dark:bg-indigo-100 px-3 py-2 text-sm text-foreground resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          rows={3}
                          id={`edit-comment-${comment.id}`}
                        />
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="default"
                            onClick={() => {
                              const textarea = document.getElementById(
                                `edit-comment-${comment.id}`
                              ) as HTMLTextAreaElement
                              handleSaveComment(
                                comment.id,
                                textarea.value
                              )
                            }}
                          >
                            Save
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              handleCancelEditComment(comment.id)
                            }
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className="text-sm text-foreground mt-2 leading-relaxed">
                          {comment.text}
                        </p>
                        <div className="flex gap-3 mt-2">
                          <button
                            onClick={() =>
                              handleReply(comment.id, comment.author)
                            }
                            className="text-xs text-primary hover:underline"
                          >
                            Reply
                          </button>
                          {comment.author === "You" && (
                            <button
                              onClick={() =>
                                handleEditComment(comment.id, true)
                              }
                              className="text-xs text-primary hover:underline"
                            >
                              Edit
                            </button>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Replies to this comment */}
                {comment.replies.length > 0 && (
                  <div className="ml-11 space-y-4 pt-3 border-l-2 border-border pl-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-3">
                        <Avatar name={reply.author} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm">
                              {reply.author}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {reply.timestamp}
                            </span>
                          </div>
                          {reply.isEditing ? (
                            <div className="mt-2 space-y-2">
                              <textarea
                                defaultValue={reply.originalText || reply.text}
                                className="w-full rounded-md border border-border bg-background dark:bg-indigo-100 px-3 py-2 text-sm text-foreground resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                rows={3}
                                id={`edit-${reply.id}`}
                              />
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="default"
                                  onClick={() => {
                                    const textarea = document.getElementById(
                                      `edit-${reply.id}`
                                    ) as HTMLTextAreaElement
                                    handleSaveReply(
                                      comment.id,
                                      reply.id,
                                      textarea.value
                                    )
                                  }}
                                >
                                  Save
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() =>
                                    handleCancelEdit(comment.id, reply.id)
                                  }
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <>
                              <p className="text-sm text-foreground mt-2 leading-relaxed">
                                {reply.text}
                              </p>
                              {reply.author === "You" && (
                                <button
                                  onClick={() =>
                                    handleEditReply(comment.id, reply.id, true)
                                  }
                                  className="text-xs text-primary hover:underline mt-2"
                                >
                                  Edit
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            </div>
          )}
        </div>

        {/* Comment input section */}
        <div className="border-t border-border p-4 bg-secondary/30">
          <div className="flex gap-3">
            <Avatar name="You" />
            <div className="flex-1">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                  replyingTo
                    ? "Write a reply..."
                    : "Add a comment..."
                }
                className="w-full rounded-md border border-border bg-background dark:bg-indigo-100 px-3 py-2 text-sm text-foreground resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                rows={3}
              />
              <div className="flex gap-2 mt-2 justify-end">
                {replyingTo && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setInputValue("")
                      setReplyingTo(null)
                    }}
                  >
                    Cancel
                  </Button>
                )}
                <Button
                  size="sm"
                  onClick={handleSubmit}
                  disabled={!inputValue.trim()}
                >
                  {replyingTo ? "Reply" : "Comment"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
