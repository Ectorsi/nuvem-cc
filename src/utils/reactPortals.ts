import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type TPortalProps = {
    wrapperId: string;
    children: React.ReactNode;
};

function createWrapperAndAppendToBody(wrapperId: string) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    wrapperElement.setAttribute('data-testid', wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}

function ReactPortal({
    children,
    wrapperId = 'react-portal-wrapper',
}: TPortalProps) {
    const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
        null
    );

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;

        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);

        return () => {
            if (systemCreated && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperId]);

    if (wrapperElement === null) return null;

    return createPortal(children, wrapperElement);
}

export default ReactPortal;
