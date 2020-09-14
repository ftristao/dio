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
            to: `${user.name} <$email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${user.name}, bem vindo ao Teste. Suna nova senha é ${user.password}`
          });
    }
}