import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Images, Briefcase, MessageSquare, Mail, TrendingUp, Eye } from "lucide-react"
import Link from "next/link"

export default async function AdminDashboardPage() {
  const supabase = await createClient()

  // Fetch counts for dashboard
  const [portfolioCount, servicesCount, testimonialsCount, contactsCount] = await Promise.all([
    supabase.from("portfolio_items").select("*", { count: "exact", head: true }),
    supabase.from("services").select("*", { count: "exact", head: true }),
    supabase.from("testimonials").select("*", { count: "exact", head: true }),
    supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
  ])

  // Fetch recent contacts
  const { data: recentContacts } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5)

  const stats = [
    {
      name: "Portfolio Items",
      value: portfolioCount.count || 0,
      icon: Images,
      href: "/admin/portfolio",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      name: "Services",
      value: servicesCount.count || 0,
      icon: Briefcase,
      href: "/admin/services",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      name: "Testimonials",
      value: testimonialsCount.count || 0,
      icon: MessageSquare,
      href: "/admin/testimonials",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      name: "Contact Submissions",
      value: contactsCount.count || 0,
      icon: Mail,
      href: "/admin/contacts",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold font-serif">Dashboard Overview</h2>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here is what is happening with your studio.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.name} href={stat.href}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Click to manage
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link
              href="/admin/portfolio"
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <span className="font-medium">Add New Portfolio Item</span>
              <Images className="h-4 w-4 text-muted-foreground" />
            </Link>
            <Link
              href="/admin/services"
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <span className="font-medium">Manage Services</span>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </Link>
            <Link
              href="/admin/testimonials"
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <span className="font-medium">Add Testimonial</span>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <span className="font-medium">View Live Site</span>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </Link>
          </CardContent>
        </Card>

        {/* Recent Contact Submissions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Recent Contact Submissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentContacts && recentContacts.length > 0 ? (
              <div className="space-y-3">
                {recentContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex items-start justify-between p-3 rounded-lg bg-secondary/50"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="font-medium truncate">{contact.name}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {contact.email}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(contact.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        contact.status === "new"
                          ? "bg-primary/10 text-primary"
                          : contact.status === "read"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-emerald-500/10 text-emerald-500"
                      }`}
                    >
                      {contact.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">
                No contact submissions yet
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
