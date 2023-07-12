const messages = {
  en: 'Data has already been submitted',
  fr: 'Les données ont déjà été soumises',
  es: 'Los datos ya han sido enviados',
  de: 'Daten wurden bereits übermittelt',
  ru: 'Данные уже отправлены',
  uk: 'Дані вже відправлені',
  it: 'I dati sono già stati inviati',
  pt: 'Os dados já foram enviados',
  ja: 'データは既に送信されています',
  ko: '데이터가 이미 제출되었습니다'
};
const userLang = navigator.language.slice(0, 2); // Получаем язык браузера пользователя
const form = document.querySelector('form'); // Получаем форму
const phoneInput = form.querySelector('input[name="phone"]'); // Получаем поле для ввода номера телефона
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Отменяем стандартное поведение при отправке формы
  const data = localStorage.getItem('formData'); // Получаем данные из локального хранилища
  if (data) {
    const { phone } = JSON.parse(data); // Извлекаем сохраненный номер телефона из данных
    const formattedPhone = phone.replace(/[^0-9]/g, ''); // Удаляем все символы, кроме цифр
    const inputPhone = phoneInput.value.replace(/[^0-9]/g, ''); // Удаляем все символы, кроме цифр
    if (formattedPhone === inputPhone) {
      // Если сохраненный номер телефона совпадает с введенным номером
      alert(messages[userLang] || messages['en']); // Выводим сообщение на нужном языке
      return; // Прерываем выполнение кода
    }
  }
  const formData = { phone: phoneInput.value }; // Формируем объект с данными для сохранения
  localStorage.setItem('formData', JSON.stringify(formData)); // Сохраняем данные в локальное хранилище
  form.submit(); // Отправляем форму
});