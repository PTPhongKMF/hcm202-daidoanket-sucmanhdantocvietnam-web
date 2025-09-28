import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from './shadcn/dialog';
import { NOTE_COLORS } from '../enums/note-colors';
import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '../stores/authStore';
import { ref, set, remove } from 'firebase/database';
import { db, adminUid } from '../services/firebaseService';

export interface QnANote {
  id: string; 
  name: string;
  content: string;
  color: string;
  isComplete: boolean;
  uid: string;
}

export default function QnANotePaper({ name, content, color, isComplete, id, uid }: QnANote) {
  const [isOpen, setIsOpen] = useState(false);
  const currentUid = useAuthStore((s) => s.uid);

  const noteColor = color || NOTE_COLORS[Math.floor(Math.random() * NOTE_COLORS.length)];

  // Check permissions
  const canComplete = currentUid === adminUid;
  const canDelete = currentUid === adminUid || currentUid === uid;

  const completeNote = useMutation({
    mutationFn: async () => {
      if (!canComplete) {
        alert("Bạn không có quyền đánh dấu hoàn thành câu hỏi này!");
        return;
      }
      
      const noteRef = ref(db, `notes/${id}`);
      await set(noteRef, {
        name,
        content,
        color: noteColor,
        uid: uid,
        isComplete: true
      });
    },
    onSuccess: () => {
      setIsOpen(false);
    },
    onError: (err) => {
      console.error("Complete note error:", err);
      alert("Không thể đánh dấu hoàn thành câu hỏi. Vui lòng kiểm tra console để biết thêm chi tiết.");
    }
  });

  const deleteNote = useMutation({
    mutationFn: async () => {
      if (!canDelete) {
        alert("Bạn không có quyền xóa câu hỏi này!");
        return;
      }

      const confirmDelete = confirm("Bạn có chắc chắn muốn xóa câu hỏi này không?");
      if (!confirmDelete) {
        return;
      }
      
      const noteRef = ref(db, `notes/${id}`);
      await remove(noteRef);
    },
    onSuccess: () => {
      setIsOpen(false);
    },
    onError: (err) => {
      console.error("Delete note error:", err);
        alert("Không thể xóa câu hỏi. Vui lòng kiểm tra console để biết thêm chi tiết.");
    }
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          className="group size-50 rounded-lg shadow-lg flex flex-col py-2 px-4
                      transform transition-transform duration-300 hover:scale-105 hover:-rotate-1
                      perspective cursor-pointer"
          style={{
            rotate: `${Math.random() * 4 - 2}deg`,
            backgroundColor: noteColor
          }}
        >
          <h3 className="font-bold text-lg text-gray-800 pb-2 border-b border-gray-400/50 mb-2 flex-shrink-0">
            {name}
          </h3>

          <div className="relative flex-grow overflow-hidden">
            <p
              className="h-full text-sm overflow-y-auto text-gray-900 leading-relaxed whitespace-pre-wrap
                         [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {content}
            </p>

            {isComplete && (
              <div
                className="absolute inset-0 flex items-center justify-center
                           transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0
                           pointer-events-none"
              >
                <span className="text-green-600 font-extrabold text-5xl uppercase transform -rotate-12 select-none">
                  XONG
                </span>
              </div>
            )}
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col"
        style={{
          backgroundColor: noteColor
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">
            {name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 flex flex-col min-h-0">
          <div
            className="flex-1 p-6 rounded-lg overflow-y-auto min-h-0"
            style={{ backgroundColor: noteColor }}
          >
            <p className="text-gray-900 leading-relaxed whitespace-pre-wrap h-full
                         [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {content}
            </p>
          </div>
        </div>

        <DialogFooter className="flex gap-2 pt-4">
          <button
            onClick={() => completeNote.mutate()}
            disabled={!canComplete || completeNote.isPending || isComplete}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer ${
              canComplete && !isComplete
                ? 'bg-green-500 hover:bg-green-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed'
                : 'bg-gray-300 text-gray-500 disabled:cursor-not-allowed'
            }`}
          >
            {completeNote.isPending ? 'Xong...' : 'Xong'}
          </button>
          
          <button
            onClick={() => deleteNote.mutate()}
            disabled={!canDelete || deleteNote.isPending}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer ${
              canDelete
                ? 'bg-red-500 hover:bg-red-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed'
                : 'bg-gray-300 text-gray-500 disabled:cursor-not-allowed'
            }`}
          >
            {deleteNote.isPending ? 'Xóa...' : 'Xóa'}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}