"use client"

import React from "react"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Pencil, Trash2, Loader2, Briefcase } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  icon: string | null
  features: string[]
  price_range: string | null
  active: boolean
  order_index: number
  created_at: string
}

export default function ServicesAdminPage() {
  const [services, setServices] = useState<Service[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingService, setEditingService] = useState<Service | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "",
    features: "",
    price_range: "",
    active: true,
  })

  const supabase = createClient()

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    setIsLoading(true)
    const { data } = await supabase
      .from("services")
      .select("*")
      .order("order_index", { ascending: true })
    setServices(data || [])
    setIsLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    const features = formData.features
      .split("\n")
      .map((f) => f.trim())
      .filter((f) => f)

    if (editingService) {
      await supabase
        .from("services")
        .update({
          title: formData.title,
          description: formData.description,
          icon: formData.icon || null,
          features,
          price_range: formData.price_range || null,
          active: formData.active,
        })
        .eq("id", editingService.id)
    } else {
      const maxOrder = Math.max(...services.map((s) => s.order_index), 0)
      await supabase.from("services").insert({
        title: formData.title,
        description: formData.description,
        icon: formData.icon || null,
        features,
        price_range: formData.price_range || null,
        active: formData.active,
        order_index: maxOrder + 1,
      })
    }

    setIsSaving(false)
    setIsDialogOpen(false)
    resetForm()
    fetchServices()
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      await supabase.from("services").delete().eq("id", id)
      fetchServices()
    }
  }

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      icon: "",
      features: "",
      price_range: "",
      active: true,
    })
    setEditingService(null)
  }

  const openEditDialog = (service: Service) => {
    setEditingService(service)
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon || "",
      features: service.features.join("\n"),
      price_range: service.price_range || "",
      active: service.active,
    })
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold font-serif">Services</h2>
          <p className="text-muted-foreground mt-1">
            Manage the services you offer to clients.
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
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>
                {editingService ? "Edit Service" : "Add Service"}
              </DialogTitle>
              <DialogDescription>
                Fill in the details for this service.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Service Title</Label>
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
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={3}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="features">Features (one per line)</Label>
                <Textarea
                  id="features"
                  value={formData.features}
                  onChange={(e) =>
                    setFormData({ ...formData, features: e.target.value })
                  }
                  rows={4}
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price_range">Price Range (optional)</Label>
                <Input
                  id="price_range"
                  value={formData.price_range}
                  onChange={(e) =>
                    setFormData({ ...formData, price_range: e.target.value })
                  }
                  placeholder="e.g., Starting at $299"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="active"
                  checked={formData.active}
                  onChange={(e) =>
                    setFormData({ ...formData, active: e.target.checked })
                  }
                  className="rounded border-border"
                />
                <Label htmlFor="active">Active</Label>
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
                  ) : editingService ? (
                    "Update"
                  ) : (
                    "Add Service"
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
      ) : services.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Briefcase className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No services yet</h3>
            <p className="text-muted-foreground mt-1">
              Add your first service to get started.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {service.title}
                      {!service.active && (
                        <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded">
                          Inactive
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {service.price_range || "Contact for pricing"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {service.description}
                </p>
                {service.features.length > 0 && (
                  <ul className="text-sm space-y-1">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-muted-foreground">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                )}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openEditDialog(service)}
                  >
                    <Pencil className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:text-destructive bg-transparent"
                    onClick={() => handleDelete(service.id)}
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
