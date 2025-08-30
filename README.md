# ⏰ Horários VLT – Recife (Linha Diesel)

Bem-vindo(a) ao **Horários VLT**, um app simples, rápido e bonitão para consultar os horários dos trens da **Linha Diesel** do Metrô do Recife.  

Aqui você encontra, direto no navegador, os horários organizados dos ramais **Cabo** e **Curado** – sem precisar de PDF perdido, foto borrada ou planilha escondida em algum grupo do WhatsApp. 🙃

---

## 🚇 O que é esse app?

- Lista todos os **horários das viagens** de ida e volta dos ramais **Cabo (CAJ ↔ CBO)** e **Curado (CAJ ↔ CDO)**.  
- Visual limpo, responsivo e que funciona direto no celular.  
- Suporte para **filtro de sábado** (menos viagens, tudo destacado bonitinho).  
- A **próxima viagem** fica **realçada**, para você não perder o trem.  
- Troca de ramal fácil com botões fixos no rodapé.  
- Efeito de **transição suave**: ao trocar de ramal, a tabela desliza como se fosse um carrossel. 😍

---

## 🛠️ Tecnologias usadas

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)  
- TypeScript  
- CSS puro (com variáveis e um toque de carinho 💛)  
- Deploy automático com GitHub Actions + SSH  

---

## 👩‍💻 Como rodar localmente

Clone o repositório:

```bash
git clone https://github.com/jgaqueiroz/horarios-vlt.git
cd horarios-vlt
```
Instale as dependências:
```bash
npm install
```
Rode em modo desenvolvimento:
```bash
npm run dev
```
Acesse em: http://localhost:5173

Build de produção:
```bash
npm run build
```
---
## 🌐 Deploy

O app é estático, então o conteúdo do diretório dist/ pode ser hospedado em qualquer servidor web (Apache, Nginx, GitHub Pages, etc.).

Neste projeto usamos deploy automático via GitHub Actions:
a cada git push main, o app é buildado e enviado direto para o servidor.

---

## 🤔 Por que esse app?

Porque consultar horários de trem no Recife não precisa ser difícil.
Agora você abre o site, escolhe o ramal e pronto: sabe se dá tempo de comprar a coxinha ou se é melhor correr pra plataforma. 🥐➡️🚉

---

## ⚖️ Licença

Este projeto é livre para uso e adaptação.
A ideia é simples: facilitar a vida de quem usa o trem todo dia. 🚆✨
