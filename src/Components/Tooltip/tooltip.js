import React from 'react';
import { usePopper } from 'react-popper';

const ReactPopperTooltip = ({ content, children }) => {
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const [arrowElement, setArrowElement] = React.useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  return (
    <div>
      <div ref={setReferenceElement}>{children}</div>
      <div
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {content}
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </div>
  );
};

export default ReactPopperTooltip