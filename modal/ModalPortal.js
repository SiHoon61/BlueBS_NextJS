import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';

const ModalPortal = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) {
        return null;
    }

    const el = document.getElementById('modal');
    return el ? ReactDOM.createPortal(children, el) : null;
};

export default ModalPortal;
