import { FileText, Image as ImageIcon } from "lucide-react";
import React, { useState } from "react";
import { CertificateModal } from "./CertificateModal";

interface Certificate {
  name: string;
  url: string;
  type: "pdf" | "image";
}

interface CertificateListProps {
  certificates?: Certificate[];
}

export function CertificateList({ certificates }: CertificateListProps) {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  if (!certificates || certificates.length === 0) return null;

  return (
    <>
      <div className="flex flex-wrap gap-3 mt-3">
        {certificates.map((cert, index) => (
          <button
            key={index}
            onClick={() => setSelectedCert(cert)}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-colors border rounded-md bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border-border hover:border-gray-400 dark:hover:border-gray-500 cursor-pointer"
            title={`View ${cert.name}`}
          >
            {cert.type === "pdf" ? (
              <FileText className="w-4 h-4" />
            ) : (
              <ImageIcon className="w-4 h-4" />
            )}
            <span>{cert.name}</span>
          </button>
        ))}
      </div>

      <CertificateModal 
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        certificate={selectedCert}
      />
    </>
  );
}
