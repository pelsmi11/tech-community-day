import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, FC } from "react";

interface SpringModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: (value: boolean) => void;
}

export const SpringModal: FC<SpringModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onClose(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-tech-blue-800 text-white p-6 
            rounded-lg w-full lg:w-11/12 max-h-[80vh] shadow-xl cursor-default relative overflow-auto"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
