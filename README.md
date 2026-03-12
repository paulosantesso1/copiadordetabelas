
# Copiador de Tabelas Acessível

Uma extensão de navegador simples, leve e nativa, construída com JavaScript puro (Vanilla JS), com foco total na acessibilidade digital. 

O objetivo do projeto é injetar automaticamente um botão "Copiar Tabela" imediatamente antes de qualquer elemento `<table>` encontrado em uma página web. Isso permite que a tabela seja copiada para a área de transferência mantendo toda a sua estrutura e formatação original (HTML), pronta para ser colada no Word, Excel ou corpo de e-mails.

## Como usar com leitores de tela

A extensão foi projetada para otimizar a navegação por teclado e toques:

* **No PC (ex: NVDA):** Ao navegar por uma página, utilize o atalho de ir para a próxima tabela (letra `T`). Quando o foco estiver na tabela desejada, utilize o atalho para retornar ao elemento interativo anterior (`Shift + B`). O foco cairá exatamente no botão "Copiar Tabela". Pressione Enter ou Espaço.
* **No Mobile (ex: TalkBack):** Ao explorar a tela da esquerda para a direita, o botão de cópia será o último elemento anunciado antes de a grade da tabela começar a ser lida. Dê dois toques na tela para acionar.

O botão fornece feedback imediato, alterando seu texto para "Tabela copiada com sucesso!" após a ação.

## Instalação para testes (Modo Desenvolvedor)

Como o projeto é de código aberto, você pode rodá-lo localmente:

1. Clone este repositório ou baixe os arquivos em formato ZIP e extraia em uma pasta.
2. **No Firefox:** Acesse `about:debugging`, clique em "Este Firefox" e depois em "Carregar extensão temporária...". Selecione o arquivo `manifest.json`.
3. **No Chrome:** Acesse `chrome://extensions`, ative o "Modo do desenvolvedor" (no canto superior direito) e clique em "Carregar sem compactação". Selecione a pasta onde os arquivos foram extraídos.

## Privacidade

A extensão roda 100% localmente no navegador (client-side). Ela não coleta, não armazena e não transmite nenhum tipo de dado do usuário.

## Licença

Este projeto está licenciado sob a licença **Apache 2.0**. Sinta-se à vontade para usar, estudar, modificar e distribuir.