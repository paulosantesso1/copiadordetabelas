const tabelas = document.querySelectorAll('table');

tabelas.forEach((tabela) => {
    // Cria o botão
    const botao = document.createElement('button');
    botao.innerText = 'Copiar Tabela';
    botao.style.margin = '10px 0';
    botao.style.padding = '5px 10px';
    botao.style.display = 'block';

    // Insere o botão no código HTML da página, exatamente antes da tabela
    tabela.parentNode.insertBefore(botao, tabela);

    // Ação ao clicar no botão
    botao.addEventListener('click', async () => {
        try {
            // Pega o HTML completo da tabela
            const htmlDaTabela = tabela.outerHTML;
            
            // Prepara os dados para a área de transferência em formato HTML e Texto
            const blobHtml = new Blob([htmlDaTabela], { type: 'text/html' });
            const blobTexto = new Blob([tabela.innerText], { type: 'text/plain' });

            const itemAreaDeTransferencia = new ClipboardItem({
                'text/html': blobHtml,
                'text/plain': blobTexto
            });

            // Executa a cópia
            await navigator.clipboard.write([itemAreaDeTransferencia]);

            // Feedback dinâmico
            const textoOriginal = botao.innerText;
            botao.innerText = 'Tabela copiada com sucesso!';

            // Retorna ao texto original após 2 segundos
            setTimeout(() => {
                botao.innerText = textoOriginal;
            }, 2000);

        } catch (erro) {
            botao.innerText = 'Erro ao copiar';
            setTimeout(() => {
                botao.innerText = 'Copiar Tabela';
            }, 2000);
        }
    });
});