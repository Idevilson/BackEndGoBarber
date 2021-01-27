# Password recovery

**RF**

- O usuário deve poder recuperar a sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções com recuperação de senha;
- O usuário deve poder resetar a sua senha;

**RNF**

- utilizar MailTrap para testar envios de email em ambiente de dev;
- Utiliar Amazon SES para envio em produção;
- O envio de e-mail deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar a senha deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar a sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar o seu nome, email e senha;

**RN**

- O usuário não pode alterar seu email para um email jpa utilizado;
- Para atualizar sua senha, o usuário deve informar a sua senha;
- Para atualizar a senha o usuário deve confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as noficações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As noficicações do prestador devem ser armazenadas no MongoDB
- AS notificações do prestador deve ser enviadas em tempo-real utilizando Socket.IO

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;
# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mêss com pelomenos um horário disponível de um prestador;
- O usuário deve poder listar horários disponívels de um dis específico de um prestador;
- O usuário deve poder realizar um agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenados em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro agendamento às 8h, último as 18);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo
