# Scraper de tabelas e-SUS (vacinas)

Essa aplicação tem como finalidade condensar em um único local as tabelas mais importantes do fluxo de registro de vacinas do e-SUS, para auxiliar os profissionais da área de saúde (sistemas ou serviços) na tomada de decisões durante o apoio ao cliente ou no desenvolvimento de sistemas com regras compatíveis.

![image](https://user-images.githubusercontent.com/16089829/201761784-e346fa44-1de2-4d73-9009-e441603da9a6.png)

[Clique aqui para utilizar a aplicação.](https://rodrigocucick.github.io/esus-vacina-scraper/)

# Informações específicas

A aplicação sempre retornará os dados da versão mais atual do LEDI (Layout e-SUS APS de Dados e Interface) através de requisições às seguintes URLs:
- [Regras vacinais](https://integracao.esusab.ufsc.br/ledi/documentacao/regras/validar_regras_vacinacao.html)
- [Dicionário de dados](https://integracao.esusab.ufsc.br/ledi/documentacao/referencias/dicionario.html)

É possível selecionar quais tabelas que deseja obter através de uma lista pré-definida com as tabelas mais importantes do fluxo de registro de vacina do e-SUS, são elas (_posteriormente, poderão ser adicionadas mais tabelas ao fluxo_):
1. Regras vacinais
2. Imunobiológicos
3. Doses
4. Estratégias
5. Grupos de Atendimento

Também é possível ocultar e exibir tabelas específicas através do clique no nome da tabela:

![image](https://user-images.githubusercontent.com/16089829/201761911-9585472c-1b5d-4f6f-bcc7-feeb42217ef1.png)

# Planos futuros
- Implementar captcha para impedir que a aplicação seja utilizada por processos automatizados.
- Analisar outras possíveis tabelas importantes ao fluxo de registro de vacina do e-SUS e implementá-las na aplicação.
- Otimizar o layout para utilização em dispositivos portáteis.
- Adicionar scrape de tabelas PNI do RNDS. **ALTA PRIORIDADE!**

# Changelog
**v1.2 - 25/11/2022**
- Implementado botão para rolar para o topo da página caso o scroll da página não esteja no topo.

**v1.1 - 18/11/2022**
- Implementada funcionalidade para obter o changelog do LEDI.

**v1.0 - 14/11/2022**
- Versão inicial disponibilizada.