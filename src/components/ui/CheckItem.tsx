import { BadgeCheck } from "lucide-react";

export default function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold/15 text-gold-deep">
        <BadgeCheck className="h-5 w-5" aria-hidden="true" />
      </div>
      <span className="font-medium text-primary">{text}</span>
    </div>
  );
}