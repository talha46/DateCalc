"use client";

import { useState } from "react";

type CopyButtonProps = {
  value: string;
};

export default function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className="rounded-md border border-teal-200 px-2 py-1 text-xs font-medium text-teal-700 transition hover:bg-teal-50"
    >
      {copied ? "Copied!" : "Copy result"}
    </button>
  );
}
