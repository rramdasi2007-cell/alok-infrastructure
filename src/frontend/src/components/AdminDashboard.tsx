import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { Inbox, LogOut, Mail, Phone, RefreshCw, User, X } from "lucide-react";
import { useState } from "react";
import type { Contact } from "../backend.d";
import { useActor } from "../hooks/useActor";

interface AdminDashboardProps {
  token: string;
  onLogout: () => void;
}

const SERVICE_LABELS: Record<string, string> = {
  peb: "PEB Structures",
  steel: "Steel Fabrication",
  civil: "Civil Works & RCC",
  turnkey: "Turnkey Project",
  other: "Other",
};

const SERVICE_COLORS: Record<string, string> = {
  peb: "bg-blue-100 text-blue-700",
  steel: "bg-gray-100 text-gray-700",
  civil: "bg-green-100 text-green-700",
  turnkey: "bg-purple-100 text-purple-700",
  other: "bg-yellow-100 text-yellow-700",
};

export default function AdminDashboard({
  token,
  onLogout,
}: AdminDashboardProps) {
  const { actor } = useActor();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState<Contact | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const {
    data: enquiries,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery<Contact[]>({
    queryKey: ["enquiries", token],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.getAllEnquiries(token);
      } catch {
        return [];
      }
    },
    enabled: !!actor && !!token,
    retry: false,
  });

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      if (actor) await actor.logout(token);
    } catch {
      // ignore
    } finally {
      localStorage.removeItem("adminToken");
      onLogout();
    }
  };

  const list = enquiries ?? [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-navy shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/uploads/WhatsApp-Image-2026-03-17-at-4.47.30-PM-1.jpeg"
              alt="Alok Infrastructure"
              className="h-10 w-10 rounded-full object-cover border-2 border-brand-orange"
            />
            <div>
              <span className="font-bold text-white text-sm tracking-wide">
                ALOK INFRASTRUCTURE
              </span>
              <p className="text-brand-orange text-xs font-medium">
                Admin Dashboard
              </p>
            </div>
          </div>
          <Button
            data-ocid="admin.logout.button"
            onClick={handleLogout}
            disabled={isLoggingOut}
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent text-sm gap-2"
          >
            <LogOut className="w-4 h-4" />
            {isLoggingOut ? "Logging out..." : "Logout"}
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div
            data-ocid="admin.stats.card"
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
          >
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              Total Enquiries
            </p>
            <p className="text-3xl font-bold text-navy mt-1">{list.length}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              PEB Enquiries
            </p>
            <p className="text-3xl font-bold text-navy mt-1">
              {list.filter((e) => e.serviceType === "peb").length}
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              Civil / RCC
            </p>
            <p className="text-3xl font-bold text-navy mt-1">
              {list.filter((e) => e.serviceType === "civil").length}
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-navy">
                Submitted Enquiries
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Click any row to view full details
              </p>
            </div>
            <Button
              data-ocid="admin.refresh.button"
              variant="outline"
              size="sm"
              onClick={() => refetch()}
              disabled={isFetching}
              className="gap-1.5 text-xs border-gray-300"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${isFetching ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
          </div>

          {isLoading && (
            <div
              data-ocid="admin.loading_state"
              className="flex items-center justify-center py-20 text-gray-400"
            >
              <span className="w-6 h-6 border-2 border-navy border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {isError && (
            <div
              data-ocid="admin.error_state"
              className="flex flex-col items-center justify-center py-20 text-red-500 gap-2"
            >
              <p className="font-medium">Failed to load enquiries.</p>
              <Button variant="outline" size="sm" onClick={() => refetch()}>
                Try Again
              </Button>
            </div>
          )}

          {!isLoading && !isError && list.length === 0 && (
            <div
              data-ocid="admin.empty_state"
              className="flex flex-col items-center justify-center py-20 text-gray-400 gap-3"
            >
              <Inbox className="w-12 h-12 text-gray-300" />
              <p className="font-medium text-gray-500">No enquiries yet</p>
              <p className="text-sm">
                Enquiries submitted via the contact form will appear here.
              </p>
            </div>
          )}

          {!isLoading && !isError && list.length > 0 && (
            <div className="overflow-x-auto">
              <Table data-ocid="admin.enquiries.table">
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold text-gray-600 text-xs uppercase">
                      #
                    </TableHead>
                    <TableHead className="font-semibold text-gray-600 text-xs uppercase">
                      Name
                    </TableHead>
                    <TableHead className="font-semibold text-gray-600 text-xs uppercase">
                      Email
                    </TableHead>
                    <TableHead className="font-semibold text-gray-600 text-xs uppercase">
                      Phone
                    </TableHead>
                    <TableHead className="font-semibold text-gray-600 text-xs uppercase">
                      Service
                    </TableHead>
                    <TableHead className="font-semibold text-gray-600 text-xs uppercase">
                      Message
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {list.map((enquiry, idx) => (
                    <TableRow
                      key={`${enquiry.email}-${idx}`}
                      data-ocid={`admin.enquiry.item.${idx + 1}`}
                      className="hover:bg-orange-50 cursor-pointer transition-colors border-l-2 border-l-transparent hover:border-l-brand-orange"
                      onClick={() => {
                        setSelectedEnquiry(enquiry);
                        setSelectedIndex(idx + 1);
                      }}
                    >
                      <TableCell className="text-gray-400 text-sm font-mono">
                        {idx + 1}
                      </TableCell>
                      <TableCell className="font-medium text-gray-800">
                        {enquiry.name}
                      </TableCell>
                      <TableCell className="text-gray-600 text-sm">
                        {enquiry.email}
                      </TableCell>
                      <TableCell className="text-gray-600 text-sm">
                        {enquiry.phone}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${
                            SERVICE_COLORS[enquiry.serviceType] ??
                            "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {SERVICE_LABELS[enquiry.serviceType] ??
                            enquiry.serviceType}
                        </span>
                      </TableCell>
                      <TableCell className="text-gray-600 text-sm max-w-xs">
                        <span className="line-clamp-2">{enquiry.message}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </main>

      {/* Detail Modal */}
      <Dialog
        open={!!selectedEnquiry}
        onOpenChange={(open) => {
          if (!open) setSelectedEnquiry(null);
        }}
      >
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-navy flex items-center gap-2">
              <span className="bg-navy text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {selectedIndex}
              </span>
              Enquiry Details
            </DialogTitle>
          </DialogHeader>

          {selectedEnquiry && (
            <div className="space-y-4 mt-2">
              {/* Service badge */}
              <div className="flex items-center justify-between">
                <span
                  className={`inline-block text-sm font-semibold px-3 py-1 rounded-full ${
                    SERVICE_COLORS[selectedEnquiry.serviceType] ??
                    "bg-gray-100 text-gray-600"
                  }`}
                >
                  {SERVICE_LABELS[selectedEnquiry.serviceType] ??
                    selectedEnquiry.serviceType}
                </span>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-navy/10 rounded-full p-2">
                    <User className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                      Name
                    </p>
                    <p className="text-gray-800 font-semibold">
                      {selectedEnquiry.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-navy/10 rounded-full p-2">
                    <Mail className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                      Email
                    </p>
                    <a
                      href={`mailto:${selectedEnquiry.email}`}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {selectedEnquiry.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-navy/10 rounded-full p-2">
                    <Phone className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                      Phone
                    </p>
                    <a
                      href={`tel:${selectedEnquiry.phone}`}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {selectedEnquiry.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-2">
                  Message / Project Details
                </p>
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                    {selectedEnquiry.message || "No message provided."}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={`tel:${selectedEnquiry.phone}`}
                  className="flex-1 bg-navy text-white text-sm font-medium py-2.5 rounded-lg text-center hover:bg-navy/90 transition-colors"
                >
                  Call Now
                </a>
                <a
                  href={`mailto:${selectedEnquiry.email}`}
                  className="flex-1 border border-navy text-navy text-sm font-medium py-2.5 rounded-lg text-center hover:bg-navy/5 transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
