import { db } from "@/firebase";
import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";

interface UserProps {
  user: {
    name: string | null | undefined;
    image: string | null | undefined;
    email: string | null | undefined;
  };
}

function NewChat({ user }: UserProps) {
  const router = useRouter();
  const createNewChat = async () => {
    const doc = await addDoc(collection(db, "users", user?.email!, "chats"), {
      userId: user?.email!,
      createdAt: serverTimestamp(),
    });

    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
