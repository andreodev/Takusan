
import { motion, AnimatePresence } from "framer-motion";

export function GenrerOverlay({ genres, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 text-white text-sm pointer-events-none"
        >
          {genres.join(", ")}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
