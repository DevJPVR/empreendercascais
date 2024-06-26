import './Details.css';

export default function Details({ title, id, bgImg, bgPos, children }) {
  return (
    <section id={id} className="details">
      <h2>{title}</h2>
      <div className="details-info-box">
        {children}
      </div>
    </section>
  )
}