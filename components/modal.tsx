"use client"
 
import { ReactNode, useEffect } from "react"
import { X } from "lucide-react"
 
interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
}
 
export function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [open])
 
  if (!open) return null
 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
     
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />
 
      {/* Modal Content */}
      <div
        className="
          relative z-10
          w-full
          max-w-lg
          max-h-[90vh]
          overflow-y-auto
          rounded-2xl
         
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute
            top-3
            right-3
            rounded-full
            bg-white
            p-2
            shadow
            hover:bg-slate-100
          "
        >
          <X className="h-4 w-4 text-slate-600" />
        </button>
 
        {children}
      </div>
    </div>
  )
}
 