import Contacts from './Contacts'

const Footer = () => {
  return (
      <div className="footer">
        <div className="map">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7cd7d4e933305d84e9486848438e0409c53822a139bc11c3d6964c3f70df02c4"></iframe>
        </div>
        <Contacts />
        <div className="policy">
          <a href="/policy">Политика конфиденциальности</a>
        </div>
      </div>
  )
}

export default Footer