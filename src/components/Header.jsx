export default function Header() {
  return (
    <>
      <style>{`
        .header-bar {
          width: 100%;
          background: linear-gradient(90deg, #001a00, #003300);
          padding: 20px 0;
          border-radius: 12px;
          box-shadow: 0px 0px 15px rgba(0, 255, 0, 0.2);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }

        .header-title {
          font-size: 28px;
          font-weight: bold;
          color: var(--poison-green);
          text-align: center;
        }
      `}</style>

      <header className="header-bar">
        <h1 className="header-title">
          Food Spoilage Detection Dashboard
        </h1>
      </header>
    </>
  );
}
