
import React from "react";

interface LocationLinkProps {
  location: string;
  className?: string;
}

export const LocationLink: React.FC<LocationLinkProps> = ({
  location,
  className,
}) => {
  // Check if the specific format exists
  if (
    location.toLowerCase().includes("surat") &&
    location.toLowerCase().includes("gadhda") &&
    location.includes(" / ")
  ) {
    const parts = location.split(" / ");
    return (
      <span className={className}>
        {parts.map((part, index) => {
          // Check if this part contains Surat
          if (part.toLowerCase().includes("surat")) {
            return (
              <React.Fragment key={index}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Surat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {part}
                </a>
                {index < parts.length - 1 && " / "}
              </React.Fragment>
            );
          }
          // Check if this part contains Gadhda
          if (part.toLowerCase().includes("gadhda")) {
            return (
              <React.Fragment key={index}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Gadhda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {part}
                </a>
                {index < parts.length - 1 && " / "}
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={index}>
              {part}
              {index < parts.length - 1 && " / "}
            </React.Fragment>
          );
        })}
      </span>
    );
  }

  // Fallback
  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        location
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} underline hover:text-primary transition-colors`}
      onClick={(e) => e.stopPropagation()}
    >
      {location}
    </a>
  );
};
