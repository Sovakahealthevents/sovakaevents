import Image from "next/image"
import { cn } from "@/lib/utils"
 
export default function Logo({
  collapsed = false,
}: {
  collapsed?: boolean
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 transition-all duration-300 overflow-hidden",
        collapsed ? "justify-center" : "justify-start"
      )}
    >
      <Image
        src="/sovakalogo.png"
        alt="SOVAKA HEALTH"
        width={256}
        height={36}
        priority
        className=""
      />
 
      {/* {!collapsed && (
        <span className="font-bold ml-1 text-lg whitespace-nowrap">
          SOVAKA HEALTH
        </span>
      )} */}
    </div>
  )
}