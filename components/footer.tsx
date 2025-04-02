export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Курс по AI для разработчиков
            </h3>
            <p className="text-gray-400">
              Интенсив по интеграции RAG и созданию AI-агентов
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  О курсе
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Программа
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Эксперты
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@elbrusboot.camp"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@elbrusboot.camp
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/elbrus_bootcamp"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Чат в Telegram
                </a>
              </li>
              <li>
                <a
                  href="tel:+78001234567"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +7 (499) 938-68-24
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Elbrus+Coding+Bootcamp+%7C+%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0+%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%D0%94%D0%BE%D0%BD%D1%81%D0%BA%D0%BE%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD/@55.7065807,37.5926111,16.25z/data=!4m13!1m6!3m5!1s0x46b54bbba5624251:0x42cefa28cf581f67!2zRWxicnVzIENvZGluZyBCb290Y2FtcCB8INCo0LrQvtC70LAg0L_RgNC-0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40Y8g0JTQvtC90YHQutC-0Lkg0YDQsNC50L7QvQ!8m2!3d55.706541!4d37.5970071!3m5!1s0x46b54bbba5624251:0x42cefa28cf581f67!8m2!3d55.706541!4d37.5970071!15sChZFbGJydXMgQ29kaW5nIEJvb3RjYW1wWjAKFmVsYnJ1cyBjb2RpbmcgYm9vdGNhbXAiFmVsYnJ1cyBjb2RpbmcgYm9vdGNhbXCSARBlZHVjYXRpb25fY2VudGVy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Москва, ул. Орджоникидзе, 11 стр. 10 (м. Ленинский проспект)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Документы</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://elbrusboot.camp/docs/confidentiality_agreement.pdf"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Политика обработки персональных данных
                </a>
              </li>
              <li>
                <a
                  href="https://elbrusboot.camp/docs/end_user_license_agreement.pdf"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a
                  href="https://elbrusboot.camp/contract_agreements/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Договор оферта
                </a>
              </li>
              <li>
                <a
                  href="https://tt.elbrusboot.camp/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Об образовательной организации
                </a>
              </li>
              <li>
                <a
                  href="https://elbrusboot.camp/docs/edu_license.pdf"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Государственная лицензия
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 ООО "Эльбрус Буткемп". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
