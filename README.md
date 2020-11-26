# Recuperação de senha

**RF**
 - O usuario deve poder recuperar sua senha inforando seu e-mail;
 - O usuario deve receber um e-mail com instruções de recuperação de senha;
 - O usuario deve poder resetar sua senha

**RNF**
- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção
- O envio deemails deve acontecer em segundo plano (background job)

**RN**
- O link  enviado por e-mail para resetar a senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar a sua senha;

# Atualização do perfil
**RF**
- O usuário deve poder atualizar seu nome, email e senha;

**RN**
- O usuário não pode alterar seu email para um email ja utilizado por outro usuário;
- Para atualizar sua senha o usuário eve informar a senha antiga;
- O usuário rpecisa confirmar nova senha;

# Painel do prestador
**RF**
- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar a notificações não lidas;

**RNF**
- Os agendamentos do prestador devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no mongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io; 

**RN**
- A notificação deve ter um estatus de lida ou não lida para uqe o prestador possa controlar;

# Agendamento de serviços
**RF**
- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder lista horários disponíveis em um dia específico do prestador;
- O usuário deve poder realizar novos agendamentos com prestador;

**RNF**
- A listagem de prestadores deve ser armazenadas em cache;

**RN**
- Cada agendamento deve durar 1hora exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h(Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar um horário que ja passou;
- O usuário não pode agendar serviços consigo mesmo;