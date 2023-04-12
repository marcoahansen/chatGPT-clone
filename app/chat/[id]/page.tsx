import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
import { getCurrentUser } from "@/pages/api/auth/session";

type Props = {
  params: {
    id: string;
  };
};

async function ChatPage({ params: { id } }: Props) {
  const user = await getCurrentUser();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat
        chatId={id}
        user={{
          name: user?.name,
          image: user?.image,
          email: user?.email,
        }}
      />
      <ChatInput
        chatId={id}
        user={{
          name: user?.name,
          image: user?.image,
          email: user?.email,
        }}
      />
    </div>
  );
}

export default ChatPage;
