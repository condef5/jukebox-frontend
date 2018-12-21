import React from 'react';
import styled from 'styled-components';

const CustomModal = styled.div`
  color: black;
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 100;
  }

  .modal-main {
    position: fixed;
    background-blend-mode: hard-light;
    background: linear-gradient(rgb(30, 50, 100), rgb(4, 6, 12) 85%);
    width: 100%;
    height: 100vh;
    top: 50%;
    left: 50%;
    border-radius: 5px;
    transform: translate(-50%, -50%);
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const Modal = ({ handleClose, show, children }) => {
  const showLucas = show ? 'modal display-block' : 'modal display-none';

  return (
    <CustomModal>
      <div className={showLucas}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose} className="close" type="button">
            Cerrar
          </button>
        </section>
      </div>
    </CustomModal>
  );
};

export default Modal;
