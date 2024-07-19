import { useForm } from '@mantine/form';

export const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      contacts: '',
      projectType: '',
      projectBudget: '',
      projectDetails: '',
      projectLink: '',
    },

    validate: {
        name: (value) => {
            if (!value || value.trim() === '') return 'Введите ваше имя';
            return /^[\p{L} ]{1,32}$/u.test(value) ? null : 'Только буквы и не длиннее 32 символов';
        },
        contacts: (value) => {
            if (!value || value.trim() === '') return 'Введите ваши контакты';
            if (/^@?[a-zA-Z0-9_]{5,32}$/.test(value)) return null;
            if (/^[a-zA-Z0-9._%+-]+@(gmail\.com|vk\.com|mail\.ru|rambler\.ru|yandex\.ru|outlook\.com|yahoo\.com|mailfence\.com|protonmail\.com)$/.test(value)) return null;
            return 'Введите действительный адрес эл. почты или имя пользователя в Telegram';
        },
        projectBudget: (value) => {
            if (!value) return 'Выберите бюджет проекта';
            return null;
        },
        projectDetails: (value) => {
            if (!value) return 'Заполните данные проекта';
            return null;
        },
      },
    });