import { toast } from "react-toastify";

const defaultOptions = {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

export const successNotification = (contentMessage) =>
    toast.success(contentMessage, defaultOptions);
