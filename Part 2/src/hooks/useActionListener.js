import {  useEffect } from 'react';
import ActionListener from '../utils/ActionListener';

const actionListener = new ActionListener();

export const useActionListener = (action, handler) => {
    useEffect(() => {
        actionListener.registerListener(action, handler);
        return () => {
            actionListener.removeListener(action);
        };
    }, [action, handler]);
};

export { actionListener };