"use client";
import NewChat from "./NewChat";

import { useCollection } from "react-firebase-hooks/firestore";

import { signOut } from "next-auth/react";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

interface UserProps {
  user: {
    name: string | null | undefined;
    image: string | null | undefined;
    email: string | null | undefined;
  };
}
function Sidebar({ user }: UserProps) {
  const [chats, loading] = useCollection(
    user &&
      query(
        collection(db, "users", user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <NewChat user={user} />
        <div className="hidden sm:inline">
          <ModelSelection />
        </div>
        <div className="flex flex-col space-y-2 my-2">
          {loading && (
            <div className="animate-pulse text-center text-white">
              <p>Loading chats...</p>
            </div>
          )}

          {chats?.docs.map((chat) => (
            <ChatRow user={user} key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {user && (
        <img
          onClick={() => signOut()}
          src={user?.image!}
          alt="profile picture"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}

export default Sidebar;
