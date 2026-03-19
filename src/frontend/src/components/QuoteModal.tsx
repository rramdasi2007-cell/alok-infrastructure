import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

const EMPTY_FORM = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  area: "",
  budget: "",
  description: "",
};

export default function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const { actor } = useActor();
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      toast.error("Connection error. Please try again.");
      return;
    }
    setSubmitting(true);
    try {
      // Pack extra fields into message so admin panel captures all info
      const messageParts: string[] = [];
      if (formData.location)
        messageParts.push(`Location: ${formData.location}`);
      if (formData.area) messageParts.push(`Area: ${formData.area} sq ft`);
      if (formData.budget) messageParts.push(`Budget: ${formData.budget}`);
      if (formData.description)
        messageParts.push(`Details: ${formData.description}`);
      const message = messageParts.join(" | ") || "(no details provided)";

      await actor.submitEnquiry(
        formData.fullName,
        formData.email,
        formData.phone,
        message,
        formData.service || "other",
      );
      toast.success(
        "Quote request submitted! Our team will contact you within 24 hours.",
      );
      onOpenChange(false);
      setFormData(EMPTY_FORM);
    } catch {
      toast.error("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg w-full p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-xl font-bold text-navy">
            Request a Quote
          </DialogTitle>
          <p className="text-sm text-gray-500">
            Fill in your project details and we'll get back to you within 24
            hours.
          </p>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh]">
          <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="q-fullName">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="q-fullName"
                  data-ocid="quote.fullName.input"
                  type="text"
                  placeholder="Your full name"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, fullName: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="q-phone">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="q-phone"
                  data-ocid="quote.phone.input"
                  type="tel"
                  placeholder="10-digit mobile number"
                  required
                  pattern="[0-9]{10}"
                  minLength={10}
                  maxLength={10}
                  title="Enter a valid 10-digit phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, phone: e.target.value }))
                  }
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="q-email">Email Address</Label>
              <Input
                id="q-email"
                data-ocid="quote.email.input"
                type="email"
                placeholder="your@email.com"
                pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                title="Enter a valid email address (e.g. name@domain.com)"
                value={formData.email}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, email: e.target.value }))
                }
              />
            </div>

            <div className="space-y-1">
              <Label>Service Required</Label>
              <Select
                value={formData.service}
                onValueChange={(v) =>
                  setFormData((p) => ({ ...p, service: v }))
                }
              >
                <SelectTrigger data-ocid="quote.service.select">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="peb">PEB Structures</SelectItem>
                  <SelectItem value="steel">Steel Fabrication</SelectItem>
                  <SelectItem value="civil">Civil Works & RCC</SelectItem>
                  <SelectItem value="turnkey">Turnkey Project</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="q-location">Project Location</Label>
                <Input
                  id="q-location"
                  data-ocid="quote.location.input"
                  type="text"
                  placeholder="City / District"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, location: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="q-area">Approximate Area (sq ft)</Label>
                <Input
                  id="q-area"
                  data-ocid="quote.area.input"
                  type="number"
                  placeholder="e.g. 5000"
                  value={formData.area}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, area: e.target.value }))
                  }
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label>Estimated Budget</Label>
              <Select
                value={formData.budget}
                onValueChange={(v) => setFormData((p) => ({ ...p, budget: v }))}
              >
                <SelectTrigger data-ocid="quote.budget.select">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Below 10 Lakhs">Below 10 Lakhs</SelectItem>
                  <SelectItem value="10-50 Lakhs">10–50 Lakhs</SelectItem>
                  <SelectItem value="50 Lakhs - 1 Crore">
                    50 Lakhs – 1 Crore
                  </SelectItem>
                  <SelectItem value="Above 1 Crore">Above 1 Crore</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label htmlFor="q-description">Project Description</Label>
              <Textarea
                id="q-description"
                data-ocid="quote.description.textarea"
                rows={3}
                placeholder="Brief description of your project requirements..."
                value={formData.description}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, description: e.target.value }))
                }
              />
            </div>

            <Button
              type="submit"
              data-ocid="quote.submit_button"
              disabled={submitting}
              className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-2.5"
            >
              {submitting ? "Submitting..." : "Submit Quote Request"}
            </Button>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
