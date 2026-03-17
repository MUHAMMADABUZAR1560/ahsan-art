"use client"

import React from "react"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus, Pencil, Trash2, Loader2, Film, Play } from "lucide-react"
import Image from "next/image"

interface BTSContent {
  id: string
  title: string
  description: string | null
  media_type: "image" | "video"
  media_url: string
  thumbnail_url: string | null
  created_at: string
}

export default function BTSAdminPage() {
  const [items, setItems] = useState<BTSContent[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<BTSContent | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    media_type: "image" as "image" | "video",
    media_url: "",
    thumbnail_url: "",
  })

  const supabase = createClient()

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    setIsLoading(true)
    const { data } = await supabase
      .from("bts_content")
      .select("*")
      .order("created_at", { ascending: false })
    setItems(data || [])
    setIsLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    if (editingItem) {
      await supabase
        .from("bts_content")
        .update({
          title: formData.title,
          description: formData.description || null,
          media_type: formData.media_type,
          media_url: formData.media_url,
          thumbnail_url: formData.thumbnail_url || null,
        })
        .eq("id", editingItem.id)
    } else {
      await supabase.from("bts_content").insert({
        title: formData.title,
        description: formData.description || null,
        media_type: formData.media_type,
        media_url: formData.media_url,
        thumbnail_url: formData.thumbnail_url || null,
      })
    }

    setIsSaving(false)
    setIsDialogOpen(false)
    resetForm()
    fetchItems()
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      await supabase.from("bts_content").delete().eq("id", id)
      fetchItems()
    }
  }

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      media_type: "image",
      media_url: "",
      thumbnail_url: "",
    })
    setEditingItem(null)
  }

  const openEditDialog = (item: BTSContent) => {
    setEditingItem(item)
    setFormData({
      title: item.title,
      description: item.description || "",
      media_type: item.media_type,
      media_url: item.media_url,
      thumbnail_url: item.thumbnail_url || "",
    })
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold font-serif">Behind The Scenes</h2>
          <p className="text-muted-foreground mt-1">
            Share your creative process and studio moments.
          </p>
        </div>
        <Dialog
          open={isDialogOpen}
          onOpenChange={(open) => {
            setIsDialogOpen(open)
            if (!open) resetForm()
          }}
        >
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Content
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>
                {editingItem ? "Edit BTS Content" : "Add BTS Content"}
              </DialogTitle>
              <DialogDescription>
                Share behind the scenes content from your studio.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="media_type">Media Type</Label>
                <Select
                  value={formData.media_type}
                  onValueChange={(value: "image" | "video") =>
                    setFormData({ ...formData, media_type: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="image">Image</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="media_url">
                  {formData.media_type === "video" ? "Video URL" : "Image URL"}
                </Label>
                <Input
                  id="media_url"
                  value={formData.media_url}
                  onChange={(e) =>
                    setFormData({ ...formData, media_url: e.target.value })
                  }
                  placeholder={
                    formData.media_type === "video"
                      ? "https://youtube.com/..."
                      : "https://example.com/image.jpg"
                  }
                  required
                />
              </div>
              {formData.media_type === "video" && (
                <div className="space-y-2">
                  <Label htmlFor="thumbnail_url">Thumbnail URL (optional)</Label>
                  <Input
                    id="thumbnail_url"
                    value={formData.thumbnail_url}
                    onChange={(e) =>
                      setFormData({ ...formData, thumbnail_url: e.target.value })
                    }
                    placeholder="https://example.com/thumbnail.jpg"
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="description">Description (optional)</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={3}
                />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90"
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : editingItem ? (
                    "Update"
                  ) : (
                    "Add Content"
                  )}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : items.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Film className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No BTS content yet</h3>
            <p className="text-muted-foreground mt-1">
              Share your first behind the scenes moment.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative aspect-video bg-secondary">
                <Image
                  src={item.thumbnail_url || item.media_url || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {item.media_type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-black/50 flex items-center justify-center">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
              <CardContent className="pt-4">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground capitalize">
                  {item.media_type}
                </p>
                {item.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                    {item.description}
                  </p>
                )}
                <div className="flex gap-2 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openEditDialog(item)}
                  >
                    <Pencil className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:text-destructive bg-transparent"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
