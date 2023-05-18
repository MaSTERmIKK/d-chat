import { useAtomValue } from "jotai";
import type { NextPage } from "next";
import { activeChatAtom } from "../state/common.state";
import MessageBubble from "../components/MessageBubble";

const Home: NextPage = () => {
  const activeChat = useAtomValue(activeChatAtom);

  return (
    <div className="w-full  overflow-hideden  relative">
      <div className="relative overflow-y-auto flex flex-col justify-items-stretch">
        <MessageBubble
          walletHash={"0x12n1sajklnsd"}
          messageText="Hello how u doin ?"
        />
        <MessageBubble
          walletHash={"0x66635850Ee69A9d5A1b9EB4c4C73c05fBE23fC5f"}
          messageText="Im good what about u?"
        />
        <MessageBubble
          walletHash={"0x12n1sajklnsd"}
          messageText="Hello how u doin ?"
        />
        <MessageBubble
          walletHash={"0x12n1sajklnsd"}
          messageText="Hello how u doin ?"
        />
        <MessageBubble
          walletHash={"0x66635850Ee69A9d5A1b9EB4c4C73c05fBE23fC5f"}
          messageText="Im good what about u?"
        />
        <MessageBubble
          walletHash={"0x12n1sajklnsd"}
          messageText="Hello how u doin ?"
        />
        <MessageBubble
          walletHash={"0x12n1sajklnsd"}
          messageText="Hello how u doin ?"
        />
        <MessageBubble
          walletHash={"0x66635850Ee69A9d5A1b9EB4c4C73c05fBE23fC5f"}
          messageText="Im good what about u?"
        />
        <MessageBubble
          walletHash={"0x12n1sajklnsd"}
          messageText="Hello how u doin ?"
        />
        <MessageBubble
          walletHash={"0x12n1sajklnsd"}
          messageText="Hello how u doin ?"
        />
      </div>
    </div>
  );
};

export default Home;
