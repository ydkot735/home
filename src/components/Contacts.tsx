import { useState } from "react";

const styles = {
  notification: {
    position: 'absolute',
    top: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: 'white',
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
    zIndex: 1000,
  } as React.CSSProperties
};

export default function Contacts() {

  const email = "ydkot735@gmail.com";
 // @ts-ignore
const [isCopied, setIsCopied] = useState(false);

  const [showNotification, setShowNotification] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setIsCopied(true);
        setShowNotification(true);

        setTimeout(() => {
          setIsCopied(false);
          setShowNotification(false);
        }, 2000);
      })
      .catch(err => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <div className="contacts">
      <p>Контакты:</p>
      <div className="contacts__buttons">
        <button className="email" onClick={handleCopyEmail}>
          <img src="" alt="" />
          <p>Почта</p>
        </button>
        <button className="github">
          <a href="https://github.com/ydkot735">
            <img src="" alt="" />
            <p>GitHub</p>
          </a>
        </button>
        <button className="telegram">
          <a href="https://t.me/ydkot735">
            <img src="" alt="" />
            <p>Telegram</p>
          </a>
        </button>
      </div>

      {showNotification && (
        <div style={styles.notification}>
          Почта скопирована!
        </div>
      )}
    </div>
  )
}