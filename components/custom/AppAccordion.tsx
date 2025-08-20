'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import DOMPurify from "isomorphic-dompurify";

export const AppAccordion = ({
    title,
    // description,
    content 
}: {
    title: string;
    // description: string;
    content: string;
}) => {
    const sanitizedContent = DOMPurify.sanitize(content,{USE_PROFILES: {html: true}});
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="cursor-pointer py-1">{title}</AccordionTrigger>
                <AccordionContent>
                    <div className="pt-2" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}