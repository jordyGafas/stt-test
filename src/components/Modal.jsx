export const Modal = ({open, setModalOpen}) => {
  if (!open) return <></>;
  return (
    <div id="modal" className="modal fixed w-1/2 top-0 right-0 h-full overflow-hidden bg-black text-white">
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
