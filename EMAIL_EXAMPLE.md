# 📬 Пример письма, которое ты получишь

Когда кто-то заполнит форму на сайте, тебе придет письмо примерно такого вида:

---

**От:** Web3Forms <noreply@web3forms.com>  
**Кому:** твой-email@gmail.com  
**Тема:** New Contact Form: Consultation

---

**New Form Submission from ISO AI Website**

**Name:** Иван Иванов  
**Phone:** +7 900 123 45 67  
**Reason:** Consultation  

**Additional Info:**
- Subject: New Contact Form: Consultation
- From: ISO AI Website
- IP Address: 192.168.1.1
- User Agent: Mozilla/5.0...
- Timestamp: 2026-02-17 14:30:22 UTC

---

## Если выбрано "Other":

**От:** Web3Forms <noreply@web3forms.com>  
**Кому:** твой-email@gmail.com  
**Тема:** New Contact Form: Other

---

**New Form Submission from ISO AI Website**

**Name:** Петр Петров  
**Phone:** +7 900 987 65 43  
**Reason:** Other  
**Other Reason:** Хочу узнать о возможности интеграции ваших AI инструментов в наш учебный процесс для студентов технического университета.

**Additional Info:**
- Subject: New Contact Form: Other
- From: ISO AI Website
- IP Address: 192.168.1.1
- User Agent: Mozilla/5.0...
- Timestamp: 2026-02-17 15:45:10 UTC

---

## 📱 Также доступно:

### Web3Forms Dashboard
После регистрации у тебя будет доступ к панели управления:
- **https://web3forms.com/dashboard**
- Можешь посмотреть все отправленные формы
- Экспорт в CSV
- Статистика

### Настройка Email
В настройках можно:
- Изменить email получателя
- Добавить несколько email (для уведомлений команде)
- Настроить автоответ пользователю
- Настроить тему письма
- Добавить webhook для интеграции с другими сервисами

---

## ⚙️ Дополнительные настройки (опционально)

Если хочешь кастомизировать письма, добавь в код:

```javascript
// Автоответ пользователю
formData.append('redirect', 'https://your-site.com/thank-you');

// Копия на другой email
formData.append('cc', 'team@your-company.com');

// BCC (скрытая копия)
formData.append('bcc', 'archive@your-company.com');

// Кастомная тема
formData.append('subject', 'Новая заявка с сайта ISO AI');

// Подпись в письме
formData.append('replyto', 'support@your-company.com');
```

---

## 🔔 Уведомления на телефон

Чтобы получать push-уведомления:
1. Настрой пересылку с email на Telegram
2. Используй Gmail → Telegram bot
3. Или настрой Zapier/Make.com для интеграции

---

**Готово! Теперь ты не пропустишь ни одной заявки! 🚀**
