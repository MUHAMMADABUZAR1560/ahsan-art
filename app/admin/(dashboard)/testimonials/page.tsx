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
import { Plus, Pencil, Trash2, Loader2, MessageSquare, Star } from "lucide-react"

interface Testimonial {
  id: string
  client_name: string
  client_company: string | null
  client_image: string | null
  content: string
  rating: number
  featured: boolean
  created_at: string
}

export default function TestimonialsAdminPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    client_name: "",
    client_company: "",
    client_image: "",
    content: "",
    rating: 5,
    featured: false,
  })

  const supabase = createClient()

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    setIsLoading(true)
    const { data } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false })
    setTestimonials(data || [])
    setIsLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    if (editingTestimonial) {
      await supabase
        .from("testimonials")
        .update({
          client_name: formData.client_name,
          client_company: formData.client_company || null,
          client_image: formData.client_image || null,
          content: formData.content,
          rating: formData.rating,
          featured: formData.featured,
        })
        .eq("id", editingTestimonial.id)
    } else {
      await supabase.from("testimonials").insert({
        client_name: formData.client_name,
        client_company: formData.client_company || null,
        client_image: formData.client_image || null,
        content: formData.content,
        rating: formData.rating,
        featured: formData.featured,
      })
    }

    setIsSaving(false)
    setIsDialogOpen(false)
    resetForm()
    fetchTestimonials()
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      await supabase.from("testimonials").delete().eq("id", id)
      fetchTestimonials()
    }
  }

  const resetForm = () => {
    setFormData({
      client_name: "",
      client_company: "",
      client_image: "",
      content: "",
      rating: 5,
      featured: false,
    })
    setEditingTestimonial(null)
  }

  const openEditDialog = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial)
    setFormData({
      client_name: testimonial.client_name,
      client_company: testimonial.client_company || "",
      client_image: testimonial.client_image || "",
      content: testimonial.content,
      rating: testimonial.rating,
      featured: testimonial.featured,
    })
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold font-serif">Testimonials</h2>
          <p className="text-muted-foreground mt-1">
            Manage client testimonials and reviews.
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
              Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>
                {editingTestimonial ? "Edit Testimonial" : "Add Testimonial"}
              </DialogTitle>
              <DialogDescription>
                Add a client testimonial to showcase on your website.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="client_name">Client Name</Label>
                <Input
                  id="client_name"
                  value={formData.client_name}
                  onChange={(e) =>
                    setFormData({ ...formData, client_name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client_company">Company (optional)</Label>
                <Input
                  id="client_company"
                  value={formData.client_company}
                  onChange={(e) =>
                    setFormData({ ...formData, client_company: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client_image">Client Image URL (optional)</Label>
                <Input
                  id="client_image"
                  value={formData.client_image}
                  onChange={(e) =>
                    setFormData({ ...formData, client_image: e.target.value })
                  }
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Testimonial Content</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  rows={4}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Rating</Label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= formData.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) =>
                    setFormData({ ...formData, featured: e.target.checked })
                  }
                  className="rounded border-border"
                />
                <Label htmlFor="featured">Featured testimonial</Label>
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
                  ) : editingTestimonial ? (
                    "Update"
                  ) : (
                    "Add Testimonial"
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
      ) : testimonials.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No testimonials yet</h3>
            <p className="text-muted-foreground mt-1">
              Add your first client testimonial.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {testimonial.client_name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.client_name}</p>
                      {testimonial.client_company && (
                        <p className="text-sm text-muted-foreground">
                          {testimonial.client_company}
                        </p>
                      )}
                    </div>
                  </div>
                  {testimonial.featured && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= testimonial.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openEditDialog(testimonial)}
                  >
                    <Pencil className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:text-destructive bg-transparent"
                    onClick={() => handleDelete(testimonial.id)}
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
