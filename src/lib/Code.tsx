import { useEffect, useRef } from 'react';
import './prism.js'; // side-effect import (attaches Prism to window)
import './prism.css';
import styles from './Code.module.css';

type CodeProps = {
  code: string;
  language?: string;
  className?: string;
};

export default function Code({
  code,
  language = 'javascript',
  className = '',
}: CodeProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const Prism = (window as any).Prism;

    if (codeRef.current && Prism) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <pre className={`${styles.preContainer} ${className}`}>
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
}