# 📧 Настройка отправки формы на email

Форма теперь отправляет данные реально! Нужно только получить **бесплатный** ключ доступа.

---

## ✅ Вариант 1: Web3Forms (РЕКОМЕНДУЕТСЯ)

**Бесплатно**: 250 сообщений/месяц

### Шаги:

1. **Регистрация:**
   - Перейди на [https://web3forms.com](https://web3forms.com)
   - Нажми "Get Started" (бесплатно)
   - Введи свой email, куда будут приходить заявки

2. **Получи Access Key:**
   - После регистрации тебе придет письмо с **Access Key**
   - Скопируй этот ключ (выглядит как: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

3. **Вставь ключ в код:**
   - Открой файл `script.js`
   - Найди строку: `formData.append('access_key', 'YOUR_ACCESS_KEY_HERE');`
   - Замени `YOUR_ACCESS_KEY_HERE` на твой ключ
   - Сохрани файл

4. **Готово!** 🎉
   - Теперь все заявки будут приходить на твой email
   - Ты получишь имя, телефон, причину обращения

---

## 🔄 Вариант 2: EmailJS

**Бесплатно**: 200 сообщений/месяц

### Шаги:

1. Зарегистрируйся на [https://www.emailjs.com](https://www.emailjs.com)
2. Создай Email Service (подключи Gmail/Outlook)
3. Создай Email Template
4. Получи:
   - Public Key
   - Service ID
   - Template ID

**Код для EmailJS** (если хочешь использовать вместо Web3Forms):

```javascript
// Добавь в <head> index.html:
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

// В script.js замени блок try-catch на:
try {
    emailjs.init('YOUR_PUBLIC_KEY'); // Твой Public Key
    
    const templateParams = {
        name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        reason: reasonSelect.options[reasonSelect.selectedIndex].text,
        other_reason: otherReasonInput.value.trim()
    };
    
    const response = await emailjs.send(
        'YOUR_SERVICE_ID',   // Твой Service ID
        'YOUR_TEMPLATE_ID',  // Твой Template ID
        templateParams
    );
    
    if (response.status === 200) {
        // Success code...
    }
}
```

---

## 🚀 Вариант 3: Formspree

**Бесплатно**: 50 сообщений/месяц

1. Зарегистрируйся на [https://formspree.io](https://formspree.io)
2. Создай новую форму
3. Получи Form Endpoint (https://formspree.io/f/YOUR_FORM_ID)
4. В [script.js](script.js), строка ~945, замени:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
});
```

---

## ❓ Что лучше выбрать?

| Сервис | Бесплатно | Плюсы | Минусы |
|--------|-----------|-------|--------|
| **Web3Forms** | 250/мес | Просто, без лимитов на поля | Нужна регистрация |
| **EmailJS** | 200/мес | Кастомные шаблоны, Gmail интеграция | Нужна библиотека |
| **Formspree** | 50/мес | Самый простой | Меньше сообщений |

**Рекомендация**: Используй **Web3Forms** - самый простой и щедрый!

---

## 🧪 Тестирование

После настройки:
1. Открой сайт
2. Нажми "Contacts" в меню
3. Заполни форму
4. Нажми "Send"
5. Проверь свой email 📬

---

## 🛠️ Файлы для изменения

- **script.js** - строка ~920 (вставь Access Key)
- **index.html** - если используешь EmailJS (добавь CDN в head)

---

## Нужна помощь?
- Web3Forms docs: https://docs.web3forms.com
- EmailJS docs: https://www.emailjs.com/docs
- Formspree docs: https://help.formspree.io

---

**Важно**: После получения ключа, замени `'YOUR_ACCESS_KEY_HERE'` в [script.js](script.js#L920) на свой ключ!
