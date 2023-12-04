export const Modal = ({open, setModalOpen}) => {
  if (!open) return <></>;
  return (
    <div id="modal" className="modal">
      <button onClick={()=>setModalOpen(false)} id="closeModal" className="modal-close-btn">
        Close
      </button>
      <br />
      <br />
      <br />
      <br />
      <h1 className="">Nice modal</h1>
    </div>
  );
};
