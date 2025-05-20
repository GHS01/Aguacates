import React from 'react';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';

interface BreadcrumbItemProps {
  label: string;
  url: string;
  isCurrent?: boolean;
}

interface EnhancedBreadcrumbProps {
  items: BreadcrumbItemProps[];
  className?: string;
}

/**
 * EnhancedBreadcrumb component that renders visual breadcrumbs and includes structured data for SEO
 * 
 * @param items - Array of breadcrumb items with label and URL
 * @param className - Optional CSS class name
 */
const EnhancedBreadcrumb: React.FC<EnhancedBreadcrumbProps> = ({ 
  items,
  className
}) => {
  // Create the JSON-LD schema for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.url
    }))
  };

  return (
    <>
      {/* Visual breadcrumbs */}
      <Breadcrumb className={className}>
        <BreadcrumbList>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.isCurrent ? (
                  <span className="text-gray-600">{item.label}</span>
                ) : (
                  <BreadcrumbLink href={item.url}>{item.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default EnhancedBreadcrumb;
