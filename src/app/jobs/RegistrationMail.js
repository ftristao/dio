import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3
    },
    async handle({ data }) {
        const {user } = data;
        await Mail.sendMail({
            from: 'DIO <bootcamp@dio.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Sugestão de senha segura',
            html: `Olá, ${user.name}, sua nova senha poderia ser ${user.password}`
          });
    }
}