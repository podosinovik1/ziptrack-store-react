import bookNumberIcon from '../assets/icons/book-number.png'
import locationIcon from '../assets/icons/location.png'
import emailIcon from '../assets/icons/email.png'
import clockIcon from '../assets/icons/clock.png'
import Link from './Link'


const Contacts = () => {
  const contacts = [
    {
      id: 'address',
      className: 'address',
      icon: locationIcon,
      alt: "Локация",
      text: "Саратов, Песчано-Уметская 42, оф.3/6",
      href: "https://yandex.ru/maps/194/saratov/house/peschano_umyotskaya_ulitsa_42/YEwYfg9lS0YCQFtrfXpxcnlqZQ==/?ll=45.885235%2C51.603591&z=17"
    },
    {
      id: 'number',
      className: 'number',
      icon: bookNumberIcon,
      alt: "Телефон",
      text: "+79873057274",
      href: "tel:+79873057274"
    },
    {
      id: 'email',
      className: 'email',
      icon: emailIcon,
      alt: "Email",
      text: "info@ziptracks.ru",
      href: "mailto:info@ziptracks.ru"
    },
    {
      id: 'work-hours',
      className: 'work-hours',
      icon: clockIcon,
      alt: "Время работы",
      text: "Пн - Пт: 8:00 - 18:00",
      href: null
    }
  ]


  return (
    <div className="contact">
      {contacts.map((contact) => (
        <div className={contact.className}>
          <img src={contact.icon} alt={contact.alt}></img>
          <Link
            className={contact.className}
            key={contact.id}
            id={contact.id}
            href={contact.href}
          >
            {contact.text}
          </Link>
          </div>
      ))}
    </div>
  )
}

export default Contacts