"use client";
import { AppAccordion } from "../custom/AppAccordion";
// import DOMPurify from 'dompurify';

const data = [
  {
    title: "What is Sent's Messaging API?",
    content:
      "<span>Sent is a powerful <strong>Messaging API</strong> that simplifies cross-channel communication through a unified interface. It allows you to send messages across <strong>SMS</strong>, <strong>WhatsApp</strong>, <strong>iMessage</strong>, <strong>Viber</strong>, and <strong>RCS Messaging</strong>, enhancing your business messaging strategy.</span>",
  },
  {
    title: "How does Sent integrate with WhatsApp, Viber, and iMessage?",
    content:
      "<span>Sent's unified API seamlessly integrates with popular messaging platforms like <strong>WhatsApp</strong>, <strong>Viber</strong>, and <strong>iMessage</strong>. It automatically identifies the best channel to reach your contact using their phone number, ensuring effective communication.</span>",
  },
  {
    title: "Can I send SMS using Sent?",
    content:
      "<span>Yes! Sent fully supports <strong>SMS messaging</strong>. You can send SMS to any mobile number worldwide, reaching customers who prefer traditional text messages.</span>",
  },
  {
    title: "What is RCS Messaging and how does Sent support it?",
    content:
      "<span><strong>RCS Messaging</strong> (Rich Communication Services) is an upgrade to SMS, offering richer media and interactive features. Sent's API allows you to leverage RCS to send engaging messages with images, videos, and more.</span>",
  },
  {
    title: "How does Sent handle message personalization?",
    content:
      "<span>Sent allows you to create reusable message templates with dynamic fields and media components. You can easily personalize messages, making them more engaging and relevant to each recipient.</span>",
  },
  {
    title:
      "Do I need to format messages differently for each messaging channel?",
    content:
      "<span>No, you don't. Sent's content transformation feature automatically adapts your messages to fit the schema requirements of each messaging channel, including the <strong>WhatsApp API</strong>, <strong>Viber API</strong>, and <strong>iMessage API</strong>. This saves you time and ensures consistency across platforms.</span>",
  },
  {
    title: "What kind of analytics does Sent provide for business messaging?",
    content:
      "<span>Sent offers advanced deliverability and engagement analytics for your contacts and messages. This includes data on opens, read receipts, media/link interactions, and on-site events, helping you understand and improve the effectiveness of your business messaging campaigns.</span>",
  },
  {
    title: "How do I integrate Sent's Messaging API into my application?",
    content:
      "<span>Integrating with Sent is straightforward. We provide SDKs in multiple programming languages, and our comprehensive documentation guides you through the process, allowing you to start sending messages in minutes.</span>",
  },
  {
    title:
      "Does Sent support fallback options if a primary channel is unavailable?",
    content:
      "<span>Yes, Sent manages alternative and fallback communication channels. If a primary channel like <strong>iMessage</strong> is unavailable, Sent can automatically route the message through <strong>SMS</strong> or another available channel to ensure deliverability.</span>",
  },
  {
    title: "Can Sent help reduce messaging costs?",
    content:
      "<span>Absolutely! Sent's intelligent delivery model optimizes messaging routes to provide global reach while reducing messaging costs by 80-90%, especially when leveraging IP-based channels like <strong>WhatsApp</strong> and <strong>Viber</strong>.</span>",
  },
  {
    title: "Is Sent suitable for marketing campaigns?",
    content:
      "<span>Yes, Sent is ideal for marketing campaigns. With its ability to send personalized messages across multiple channels and track engagement metrics, you can enhance your reach and improve campaign effectiveness.</span>",
  },
  {
    title: "What is A2P Messaging and does Sent support it?",
    content:
      "<span><strong>A2P Messaging</strong> (Application-to-Person Messaging) refers to messages sent from applications to individuals. Sent is designed specifically for A2P messaging, enabling businesses to communicate efficiently with their customers.</span>",
  },
  {
    title: "How does Sent ensure message deliverability?",
    content:
      "<span>Sent automatically identifies the best messaging channel for each contact and manages alternative routes if necessary. This ensures your messages are delivered reliably, whether via <strong>SMS</strong>, <strong>WhatsApp</strong>, <strong>iMessage</strong>, or other supported channels.</span>",
  },
  {
    title: "Does Sent provide support for developers?",
    content:
      "<span>Yes, we offer comprehensive support for developers, including detailed documentation, SDKs in multiple languages, and a responsive support team to assist with any integration questions.</span>",
  },
  {
    title: "Is there a sandbox environment to test Sent's Messaging API?",
    content:
      "<span>Yes, Sent provides a sandbox environment where you can test the Messaging API without incurring charges or sending actual messages, allowing you to develop and test your integration safely.</span>",
  },
];

export const Faq = () => {
  return (
    <div className="relative pt-6 px-6 md:px-8 py-14">
      <div className="mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-xl leading-8 text-zinc-400">
            Got questions about Sent? We&apos;ve got answers. Here are some of
            the most common questions we receive.
          </p>
        </div>
        <div className="mx-auto my-12 max-w-[700px] space-y-6">
          {data.map((item, index) => (
            <div key={index}>
              <AppAccordion title={item.title} content={item.content} />
            </div>
          ))}
        </div>
        <p className="mb-12 text-center text-sm font-medium tracking-tight text-foreground/80">
          Still have questions? Email us at{" "}
          <a href="mailto:tranbinhminh1403@gmail.com" className="underline">
            team@sent.dm
          </a>
        </p>
      </div>
    </div>
  );
};
