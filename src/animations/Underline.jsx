import { VStack } from "@chakra-ui/react";
import { motion, useAnimate } from "framer-motion";

const Underline = ({ children }) => {
    const [scope, animate] = useAnimate()

    const underline = () => {
        animate("div", { width: '100%', height: '2px' })
    };

    const remove = () => {
        animate("div", { width: '0%', height: '0px' })
    };

    return (
        <VStack onMouseEnter={underline} onMouseLeave={remove} ref={scope}>
            {children}
            <div className="underline" />
        </VStack>
    );
};

export default Underline;