import React, { useEffect, useCallback, useRef } from 'react';
import styles from '../styles/Modal.module.css';

/**
 * ModalWrapper - Modern modal using CSS Modules
 * Different implementation than Modal.jsx
 * Different API: uses render props pattern
 */

interface ModalWrapperProps {
  open: boolean;
  onDismiss: () => void;
  title?: string;
  description?: string;
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
  preventClose?: boolean;
  children: React.ReactNode | ((props: { close: () => void }) => React.ReactNode);
  footer?: React.ReactNode;
}

export const ModalWrapper: React.FC<ModalWrapperProps> = ({
  open,
  onDismiss,
  title,
  description,
  size = 'medium',
  preventClose = false,
  children,
  footer,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const handleClose = useCallback(() => {
    if (!preventClose) {
      onDismiss();
    }
  }, [preventClose, onDismiss]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    if (open) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.addEventListener('keydown', handleKeyDown);
      document.body.classList.add(styles.bodyLocked);
      modalRef.current?.focus();

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.classList.remove(styles.bodyLocked);
        previousActiveElement.current?.focus();
      };
    }
  }, [open, handleKeyDown]);

  if (!open) return null;

  const sizeClass = styles[`modal${size.charAt(0).toUpperCase() + size.slice(1)}`];

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div
        ref={modalRef}
        className={`${styles.modal} ${sizeClass}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-describedby={description ? 'modal-description' : undefined}
        tabIndex={-1}
      >
        {(title || !preventClose) && (
          <header className={styles.header}>
            <div>
              {title && (
                <h2 id="modal-title" className={styles.title}>
                  {title}
                </h2>
              )}
              {description && (
                <p id="modal-description" className={styles.description}>
                  {description}
                </p>
              )}
            </div>
            {!preventClose && (
              <button
                type="button"
                className={styles.closeButton}
                onClick={handleClose}
                aria-label="Dismiss modal"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15M5 5L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </header>
        )}

        <div className={styles.content}>
          {typeof children === 'function'
            ? children({ close: handleClose })
            : children}
        </div>

        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </div>
  );
};

export default ModalWrapper;
