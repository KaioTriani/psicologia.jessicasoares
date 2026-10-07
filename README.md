# Jéssica Soares — Psicologia

Site completo em português, em HTML, CSS e JavaScript puro, preparado para **importação direta do GitHub na Hostinger como site HTML/PHP**.

## Publicar na Hostinger

1. No hPanel, acesse **Sites → Importar site → Implantar do GitHub**. Em um site HTML/PHP existente, acesse **Painel → Avançado → Git**.
2. Selecione **KaioTriani/psicologia.jessicasoares**.
3. Selecione a branch **main**.
4. Mantenha o diretório de destino **public_html** (ou o diretório do domínio configurado).
5. Clique em **Implantar/Deploy**.

O arquivo `index.html` já está na raiz. Não é necessário mover arquivos, instalar dependências, configurar variáveis de ambiente, executar build ou manter um servidor Node.js.

**Use a importação de site HTML/PHP, e não a de aplicativo Node.js.** Se aparecerem campos obrigatórios de framework, `npm install` ou build, volte e escolha a importação HTML/PHP/Git.

O destino da implantação deve ser o diretório do site que você quer publicar: a Hostinger pode substituir arquivos que já existam nele. A publicação efetiva, o domínio e o SSL são configurados no seu painel Hostinger.

Documentação oficial: https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/

## Arquivos

```text
index.html          Conteúdo e estrutura da página
styles.css          Identidade visual, responsividade e animações
app.js              WhatsApp, menu móvel, carrossel e scroll reveal
assets/jessica.jpg  Fotografia da profissional
.htaccess           Página inicial e desativação de listagem de diretórios
```

Para visualizar localmente, abra `index.html`. Opcionalmente, execute `python -m http.server 4173` nesta pasta e abra http://localhost:4173.

## Atualizações

Edite os arquivos e envie as alterações para `main`. Se a implantação automática estiver habilitada na Hostinger, a integração publicará as alterações; caso contrário, use **Redeploy** no painel.

## Conteúdo e fontes

- Dados profissionais, CRP 13/10484, TCC, telefone e link comercial do WhatsApp: https://sites.google.com/view/psiclogajssicasoares?usp=sharing
- Fotografia e depoimento de Joana Maria: https://www.doctoralia.com.br/jessica-soares-barbosa/psicologo/joao-pessoa
- Depoimentos de Gabriel Mochizuki e Alex Santos: https://marcarconsulta.com/jessica-soares-psicologo-joao-pessoa
- Apoio emocional: https://cvv.org.br/

Referências consultadas em 07/10/2026. Os depoimentos indicam a fonte consultada; não são apresentados como extração direta do Google. O site oferece um link para o perfil do Google, sem inventar sua nota média atual.

O Instagram restringiu a consulta automatizada; a identidade areia/oliva é uma proposta visual. E-mail não foi encontrado e não foi inventado. Disponibilidade online, pagamentos, valores e documentação de reembolso devem ser confirmados com a profissional. Recomenda-se validar esses dados e a atualidade da foto antes da divulgação pública.

## Verificações

A versão do site foi verificada em navegador desktop e celular (390 px), incluindo menu móvel, FAQ e carrossel, sem erros de JavaScript ou rolagem horizontal. Os arquivos de produção foram transferidos sem alterações de layout ou conteúdo. A publicação e o funcionamento no domínio final da Hostinger dependem da importação pelo painel.

Google Fonts, Google Maps e links para WhatsApp/Instagram são serviços externos. O site não usa banco de dados, formulário de coleta, analytics próprios ou credenciais. Não depende do ambiente Sites/Codex para funcionar.
