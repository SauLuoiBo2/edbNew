import React from 'react';

export const useIsOpen = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return { isOpen, handleToggle };
};
