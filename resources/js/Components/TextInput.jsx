import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                // Aquí cambiamos el focus:border-indigo... por focus:border-violet-500
                'border-gray-300 focus:border-violet-500 focus:ring-violet-500 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});
