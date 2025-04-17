

export interface ModalCreateProps {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (fullname: string, email: string, password: string, age: number, avatar: File) => void;
}

export interface ModalCreateNewsProps {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (newNews: { title: string; description: string; medias: File[] }) => void;
}

export interface TextEditorProps {
    onValueChange: any;
    value: any
}
  
