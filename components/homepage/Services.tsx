import { ServiceCard, ServiceCardProps } from "./ServiceCard";
import {
  Activity,
  ChartLine,
  Code,
  Eye,
  MessageSquare,
  PanelsTopLeft,
  Phone,
  Repeat,
  ScrollText,
  Shield,
  Signal,
  Terminal,
} from "lucide-react";

const content: ServiceCardProps[] = [
  {
    icon: <Code />,
    title: "Channel-agnostic API",
    description:
      "RESTful endpoints abstract channel-specific implementations. Single message format with optional channel-specific parameters. Supports bulk operations with automatic rate limiting.",
  },
  {
    icon: <Signal />,
    title: "Delivery Optimization",
    description:
      "ML-powered delivery time optimization and channel selection. Automatic adjustment of sending patterns based on historical delivery success rates and user engagement data.",
  },
  {
    icon: <Repeat />,
    title: "Message Schema Transformation",
    description:
      "Automatic conversion between rich message formats (MMS, RCS Business Messaging, WhatsApp Templates) with fallback handling for capability-limited channels like SMS.",
  },
  {
    icon: <Terminal />,
    title: "Fallback Management",
    description:
      "Configure channel-specific fallback rules and cascading delivery logic, or let us handle it for you. Set timeout, retry attempts, and alternative channel routing based on message priority and type.",
  },
  {
    icon: <Activity />,
    title: "Channel Availability Detection",
    description:
      "Resolve/detect which channels your customers use instantly with just phone number. No client side data required.",
  },
  {
    icon: <ChartLine />,
    title: "Delivery Analytics",
    description:
      "Real-time metrics on channel performance, routing decisions, and delivery states. Track costs per channel, message transformation success rates, and channel availability patterns.",
  },
  {
    icon: <Shield />,
    title: "White Route Compliance",
    description:
      "Sent integrates directly with official channels only: 10DLC-registered SMS, WhatsApp Cloud API, and Google RBM. Automated compliance monitoring and reporting for all messaging routes.",
  },
  {
    icon: <Phone />,
    title: "Number Management",
    description:
      "Unified phone number provisioning and management across channels. Use the same number for SMS, WhatsApp Business, and RCS with automated verification and compliance checks.",
  },
  {
    icon: <Eye />,
    title: "Sender Reputation Monitoring",
    description:
      "Track sender scores across messaging channels. Monitor block rates, spam reports, and engagement metrics with automated alerts for reputation-impacting events.",
  },
  {
    icon: <ScrollText />,
    title: "API Logs & Debugging",
    description:
      "Comprehensive request logging with message lifecycle tracing. Debug channel-specific errors, transformation failures, and delivery issues with detailed error context and resolution steps.",
  },
  {
    icon: <PanelsTopLeft />,
    title: "Visual Template Editor",
    description:
      "Design and test rich message templates compatible across channels. Live preview of channel-specific rendering with automated content validation against provider requirements.",
  },
  {
    icon: <MessageSquare />,
    title: "Message Testing Suite",
    description:
      "Sandbox environment for testing message delivery across channels. Simulate delivery scenarios, error conditions, and fallback behavior without affecting production traffic.",
  },
];

export const Services = () => {
  return (
    <div className="max-w-[80rem] mx-auto px-2">
      <div>
        <h2 className="px-2 text-4xl font-bold mb-6">
          Build product, not messaging infrastructure
        </h2>
        <h3 className="px-2 text-xl mx-auto text-zinc-600 dark:text-zinc-400 mb-6">
          Stop wrestling with multiple messaging services and integrations.
          <br />
          We handle the complexity so you can focus on shipping.
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
        {content.map((item, index) => (
          <ServiceCard key={index} content={item} />
        ))}
      </div>
    </div>
  );
};
