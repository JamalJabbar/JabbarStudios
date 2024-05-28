import { VStack } from "@chakra-ui/react";
import { motion, useAnimate } from "framer-motion";

const Underline = ({ children }) => {
    const [scope, animate] = useAnimate()

    const sequence = [
        ["div", { width: '0%' }, { duration: 0.2 }],
        ["div", { width: '100%' }, { ease: "easeInOut" }]
    ]

    const underline = () => {
        animate(sequence)
    };

    const remove = () => {
        animate("div", { width: '0%', opacity: 0 })
    };

    return (
        <VStack onMouseEnter={underline} ref={scope}>
            {children}
            <div className="underline" />
        </VStack>
    );
};

export default Underline;