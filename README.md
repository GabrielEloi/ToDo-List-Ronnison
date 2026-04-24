# ToDo-List-Ronnison

Estude! - Documentação

## 📋 Descrição
Estude! é um aplicativo web simples para gerenciar tarefas de estudo com a técnica Pomodoro integrada. Perfeito para estudantes que desejam organizar seus estudos e manter o foco.

## 🎯 Funcionalidades

### 1. **Login**
- Tela inicial com autenticação simples
- O usuário insere seu nome para personalizacao
- Acesso à tela inicial (home)

### 2. **Home**
- Exibe uma saudação personalizada com o nome do usuário
- Mostra a data atual
- Seção "Foco do dia" para começar uma sessão Pomodoro
- Lista de tarefas criadas
- Botão flutuante (+) para adicionar novas tarefas

### 3. **Criar Tarefa**
- Permite adicionar uma nova tarefa
- Campo de entrada para o título da tarefa
- Botões para salvar ou voltar

### 4. **Modo Foco (Pomodoro)**
- Timer de 25 minutos (técnica Pomodoro clássica)
- Botões:
  - **Iniciar**: Começa a contagem regressiva
  - **Pausar/Continuar**: Pausa e retoma o timer
  - **Sair**: Volta à home e reseta o timer
- Alerta quando o tempo termina

### 5. **Gerenciar Tarefas**
- Visualizar todas as tarefas criadas
- Cada tarefa tem dois botões:
  - **Modo Foco**: Inicia uma sessão Pomodoro
  - **Concluído**: Remove a tarefa da lista

## 📁 Estrutura dos Arquivos

```
ToDo List/
├── Index.html       # Estrutura HTML do aplicativo
├── script.js        # Lógica JavaScript
├── style.css        # Estilos CSS
└── README.md        # Documentação
```

## 🔧 Como Usar

1. **Abra o arquivo `Index.html`** em um navegador web
2. **Digite seu nome** no campo de login e clique em "Entrar"
3. **Na home**, você pode:
   - Clique no botão "Começar" para iniciar uma sessão Pomodoro
   - Clique no botão "+" para adicionar uma nova tarefa
4. **Para adicionar uma tarefa**:
   - Digite o título da tarefa
   - Clique em "Salvar"
5. **Para usar o Pomodoro**:
   - Clique em "Modo Foco" em uma tarefa ou "Começar" no foco do dia
   - Clique em "Iniciar" para começar a contar 25 minutos
   - Use "Pausar" para parar temporariamente
   - Clique em "Sair" para voltar à home

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilização e design responsivo
- **JavaScript (Vanilla)**: Lógica e interatividade

## 🎨 Cores Principais

- Azul Indigo: `#4f46e5` (fundo da seção)
- Branco: `#ffffff` (botões)
- Cinza claro: `#f5f5f5` (fundo da página)

## 📝 Notas

- O aplicativo armazena dados apenas em memória (não persiste após atualizar a página)
- A saudação muda de "Boa noite" para "Boa noite + nome" após login
- O timer pode ser pausado e retomado sem problemas
- As tarefas podem ser adicionadas, listadas e removidas dinamicamente

## 🚀 Possíveis Melhorias Futuras

- Salvar tarefas no LocalStorage
- Autenticação real com backend
- Diferentes durações de Pomodoro (pequeno, médio, longo)
- Notificações sonoras quando o timer termina
- Modo escuro
- Histórico de tarefas completadas

---
**Criado com ❤️ para ajudar nos estudos!**
