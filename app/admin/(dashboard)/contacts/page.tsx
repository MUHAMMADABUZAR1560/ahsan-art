"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Loader2, Mail, Trash2, Eye, Calendar, User, Phone, Briefcase } from "lucide-react"

interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string | null
  service_interest: string | null
  message: string
  status: "new" | "read" | "replied"
  created_at: string
}

export default function ContactsAdminPage() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null)
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const supabase = createClient()

  useEffect(() => {
    fetchContacts()
  }, [statusFilter])

  const fetchContacts = async () => {
    setIsLoading(true)
    let query = supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false })

    if (statusFilter !== "all") {
      query = query.eq("status", statusFilter)
    }

    const { data } = await query
    setContacts(data || [])
    setIsLoading(false)
  }

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("contact_submissions").update({ status }).eq("id", id)
    fetchContacts()
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this submission?")) {
      await supabase.from("contact_submissions").delete().eq("id", id)
      fetchContacts()
    }
  }

  const openContactDetails = async (contact: ContactSubmission) => {
    setSelectedContact(contact)
    if (contact.status === "new") {
      await updateStatus(contact.id, "read")
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-primary/10 text-primary"
      case "read":
        return "bg-amber-500/10 text-amber-600"
      case "replied":
        return "bg-emerald-500/10 text-emerald-600"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold font-serif">Contact Submissions</h2>
          <p className="text-muted-foreground mt-1">
            View and manage contact form submissions.
          </p>
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="read">Read</SelectItem>
            <SelectItem value="replied">Replied</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : contacts.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Mail className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No submissions yet</h3>
            <p className="text-muted-foreground mt-1">
              Contact submissions will appear here.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <Card key={contact.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium truncate">{contact.name}</h3>
                      <span
                        className={`px-2 py-0.5 text-xs font-medium rounded capitalize ${getStatusColor(
                          contact.status
                        )}`}
                      >
                        {contact.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {contact.email}
                    </p>
                    {contact.service_interest && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Interested in: {contact.service_interest}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                      {contact.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {new Date(contact.created_at).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openContactDetails(contact)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive hover:text-destructive bg-transparent"
                      onClick={() => handleDelete(contact.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Contact Details Dialog */}
      <Dialog
        open={!!selectedContact}
        onOpenChange={(open) => !open && setSelectedContact(null)}
      >
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Contact Details</DialogTitle>
          </DialogHeader>
          {selectedContact && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{selectedContact.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${selectedContact.email}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {selectedContact.email}
                  </a>
                </div>
              </div>
              {selectedContact.phone && (
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href={`tel:${selectedContact.phone}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {selectedContact.phone}
                    </a>
                  </div>
                </div>
              )}
              {selectedContact.service_interest && (
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <Briefcase className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Service Interest
                    </p>
                    <p className="font-medium">
                      {selectedContact.service_interest}
                    </p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Submitted</p>
                  <p className="font-medium">
                    {new Date(selectedContact.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Message</p>
                <p className="whitespace-pre-wrap">{selectedContact.message}</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t">
                <Select
                  value={selectedContact.status}
                  onValueChange={(value) => {
                    updateStatus(selectedContact.id, value)
                    setSelectedContact({ ...selectedContact, status: value as ContactSubmission["status"] })
                  }}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="read">Read</SelectItem>
                    <SelectItem value="replied">Replied</SelectItem>
                  </SelectContent>
                </Select>
                <a
                  href={`mailto:${selectedContact.email}?subject=Re: Your inquiry to Ahsan Art`}
                  className="inline-flex"
                >
                  <Button className="bg-primary hover:bg-primary/90">
                    <Mail className="h-4 w-4 mr-2" />
                    Reply via Email
                  </Button>
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
