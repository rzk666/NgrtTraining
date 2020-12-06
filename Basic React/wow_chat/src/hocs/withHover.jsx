import React from 'react';
import { motion } from 'framer-motion';

const Hover = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.div>
);

const withHover = (Componenet) => (props) => (
  <Hover>
    <Componenet {...props} />
  </Hover>
);

export default withHover;
