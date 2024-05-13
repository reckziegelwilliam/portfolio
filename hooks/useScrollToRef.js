// hooks/useScrollToRef.js
import { useRef } from 'react';

export default function useScrollToRef() {
    const ref = useRef(null);
    const executeScroll = () => ref.current?.scrollIntoView({ behavior: 'smooth' });
    return [ref, executeScroll];
}
