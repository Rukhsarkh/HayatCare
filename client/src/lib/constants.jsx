import {
  Calendar,
  CreditCard,
  FileText,
  ShieldCheck,
  User,
  Video,
} from "lucide-react";

import img1 from "@/assets/heroClients/client1.webp";
import img2 from "@/assets/heroClients/client2.webp";
import img3 from "@/assets/heroClients/client3.webp";
import img4 from "@/assets/heroClients/client4.webp";

export const dummyClients = [
  {
    id: 1,
    imgTitle: "client1",
    imgSrc: img1,
  },
  {
    id: 2,
    imgTitle: "client2",
    imgSrc: img2,
  },
  {
    id: 3,
    imgTitle: "client3",
    imgSrc: img3,
  },
  {
    id: 4,
    imgTitle: "client4",
    imgSrc: img4,
  },
];

export const features = [
  {
    icon: <User className="h-6 w-6 text-yellow-400" />,
    title: "Create Your Profile",
    description:
      "Sign up and complete your profile to get personalized healthcare recommendations and services.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-yellow-400" />,
    title: "Book Appointments",
    description:
      "Browse doctor profiles, check availability, and book appointments that fit your schedule.",
  },
  {
    icon: <Video className="h-6 w-6 text-yellow-400" />,
    title: "Video Consultation",
    description:
      "Connect with doctors through secure, high-quality video consultations from the comfort of your home.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-yellow-400" />,
    title: "Consultation Credits",
    description:
      "Purchase credit packages that fit your healthcare needs with our simple subscription model.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-yellow-400" />,
    title: "Verified Doctors",
    description:
      "All healthcare providers are carefully vetted and verified to ensure quality care.",
  },
  {
    icon: <FileText className="h-6 w-6 text-yellow-400" />,
    title: "Medical Documentation",
    description:
      "Access and manage your appointment history, doctor's notes, and medical recommendations.",
  },
];

export const creditBenefits = [
  "Each consultation requires <strong class='text-yellow-400'>2 credits</strong> regardless of duration",
  "Credits <strong class='text-yellow-400'>never expire</strong> - use them whenever you need",
  "Monthly subscriptions give you <strong class='text-yellow-400'>fresh credits every month</strong>",
  "Cancel or change your subscription <strong class='text-yellow-400'>anytime</strong> without penalties",
];

export const testimonials = [
  {
    initials: "SP",
    name: "Sarah P.",
    role: "Patient",
    quote:
      "The video consultation feature saved me so much time. I was able to get medical advice without taking time off work or traveling to a clinic.",
  },
  {
    initials: "DR",
    name: "Dr. Robert M.",
    role: "Cardiologist",
    quote:
      "This platform has revolutionized my practice. I can now reach more patients and provide timely care without the constraints of a physical office.",
  },
  {
    initials: "JT",
    name: "James T.",
    role: "Patient",
    quote:
      "The credit system is so convenient. I purchased a package for my family, and we've been able to consult with specialists whenever needed.",
  },
];
