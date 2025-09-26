import { useStore } from "zustand";
import { AnimatedGridPattern } from "../components/magicui/Backgrounds/AnimatedGridPattern";
import { cn } from "../utils/cn";
import { useAuthStore } from "../stores/authStore";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import QnANotePaper, { type QnANote } from "../components/QnANotePaper";
import CreateDialog from "../components/QnA/CreateDialog";
import { db } from "../services/firebaseService"; 
import {
  ref as dbRef,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  off as dbOff,
  DataSnapshot,
} from "firebase/database";

export default function QandA() {
  const [notes, setNotes] = useState<QnANote[]>([]);

  const { user, loading } = useStore(useAuthStore);

  useEffect(() => {
    if (user) {
      console.log("Your UID:", user.uid);
    } else {
      console.log("No user yet — waiting for auth...");
    }
  }, [user]);

  useEffect(() => {
  const notesRef = dbRef(db, "notes");

  const snapToNote = (snap: DataSnapshot): QnANote | null => {
    const val = snap.val();
    if (!val) return null;
    return {
      id: snap.key as string,
      name: val.name,
      content: val.content,
      color: val.color,
      uid: val.uid,
      isComplete: !!val.isComplete,
    };
  };

  // child added
  const unsubAdded = onChildAdded(notesRef, (snap) => {
    const note = snapToNote(snap);
    if (!note) return;
    setNotes((prev) => {
      // avoid duplicates
      if (prev.find((n) => n.id === note.id)) return prev;
      return [...prev, note];
    });
  });

  // child changed
  const unsubChanged = onChildChanged(notesRef, (snap) => {
    const note = snapToNote(snap);
    if (!note) return;
    setNotes((prev) => prev.map((n) => (n.id === note.id ? note : n)));
  });

  // child removed
  const unsubRemoved = onChildRemoved(notesRef, (snap) => {
    const id = snap.key;
    if (!id) return;
    setNotes((prev) => prev.filter((n) => n.id !== id));
  });

  // cleanup
  return () => {
    // onChildAdded/onChildChanged/onChildRemoved return functions to remove listeners in v9
    try {
      unsubAdded();
      unsubChanged();
      unsubRemoved();
    } catch {
      // fallback: ensure all listeners removed
      dbOff(notesRef);
    }
  };
}, []);

  return (
    <div className="relative h-screen bg-neutral-200 overflow-hidden flex justify-center items-center -z-30 pt-26">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn("inset-x-0 inset-y-[-30%] h-[150%] skew-y-12 -z-20")}
      />

      <img className="absolute top-0 left-0 w-full h-full -z-10" src="/imgs/bg-question.png" />

      {loading ? (
        <div className="size-full flex flex-col justify-center items-center gap-4 cursor-wait">
          <Loader2 className="size-20 text-yellow-500 animate-spin" />
          <p className="font-semibold">Chờ xíu...</p>
        </div>
      ) : (
        <div className="size-full grid grid-cols-5 grid-rows-3 justify-items-center items-center gap-2 px-10">
          {notes.map((note, index) => (
            <div key={note.id} className="size-fit bg-red-200">
              <QnANotePaper 
                key={index} 
                name={note.name} 
                content={note.content} 
                isComplete={note.isComplete} 
                color={note.color ?? "#fef3c7"} 
                id={note.id}
                uid={note.uid}
              />
            </div>
          ))}
        </div>
      )}

      <div className="absolute flex justify-start items-center top-1/2 ps-1 left-0 h-fit">
        <CreateDialog />
      </div>
    </div>
  );
}
