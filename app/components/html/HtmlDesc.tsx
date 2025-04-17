import { sanitizeHtml } from "@lib/utils";

const HtmlDescription = ({ description }: { description: string }) => {
    const sanitizedDescription = sanitizeHtml(description);
  
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: sanitizedDescription,
        }}
      />
    );
  };
  
export default HtmlDescription;