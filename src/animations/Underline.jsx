import { VStack } from "@chakra-ui/react";
import { motion, useAnimate } from "framer-motion";

const Underline = ({ children }) => {
    const [scope, animate] = useAnimate()

    const underline = () => {
        animate("div", { width: '100%', opacity: 1 })
    };

    const remove = () => {
        animate("div", { width: '0%', opacity: 0 })
    };

    return (
        <VStack onMouseEnter={underline} onMouseLeave={remove} ref={scope}>
            {children}
            <div className="underline" />
        </VStack>
    );
};

export default Underline;