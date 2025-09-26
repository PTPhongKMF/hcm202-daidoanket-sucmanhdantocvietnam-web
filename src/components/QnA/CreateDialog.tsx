import { Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/dialog"
import { Tooltip, TooltipContent, TooltipTrigger } from "../shadcn/tooltip"
import { Input } from "../shadcn/input"
import { Textarea } from "../shadcn/textarea"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { useAuthStore } from "../../stores/authStore"
import { push, ref, set } from "firebase/database"
import { db } from "../../services/firebaseService"
import { NOTE_COLORS } from "../../enums/note-colors"


export default function CreateDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const uid = useAuthStore((s) => s.uid);

  const createNote = useMutation({
    mutationFn: async () => {
      const trimmedName = name.trim();
      const trimmedContent = content.trim();
      if (!trimmedName || !trimmedContent) {
        alert("Please fill name and content");
        return;
      }

      if (!uid) {
        alert("Auth not ready yet. Please refresh or try again.");
        return;
      }

      const color = NOTE_COLORS[Math.floor(Math.random() * NOTE_COLORS.length)];

      const notesRef = ref(db, "notes");
      const newRef = push(notesRef);
      await set(newRef, {
        name: name,
        content: content,
        color: color,
        uid: uid,
        isComplete: false
      });

      return newRef.key;
    },
    onSuccess: () => { setName(""); setContent(""); setIsOpen(false)},
    onError: (err) => {console.error("create note error:", err); alert("Failed to create note. See console for details.");}
  })

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="group flex flex-col justify-center items-center cursor-pointer transform-gpu will-change-transform">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="cursor-pointer z-10 inline-flex items-center justify-center w-12 rounded-full border 
          border-emerald-300/60 bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-md transition-all 
          duration-200 ease-out hover:shadow-xl group-hover:scale-[1.03] active:scale-100 
          focus:outline-none focus:ring-2 focus:ring-emerald-300 h-100 -translate-y-1/2">
              <Plus className="w-6 h-6" />
            </div>
          </TooltipTrigger>

          <TooltipContent side="right" sideOffset={-4}>
            <p className="font-semibold text-lg bg-white px-4 py-1 rounded-2xl transition-transform duration-200 
          ease-out  antialiased will-change-transform">Tạo câu hỏi</p>
          </TooltipContent>
        </Tooltip>
      </DialogTrigger>
      <DialogContent className="bg-amber-100 w-110">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Tạo câu hỏi</DialogTitle>
          <DialogDescription className="mt-4" asChild>
            <form onSubmit={(e) => { e.preventDefault(); createNote.mutate() }}>
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="grid w-full max-w-sm items-center gap-2">
                  <label htmlFor="name" className="font-semibold w-fit">Tên nhóm</label>
                  <Input disabled={createNote.isPending} type="text" id="name" placeholder="tên nhóm..." required
                    className="focus-visible:ring-1 bg-amber-50 disabled:bg-gray-200 disabled:cursor-not-allowed"
                    value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="grid w-full max-w-sm items-center gap-2">
                  <label htmlFor="content" className="font-semibold w-fit">Nội dung</label>
                  <Textarea disabled={createNote.isPending} id="content" placeholder="nội dung..." required
                    className="bg-amber-50 focus-visible:ring-1 h-50 overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                    disabled:bg-gray-200 disabled:cursor-not-allowed"
                    value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
              </div>

              <button disabled={createNote.isPending} type="submit" 
              className="mt-10 w-full bg-amber-500 px-8 py-2 rounded-lg cursor-pointer hover:bg-amber-300 transition-colors duration-75
              disabled:bg-gray-200 disabled:cursor-not-allowed">
                Tạo
              </button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
