type User = {
    id: string;
    avatar: string;
    name: string;
};
  
type Message = {
    id: string;
    content: string;
    is_read: boolean;
    is_typing: boolean;
    is_me: boolean;
    type: string;
    time: string;
};
  
type MessageDetail = {
    id: string;
    is_read: boolean;
    is_typing: boolean;
    is_me: boolean;
    sent_time: string;
    text: string;
    type: string;
    time: string;
};

type MessagesUser = {
    id: string;
    avatar: string;
    name: string;
    is_me: boolean;
};

type Messages = {
    id: string;
    chat_id: string;
    user: MessagesUser;
    is_read: boolean;
    created_at: string;
    sent_time: string;
    text: string;
};
  
type ChatWindow = {
    id: string,
    chat: {
        id: string;
    };
    status: string;
    user: User;
    created_at: string;
    count_unread: number;
    messages: Message[];
};
  
type ChatDetailResponse = {
    status: number;
    error: boolean;
    message: string;
    data: {
      id: string;
      chat_id: string;
      status: string;
      handleby: string;
      sos_id: string;
      recipient: User;
      messages: Messages[];
    };
};