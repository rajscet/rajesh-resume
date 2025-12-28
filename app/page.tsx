"use client";

import { useState } from "react";
import { ModernTemplate } from "@/components/templates/ModernTemplate";
import { ClassicTemplate } from "@/components/templates/ClassicTemplate";
import { TabBarTemplate } from "@/components/templates/TabBarTemplate";
import { TemplateSwitcher } from "@/components/TemplateSwitcher";

export default function Home() {
  const [template, setTemplate] = useState("tabbar");

  return (
    <main>
      {template === "modern" && <ModernTemplate />}
      {template === "classic" && <ClassicTemplate />}
      {template === "tabbar" && <TabBarTemplate />}
      
      <TemplateSwitcher currentTemplate={template} onTemplateChange={setTemplate} />
    </main>
  );
}
