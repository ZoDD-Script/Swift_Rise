import { clients } from '../../constants'
import './clients.css'

const Clients = () => (
  <section className="swiftrie__clients">
    <div className="swiftrie__clients-logo__section">
      {clients.map((client) => (
        <div key={client.id} className="swiftrie__clients-logo__container">
          <img src={client.logo} alt="client" className="swiftrie__clients-logo" />
        </div>
      ))}
    </div>
  </section>
)

export default Clients